import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';
import Audits from './components/Audits';

function App() {
  const [darkMode, toggleDarkMode] = useState(false)
  return (
    <div className={`${darkMode && "dark"} dark:bg-gray-950`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Audits />
    </div>
  );
}

export default App;
