import React from 'react';

export default function Notifications() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Notifications</h2>
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <p className="text-gray-700">🔔 Your leave request from April 28 is under review.</p>
        <p className="text-gray-700">🔔 Manager approved your application for casual leave.</p>
      </div>
    </div>
  );
}
