import React from 'react';

export default function TrackRequests() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Track My Requests</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="text-gray-600">
              <th className="pb-2">Date</th>
              <th className="pb-2">Type</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-800">
              <td>2025-04-28</td>
              <td>Sick Leave</td>
              <td className="text-yellow-500">Under Review</td>
              <td>Pending manager approval</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
