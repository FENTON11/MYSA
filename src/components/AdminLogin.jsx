import React, { useState } from 'react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '123') {
      localStorage.setItem('adminLoggedIn', true);
      window.location.href = '/admin';
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-600">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
