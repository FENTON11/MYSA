import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-5">
        <h2 className="text-3xl mb-5">Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/admin" className="block mb-2 text-xl hover:text-green-400">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/players" className="block mb-2 text-xl hover:text-green-400">
              Players
            </Link>
          </li>
          <li>
            <Link to="/admin/settings" className="block mb-2 text-xl hover:text-green-400">
              Settings
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                localStorage.removeItem('adminLoggedIn');
                window.location.href = '/admin/login';
              }}
              className="text-xl text-red-500 hover:text-red-700"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="w-3/4 p-10 bg-gray-100">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLayout;
