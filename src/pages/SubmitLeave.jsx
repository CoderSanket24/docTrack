import React, { useState } from 'react';

export default function SubmitLeave() {
  const [formData, setFormData] = useState({
    type: '',
    startDate: '',
    endDate: '',
    reason: '',
    attachment: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend API here
    alert('Leave request submitted successfully!');
    console.log(formData);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-[#4F46E5] mb-4">Submit Leave Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Leave Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Earned Leave">Earned Leave</option>
          </select>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Reason</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Attach Document (Optional)</label>
          <input
            type="file"
            name="attachment"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            accept=".pdf,.jpg,.png"
          />
        </div>

        <button
          type="submit"
          className="bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold py-2 px-6 rounded-xl transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
