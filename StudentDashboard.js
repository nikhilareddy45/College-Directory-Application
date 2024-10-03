import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from './api';

const StudentDashboard = () => {
  const [student, setStudent] = useState({});
  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await api.get('/students/me');
        setStudent(response.data);
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

    const fetchGrades = async () => {
      try {
        const response = await api.get('/grades');
        setGrades(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudent();
    fetchCourses();
    fetchGrades();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
      <h2>Grades</h2>
      <ul>
        {grades.map((grade) => (
          <li key={grade.id}>{grade.course.name}: {grade.grade}</li>
        ))}
      </ul>
      <button onClick={() => navigate('/student/profile')}>View Profile</button>
    </div>
  );
};

export default StudentDashboard;
