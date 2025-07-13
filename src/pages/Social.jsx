
import React, { useState } from 'react';
import { FaUsers, FaSearch, FaPlus, FaComment, FaThumbsUp, FaShare } from 'react-icons/fa';

const Social = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const tabs = [
    { id: 'all', name: 'All Discussions' },
    { id: 'courses', name: 'Course Related' },
    { id: 'study', name: 'Study Groups' },
    { id: 'questions', name: 'Questions' },
    { id: 'announcements', name: 'Announcements' },
  ];
  
  const discussions = [
    {
      id: 1,
      title: 'Help with Algorithm Assignment',
      author: 'John Smith',
      course: 'Advanced Algorithms',
      category: 'questions',
      date: '2 hours ago',
      comments: 12,
      likes: 24,
      content: "I'm having trouble with problem 3 in the assignment. Can anyone explain the approach for solving it?",
      authorAvatar: 'JS'
    },
    {
      id: 2,
      title: 'Forming a study group for Machine Learning',
      author: 'Sophia Lee',
      course: 'Machine Learning',
      category: 'study',
      date: '5 hours ago',
      comments: 8,
      likes: 15,
      content: "Looking for 3-4 students to form a study group for the ML midterm. We'll meet twice a week.",
      authorAvatar: 'SL'
    },
    {
      id: 3,
      title: 'Important Announcement: Lecture Canceled',
      author: 'Prof. Chen',
      course: 'Machine Learning',
      category: 'announcements',
      date: '1 day ago',
      comments: 5,
      likes: 32,
      content: "Next week's lecture on October 20th is canceled due to a conference. Please watch the recorded lecture instead.",
      authorAvatar: 'PC'
    },
    {
    id: 4,
      title: 'Best resources for learning React?',
      author: 'Mike Johnson',
      course: 'Web Development',
      category: 'questions',
      date: '1 day ago',
      comments: 18,
      likes: 42,
      content: "I want to deepen my React knowledge beyond the course material. Any recommendations for tutorials or courses?",
      authorAvatar: 'MJ'
    },
    {
      id: 5,
      title: 'Project partner needed',
      author: 'Emma Wilson',
      course: 'Web Development',
      category: 'courses',
      date: '2 days ago',
      comments: 6,
      likes: 10,
      content: "Looking for a partner for the final project. I'm strong in frontend but need help with backend.",
      authorAvatar: 'EW'
    },
  ];
  
  const filteredDiscussions = discussions.filter(discussion => {
    const matchesCategory = activeTab === 'all' || discussion.category === activeTab;
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         discussion.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Community</h1>
        <p className="text-gray-600">Connect with fellow students, ask questions, and share knowledge</p>
      </div>

      {/* Search and Create */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="relative flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search discussions..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
        <button className="flex items-center px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark">
          <FaPlus className="mr-2" />
          New Discussion
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === tab.id 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Discussions */}
      <div className="space-y-6">
        {filteredDiscussions.map(discussion => (
          <div key={discussion.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-dashed flex items-center justify-center text-gray-700 font-bold">
                  {discussion.authorAvatar}
                </div>
              </div>
              
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{discussion.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <span>{discussion.author}</span>
                      {discussion.course && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="text-primary">{discussion.course}</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-gray-500 text-sm">{discussion.date}</div>
                </div>
                
                <p className="mt-3 text-gray-700">{discussion.content}</p>
                
                <div className="flex items-center mt-4">
                  <button className="flex items-center text-gray-500 hover:text-gray-700 mr-6">
                    <FaThumbsUp className="mr-2" />
                    <span>{discussion.likes}</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-gray-700 mr-6">
                    <FaComment className="mr-2" />
                    <span>{discussion.comments} comments</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-gray-700">
                    <FaShare className="mr-2" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {filteredDiscussions.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <FaUsers className="mx-auto text-gray-300 text-4xl mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">No discussions found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              There are no discussions matching your search criteria. Try changing your filters or start a new discussion.
            </p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
              Start a Discussion
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Social;