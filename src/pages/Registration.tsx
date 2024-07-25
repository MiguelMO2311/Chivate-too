import React from 'react';

const Registration: React.FC = () => {
  return (
    <div className="registration p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Registration</h2>
      <form className="space-y-4">
        <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Username" />
        <input className="w-full p-2 border border-gray-300 rounded" type="password" placeholder="Password" />
        <button className="w-full p-2 bg-blue-500 text-white rounded" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
