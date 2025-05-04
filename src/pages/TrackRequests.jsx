import React, { useState, useEffect } from 'react';

export default function TrackRequests() {
  const [applications, setApplications] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [filters, setFilters] = useState({
    status: 'All',
    fromDate: '',
    toDate: '',
  });

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        type: 'Sick Leave',
        startDate: '2025-05-01',
        endDate: '2025-05-03',
        reason: 'Fever and rest',
        status: 'Approved',
      },
      {
        id: 2,
        type: 'Casual Leave',
        startDate: '2025-05-10',
        endDate: '2025-05-12',
        reason: 'Family function',
        status: 'Pending',
      },
      {
        id: 3,
        type: 'Earned Leave',
        startDate: '2025-04-20',
        endDate: '2025-04-25',
        reason: 'Vacation trip',
        status: 'Rejected',
      },
    ];
    setApplications(mockData);
    setFilteredApps(mockData);
  }, []);

  const applyFilters = () => {
    let filtered = applications;

    if (filters.status !== 'All') {
      filtered = filtered.filter((app) => app.status === filters.status);
    }

    if (filters.fromDate) {
      filtered = filtered.filter((app) => app.startDate >= filters.fromDate);
    }

    if (filters.toDate) {
      filtered = filtered.filter((app) => app.endDate <= filters.toDate);
    }

    setFilteredApps(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  return (
    <div className="p-6 max-w-6xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-[#4F46E5] mb-4">Your Leave Applications</h2>

      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-lg shadow">
        <select
          className="border px-3 py-2 rounded w-full md:w-40"
          value={filters.status}
          onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
        >
          <option value="All">All Statuses</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>

        <input
          type="date"
          className="border px-3 py-2 rounded w-full md:w-48"
          value={filters.fromDate}
          onChange={(e) => setFilters((prev) => ({ ...prev, fromDate: e.target.value }))}
          placeholder="From Date"
        />

        <input
          type="date"
          className="border px-3 py-2 rounded w-full md:w-48"
          value={filters.toDate}
          onChange={(e) => setFilters((prev) => ({ ...prev, toDate: e.target.value }))}
          placeholder="To Date"
        />
      </div>

      {/* Applications */}
      {filteredApps.length === 0 ? (
        <p className="text-gray-600">No leave applications found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-white shadow-md rounded-lg p-4 border-l-4"
              style={{
                borderColor:
                  app.status === 'Approved'
                    ? '#10B981'
                    : app.status === 'Rejected'
                      ? '#EF4444'
                      : '#F59E0B',
              }}
            >
              <h3 className="text-lg font-semibold mb-1">{app.type}</h3>
              <p className="text-sm text-gray-600 mb-1">
                {app.startDate} to {app.endDate}
              </p>
              <p className="text-gray-700 mb-2">Reason: {app.reason}</p>
              <span
                className={`inline-block px-3 py-1 text-sm rounded-full text-white ${app.status === 'Approved'
                    ? 'bg-green-500'
                    : app.status === 'Rejected'
                      ? 'bg-red-500'
                      : 'bg-yellow-500'
                  }`}
              >
                {app.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
