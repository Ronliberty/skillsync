// src/pages/Dashboard.jsx
import React from 'react';
import { FaBook, FaCalendarAlt, FaChartBar, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import Progress from '../components/dashboard/Progress';

const Dashboard = () => {
  // Mock data
  const courses = [
    { id: 1, title: 'Advanced Algorithms', progress: 75, instructor: 'Dr. Smith' },
    { id: 2, title: 'Machine Learning', progress: 50, instructor: 'Prof. Johnson' },
    { id: 3, title: 'Web Development', progress: 90, instructor: 'Dr. Williams' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Midterm Exam', course: 'Advanced Algorithms', date: 'Oct 15, 2023', time: '9:00 AM' },
    { id: 2, title: 'Project Submission', course: 'Web Development', date: 'Oct 18, 2023', time: '11:59 PM' },
    { id: 3, title: 'Guest Lecture', course: 'Machine Learning', date: 'Oct 20, 2023', time: '2:00 PM' },
  ];

  const stats = [
    { id: 1, title: 'Active Courses', value: 5, icon: <FaBook className="text-blue-500" /> },
    { id: 2, title: 'Assignments Due', value: 3, icon: <FaCalendarAlt className="text-yellow-500" /> },
    { id: 3, title: 'Completed Courses', value: 12, icon: <FaGraduationCap className="text-green-500" /> },
    { id: 4, title: 'Achievements', value: 8, icon: <FaTrophy className="text-purple-500" /> },
  ];

  return (
    <div className="p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Emma! Here's your learning progress.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-xl shadow-sm p-6 flex items-center">
            <div className="text-3xl mr-4">
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Course Progress</h2>
            <button className="text-primary hover:text-primary-dark font-medium">View All</button>
          </div>
          
          <div className="space-y-6">
            {courses.map((course) => (
              <div key={course.id}>
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-gray-800">{course.title}</h3>
                  <span className="text-gray-600">{course.progress}%</span>
                </div>
                <Progress progress={course.progress} />
                <p className="text-sm text-gray-500 mt-1">Instructor: {course.instructor}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Upcoming Events</h2>
            <button className="text-primary hover:text-primary-dark font-medium">View Calendar</button>
          </div>
          
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-lg mr-4">
                  <FaCalendarAlt className="text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.course}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-medium">{event.date}</p>
                  <p className="text-gray-600 text-sm">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>
        
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center p-4 border border-gray-200 rounded-lg">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <div className="ml-4 flex-1">
                <h3 className="font-medium text-gray-800">Completed assignment for Web Development</h3>
                <p className="text-gray-600">Submitted Module 5 assignment on responsive design</p>
                <p className="text-gray-500 text-sm mt-1">2 hours ago</p>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Completed
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;