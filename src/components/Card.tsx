import React, { useState } from 'react';
import api from '../apiChivate-too/axiosConfig';
import { toast } from 'react-toastify';

interface CardProps {
  report: {
    title: string;
    description: string;
    agency: string;
  };
}

const Card: React.FC<CardProps> = ({ report }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await api.post('/reports', report);
      toast.success('Report submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit report.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{report.title}</h3>
      <p className="mb-4">{report.description}</p>
      <button
        className="p-2 bg-blue-500 text-white rounded"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Report'}
      </button>
    </div>
  );
};

export default Card;
