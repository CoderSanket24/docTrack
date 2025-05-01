import React from 'react';

export default function PendingApprovals() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Pending Approvals</h2>
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-600">List of documents waiting for your approval will appear here.</p>
      </div>
    </div>
  );
}
