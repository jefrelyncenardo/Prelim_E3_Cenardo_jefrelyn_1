import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';

function App() {
  const [user, setUser] = useState({ name: 'John Doe', settings: { darkMode: false } });

  const updateDarkMode = (newDarkMode) => {
    setUser({ ...user, settings: { ...user.settings, darkMode: newDarkMode } });
  };

  return (
    <Router>
      <div className={`App ${user.settings.darkMode ? 'bg-dark text-light' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile darkMode={user.settings.darkMode} />} />
          <Route path="/settings" element={<Settings updateDarkMode={updateDarkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;