import React, { useState } from 'react';
import Card from '../components/Card';

const Reports: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [agency, setAgency] = useState('');
  const [report, setReport] = useState<{ title: string; description: string; agency: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReport = { title, description, agency };
    setReport(newReport);
  };

  return (
    <div className="reports p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Report</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="agency" className="block text-sm font-medium text-gray-700">
          Select Agency
        </label>
        <select
          id="agency"
          className="w-full p-2 border border-gray-300 rounded"
          value={agency}
          onChange={(e) => setAgency(e.target.value)}
        >
          <option value="">Select Agency</option>
          <option value="tax">Tax Agency</option>
          <option value="police">Police</option>
          <option value="civil_guard">Civil Guard</option>
          <option value="municipality">Municipality</option>
        </select>
        <button className="w-full p-2 bg-blue-500 text-white rounded" type="submit">
          Create Report
        </button>
      </form>
      {report && <Card report={report} />}
    </div>
  );
};

export default Reports;
