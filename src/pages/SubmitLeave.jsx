import React from 'react';

export default function SubmitLeave() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">Submit Leave Application</h2>
      <form className="space-y-4 max-w-xl bg-white p-6 rounded-xl shadow">
        <div>
          <label className="block font-medium text-gray-700 mb-1">Leave Type</label>
          <select className="w-full border px-4 py-2 rounded-lg">
            <option>Sick Leave</option>
            <option>Casual Leave</option>
            <option>Work From Home</option>
          </select>
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">Start Date</label>
          <input type="date" className="w-full border px-4 py-2 rounded-lg" />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">End Date</label>
          <input type="date" className="w-full border px-4 py-2 rounded-lg" />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">Reason</label>
          <textarea rows="4" className="w-full border px-4 py-2 rounded-lg"></textarea>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
          Submit
        </button>
      </form>
    </div>
  );
}
