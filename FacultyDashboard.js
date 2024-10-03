import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from './api';

const FacultyDashboard = () => {
  const [faculty, setFaculty] = useState({});
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await api.get('/faculty/me');
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

    const fetchStudents = async () => {
      try {
        const response = await api.get('/students');
        setStudents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFaculty();
    fetchCourses();
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Faculty Dashboard</h1>
      <p>Name: {faculty.name}</p>
      <p>Email: {faculty.email}</p>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
      <button onClick={() => navigate('/faculty/profile')}>View Profile</button>
    </div>
  );
};

export default FacultyDashboard;
