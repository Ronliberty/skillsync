import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Schedule from './pages/Schedule'
import Resources from './pages/Resources'

import Courses from './pages/Courses';

import Settings from './pages/Settings';

import Social from './pages/Social';

function App() {
 

  return (

    <div className="flex h-screen">
      <Sidebar />

    
    
     <div className="flex-1 flex flex-col overflow-hidden">
         <Navbar />
        <main className="flex-1 overflow-y-auto p-4">
         <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Social />} />
          <Route path="/settings" element={<Settings />} />
         </Routes>
        </main>
      </div>
      </div>
  

  )
}

export default App
