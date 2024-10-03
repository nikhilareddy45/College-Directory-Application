import api from './api';

const authenticate = async (username, password, role) => {
  try {
    const response = await api.post('/login', {
      username,
      password,
      role,
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default authenticate;
