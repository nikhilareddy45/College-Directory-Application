import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate } from './auth';
import { Role } from './constants';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(Role.STUDENT);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await authenticate(username, password, role);
      if (token) {
        localStorage.setItem('token', token);
        navigate(`/${role.toLowerCase()}-dashboard`);
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Error logging in');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <label>
          Role:
          <select value={role} onChange={(event) => setRole(event.target.value)}>
            <option value={Role.STUDENT}>Student</option>
            <option value={Role.FACULTY_MEMBER}>Faculty Member</option>
            <option value={Role.ADMINISTRATOR}>Administrator</option>
          </select>
        </label>
        <br />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
