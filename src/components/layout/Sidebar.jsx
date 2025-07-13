// src/components/Sidebar.jsx
import { useState } from 'react';
import { FaGraduationCap, FaTachometerAlt, FaBook, FaCalendarAlt, FaFileAlt, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
   const location = useLocation();

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FaTachometerAlt, path: '/dashboard' },
    { id: 'courses', label: 'My Courses', icon: FaBook, path: '/courses' },
    { id: 'schedule', label: 'Schedule', icon: FaCalendarAlt, path: '/schedule' },
    { id: 'resources', label: 'Resources', icon: FaFileAlt, path: '/resources' },
    { id: 'community', label: 'Community', icon: FaUsers, path: 'community' },
  ];

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    setIsMobileSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile sidebar toggle button */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button 
          onClick={() => setIsMobileSidebarOpen(true)}
          className="p-2 rounded-lg bg-white shadow-md text-gray-700 hover:bg-gray-100 transition"
          aria-label="Open sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed md:relative z-50 transform transition-transform duration-300 ease-in-out ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex flex-col w-64 h-screen bg-white border-r border-gray-200">
          {/* Close button for mobile */}
          <div className="md:hidden flex justify-end p-4">
            <button 
              onClick={() => setIsMobileSidebarOpen(false)}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
              aria-label="Close sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Logo section */}
          <div className="h-16 flex items-center px-6 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <span className="ml-2 text-xl font-bold text-dark">
                Skill<span className="text-primary">Sync</span>
              </span>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-4 py-6 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                
                return (
                  <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `w-full text-left flex items-center px-4 py-2.5 rounded-lg font-medium transition ${
                isActive
                  ? 'bg-primary bg-opacity-10 text-primary border-l-4 border-primary'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <Icon className="mr-3" />
            {item.label}
          </NavLink>
        );
      })}
    </nav>

            
            {/* User profile and settings */}
            <div className="px-4 py-6 border-t border-gray-200">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-dashed flex items-center justify-center text-gray-500">
                    <span className="text-sm">EJ</span>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Emma Johnson</p>
                  <p className="text-sm text-gray-500">Computer Science</p>
                </div>
              </div>
              <Link to="/settings" className="w-full text-left flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2.5 rounded-lg font-medium transition">
                <FaCog className="mr-3" />
                Account Settings
              </Link>
              <button className="w-full text-left flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2.5 rounded-lg font-medium transition">
                <FaSignOutAlt className="mr-3" />
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;