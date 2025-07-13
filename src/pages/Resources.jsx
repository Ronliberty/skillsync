// src/pages/Resources.jsx
import React, { useState } from 'react';
import { FaBook, FaFilePdf, FaVideo, FaSearch, FaFilter, FaDownload, FaFolder } from 'react-icons/fa';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    { id: 'all', name: 'All Resources', icon: <FaFolder /> },
    { id: 'lectures', name: 'Lecture Notes', icon: <FaBook /> },
    { id: 'pdfs', name: 'PDFs & Slides', icon: <FaFilePdf /> },
    { id: 'videos', name: 'Video Lectures', icon: <FaVideo /> },
    { id: 'assignments', name: 'Assignments', icon: <FaFilePdf /> },
    { id: 'exams', name: 'Past Exams', icon: <FaFilePdf /> },
  ];
  
  const resources = [
    {
      id: 1,
      title: 'Introduction to Algorithms',
      course: 'Advanced Algorithms',
      category: 'lectures',
      type: 'pdf',
      size: '4.2 MB',
      date: 'Oct 10, 2023'
    },
    {
      id: 2,
      title: 'Machine Learning Week 3 Slides',
      course: 'Machine Learning',
      category: 'pdfs',
      type: 'pdf',
      size: '3.1 MB',
      date: 'Oct 5, 2023'
    },
    {
      id: 3,
      title: 'Web Development - CSS Frameworks',
      course: 'Web Development',
      category: 'videos',
      type: 'video',
      size: '120 MB',
      date: 'Oct 2, 2023'
    },
    {
      id: 4,
      title: 'Assignment 1: Data Structures',
      course: 'Advanced Algorithms',
      category: 'assignments',
      type: 'pdf',
      size: '2.8 MB',
      date: 'Sep 28, 2023'
    },
    {
      id: 5,
      title: 'Midterm Exam 2022',
      course: 'Calculus III',
      category: 'exams',
      type: 'pdf',
      size: '1.5 MB',
      date: 'Sep 25, 2023'
    },
    {
      id: 6,
      title: 'JavaScript Fundamentals',
      course: 'Web Development',
      category: 'lectures',
      type: 'pdf',
      size: '3.7 MB',
      date: 'Sep 20, 2023'
    },
  ];
  
  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.course.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Learning Resources</h1>
        <p className="text-gray-600">Access course materials, lecture notes, and study resources</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="relative flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search resources..."
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
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            className={`flex flex-col items-center p-4 rounded-xl border transition ${
              activeCategory === category.id 
                ? 'border-primary bg-primary bg-opacity-10 text-primary' 
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <div className="text-2xl mb-2">
              {category.icon}
            </div>
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Resources Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="py-4 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredResources.map(resource => (
              <tr key={resource.id} className="hover:bg-gray-50 transition">
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                      resource.type === 'pdf' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {resource.type === 'pdf' ? <FaFilePdf /> : <FaVideo />}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{resource.title}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="text-gray-700">{resource.course}</div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                    {categories.find(c => c.id === resource.category)?.name || resource.category}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-700">{resource.size}</td>
                <td className="py-4 px-6 text-gray-700">{resource.date}</td>
                <td className="py-4 px-6 text-right">
                  <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                    <FaDownload />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <FaBook className="mx-auto text-gray-300 text-4xl mb-3" />
            <p className="text-gray-500">No resources found</p>
            <p className="text-gray-500 text-sm mt-1">Try changing your filters or search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;