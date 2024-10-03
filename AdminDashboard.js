import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from './api';

const AdminDashboard = () => {
  const [admin, setAdmin] = useState({});
  const [students, setStudents] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await api.get('/admin/me');
        setAdmin(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchStudents = async () => {
      try {
        const response = await api.get('/students');
        setStudents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchFaculty = async () => {
      try {
        const response = await api.get('/faculty');
        setFaculty(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCourses = async () => {
      try {
        const response = await api.get('/courses');
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAdmin();
    fetchStudents();
    fetchFaculty();
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Name: {admin.name}</p>
      <p>Email: {admin.email}</p>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
      <h2>Faculty</h2>
      <ul>
        {faculty.map((facultyMember) => (
          <li key={facultyMember.id}>{facultyMember.name}</li>
        ))}
      </ul>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
      <button onClick={() => navigate('/admin/profile')}>View Profile</button>
    </div>
  );
};

export default AdminDashboard;
