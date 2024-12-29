import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <main className="container mx-auto px-6 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;