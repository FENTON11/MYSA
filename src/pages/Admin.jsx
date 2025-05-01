import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import AdminPlayers from '../components/AdminPlayers';

const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (isAdminLoggedIn !== 'true') {
      navigate('/admin/login');
    }
  }, [navigate]);

  return (
    <AdminLayout>
      <AdminPlayers />
    </AdminLayout>
  );
};

export default AdminPage;
