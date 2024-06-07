import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import React from 'react';

const Layout = () => {
  return (
    <div className="bg-slate-200 h-screen">
      <Navbar />
      <Search />
    </div>
  );
};

export default Layout;
