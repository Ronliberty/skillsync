// src/pages/Schedule.jsx
import React, { useState } from 'react';
import { FaCalendarAlt, FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState('week'); // 'day', 'week', or 'month'

  // Sample schedule data
  const events = [
    {
      id: 1,
      title: 'Machine Learning Lecture',
      type: 'lecture',
      date: new Date(2023, 9, 15, 10, 0),
      duration: 90,
      location: 'Room 304',
      instructor: 'Prof. Chen'
    },
    {
      id: 2,
      title: 'Web Development Lab',
      type: 'lab',
      date: new Date(2023, 9, 15, 14, 0),
      duration: 120,
      location: 'Computer Lab B',
      instructor: 'Alex Thompson'
    },
    {
      id: 3,
      title: 'Group Project Meeting',
      type: 'meeting',
      date: new Date(2023, 9, 16, 16, 0),
      duration: 60,
      location: 'Library Study Room 3',
      participants: ['Emma', 'John', 'Sophia']
    },
    {
      id: 4,
      title: 'Calculus Midterm',
      type: 'exam',
      date: new Date(2023, 9, 17, 9, 0),
      duration: 120,
      location: 'Hall A',
      instructor: 'Dr. Davis'
    },
    {
      id: 5,
      title: 'Career Workshop',
      type: 'workshop',
      date: new Date(2023, 9, 18, 13, 0),
      duration: 90,
      location: 'Career Center',
      organizer: 'University Career Services'
    },
  ];

  // Navigation functions
  const goToPrevious = () => {
    const newDate = new Date(currentDate);
    if (view === 'day') {
      newDate.setDate(newDate.getDate() - 1);
    } else if (view === 'week') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  const goToNext = () => {
    const newDate = new Date(currentDate);
    if (view === 'day') {
      newDate.setDate(newDate.getDate() + 1);
    } else if (view === 'week') {
      newDate.setDate(newDate.getDate() + 7);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  // Filter events for the selected day
  const dayEvents = events.filter(event => {
    return event.date.toDateString() === selectedDate.toDateString();
  });

  // Get type color
  const getTypeColor = (type) => {
    switch (type) {
      case 'lecture': return 'bg-blue-100 text-blue-800';
      case 'lab': return 'bg-green-100 text-green-800';
      case 'exam': return 'bg-red-100 text-red-800';
      case 'meeting': return 'bg-purple-100 text-purple-800';
      case 'workshop': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Format time
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Schedule</h1>
        <p className="text-gray-600">Manage your classes, events, and deadlines</p>
      </div>

      {/* Calendar Controls */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button 
              className="p-2 rounded-lg hover:bg-gray-100"
              onClick={goToPrevious}
            >
              <FaChevronLeft />
            </button>
            <button 
              className="p-2 rounded-lg hover:bg-gray-100"
              onClick={goToNext}
            >
              <FaChevronRight />
            </button>
            <h2 className="text-xl font-bold text-gray-800">
              {currentDate.toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric',
                ...(view === 'day' && { day: 'numeric' }),
                ...(view === 'week' && { week: 'short' })
              })}
            </h2>
            <button 
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200"
              onClick={goToToday}
            >
              Today
            </button>
          </div>
          
          <div className="flex gap-2">
            <button 
              className={`px-4 py-2 rounded-lg font-medium ${
                view === 'day' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setView('day')}
            >
              Day
            </button>
            <button 
              className={`px-4 py-2 rounded-lg font-medium ${
                view === 'week' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setView('week')}
            >
              Week
            </button>
            <button 
              className={`px-4 py-2 rounded-lg font-medium ${
                view === 'month' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setView('month')}
            >
              Month
            </button>
          </div>
          
          <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
            <FaPlus className="mr-2" />
            Add Event
          </button>
        </div>
      </div>

      {/* Calendar View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mini Calendar */}
        <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">October 2023</h3>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <FaChevronLeft />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <FaChevronRight />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-center text-gray-500 text-sm font-medium py-1">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 31 }, (_, i) => {
              const date = new Date(2023, 9, i + 1);
              const isToday = date.toDateString() === new Date().toDateString();
              const isSelected = date.toDateString() === selectedDate.toDateString();
              const hasEvents = events.some(event => event.date.toDateString() === date.toDateString());
              
              return (
                <button
                  key={i}
                  className={`h-10 rounded-lg flex flex-col items-center justify-center text-sm ${
                    isSelected 
                      ? 'bg-primary text-white' 
                      : isToday 
                        ? 'bg-blue-50 text-primary font-bold' 
                        : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  <span>{i + 1}</span>
                  {hasEvents && !isSelected && (
                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Day Schedule */}
        <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
          <h3 className="font-bold text-gray-800 mb-4">
            {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </h3>
          
          {dayEvents.length === 0 ? (
            <div className="text-center py-12">
              <FaCalendarAlt className="mx-auto text-gray-300 text-4xl mb-3" />
              <p className="text-gray-500">No events scheduled for today</p>
              <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                Add Event
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {dayEvents.map(event => (
                <div 
                  key={event.id} 
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className={`px-2 py-1 rounded text-xs mr-2 ${getTypeColor(event.type)}`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                        <span className="text-gray-600 text-sm">
                          {formatTime(event.date)} - 
                          {formatTime(new Date(event.date.getTime() + event.duration * 60000))}
                        </span>
                      </div>
                      <h4 className="font-bold text-gray-800 text-lg">{event.title}</h4>
                    </div>
                    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="mt-3 flex flex-wrap gap-3">
                    {event.location && (
                      <div className="flex items-center text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                    )}
                    
                    {event.instructor && (
                      <div className="flex items-center text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {event.instructor}
                      </div>
                    )}
                    
                    {event.participants && (
                      <div className="flex items-center text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        {event.participants.join(', ')}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;