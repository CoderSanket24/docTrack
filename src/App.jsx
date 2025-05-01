// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SubmitLeave from './pages/SubmitLeave';
import TrackRequests from './pages/TrackRequests';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import PendingApprovals from './pages/PendingApprovals';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/SubmitLeave" element={<SubmitLeave />} />
        <Route path="/TrackRequests" element={<TrackRequests />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/PendingApprovals" element={<PendingApprovals />} />
      </Routes>
    </Router>
  );
}
