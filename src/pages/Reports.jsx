import React from 'react';

export default function Reports() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Reports & Insights</h2>
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-600">Generate monthly and department-wise leave statistics.</p>
        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Download Report</button>
      </div>
    </div>
  );
}
