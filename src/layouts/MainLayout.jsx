import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function MainLayout() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  )
}
export default MainLayout;
