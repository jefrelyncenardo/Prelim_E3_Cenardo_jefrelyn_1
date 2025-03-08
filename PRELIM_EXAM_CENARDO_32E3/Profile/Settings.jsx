import React, { useState } from 'react';

function Settings({ updateDarkMode }) {
  const [localDarkMode, setLocalDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    setLocalDarkMode(!localDarkMode);
    updateDarkMode(!localDarkMode);
  };

  return (
    <div className="container">
      <h1>Settings</h1>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="darkModeSwitch" checked={localDarkMode} onChange={handleDarkModeChange} />
        <label className="form-check-label" htmlFor="darkModeSwitch">Dark Mode</label>
      </div>
    </div>
  );
}

export default Settings;