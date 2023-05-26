import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';
import Audits from './components/Audits';
import { Routes, Route } from 'react-router-dom';
import AuditPage from './AuditPage';

function App() {
  const [darkMode, toggleDarkMode] = useState(false)
  return (
    <div className={`h-screen ${darkMode && "dark"}`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Routes>
      <Route
          path='/'
          element={
            <Audits />
          }
        />
        <Route
          path='/audits/:projectId'
          element={
            <AuditPage />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
