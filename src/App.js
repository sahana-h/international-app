import './App.css';
import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>International Student CPT/OPT Tracker</h1>
      {isLoggedIn ? <Dashboard /> : <Login onLogin={() => setIsLoggedIn(true)} />}
    </div>
  );
}

export default App;
