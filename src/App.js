import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/dashboard';
import Login from './component/Login';
import Register from './component/Register';
import MonthlyReport from './component/MonthlyReport';
import Target from './component/Target';
import Settings from './component/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/report" element={<MonthlyReport />} />
        <Route path="/target" element={<Target />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;


