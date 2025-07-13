// src/pages/Courses.jsx
import React, { useState } from 'react';
import { FaBook, FaSearch, FaFilter, FaPlus } from 'react-icons/fa';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = ['All', 'Computer Science', 'Mathematics', 'Engineering', 'Business', 'Design'];
  
  const courses = [
    { 
      id: 1, 
      title: 'Advanced Algorithms', 
      instructor: 'Dr. Sarah Johnson', 
      category: 'Computer Science', 
      progress: 75, 
      enrolled: true,
      thumbnail: 'algorithms'
    },
    { 
      id: 2, 
      title: 'Machine Learning Fundamentals', 
      instructor: 'Prof. Michael Chen', 
      category: 'Computer Science', 
      progress: 50, 
      enrolled: true,
      thumbnail: 'ml'
    },
    { 
      id: 3, 
      title: 'Web Development Bootcamp', 
      instructor: 'Alex Thompson', 
      category: 'Computer Science', 
      progress: 90, 
      enrolled: true,
      thumbnail: 'webdev'
    },
    { 
      id: 4, 
      title: 'Calculus III', 
      instructor: 'Dr. Robert Davis', 
      category: 'Mathematics', 
      progress: 0, 
      enrolled: false,
      thumbnail: 'calculus'
    },
    { 
      id: 5, 
      title: 'Business Analytics', 
      instructor: 'Prof. Emily Wilson', 
      category: 'Business', 
      progress: 0, 
      enrolled: false,
      thumbnail: 'business'
    },
    { 
      id: 6, 
      title: 'UI/UX Design Principles', 
      instructor: 'Jessica Parker', 
      category: 'Design', 
      progress: 0, 
      enrolled: false,
      thumbnail: 'design'
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeTab === 'all' || course.category === activeTab;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">My Courses</h1>
        <p className="text-gray-600">Manage your learning journey and discover new courses</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="relative flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search courses or instructors..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            <FaFilter className="mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark">
            <FaPlus className="mr-2" />
            New Course
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === category 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition">
            <div className="h-40 bg-gray-200 border-2 border-dashed" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  course.enrolled ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {course.enrolled ? 'Enrolled' : 'Not Enrolled'}
                </span>
              </div>
              <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
              
              {course.enrolled && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              <div className="flex gap-3">
                <button className={`flex-1 py-2 rounded-lg font-medium ${
                  course.enrolled 
                    ? 'bg-primary text-white hover:bg-primary-dark' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  {course.enrolled ? 'Continue' : 'Enroll Now'}
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;