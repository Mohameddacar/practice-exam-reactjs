import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => (
  <header className="w-full bg-white border-b border-gray-100 flex items-center justify-between px-8 py-4 shadow-sm">
    <div className="text-xl font-bold tracking-wide text-[#2463eb]">My Dashboard</div>
    <div className="flex items-center gap-6 text-[#222]">
      <span>Hello, Admin</span>
      <FaUserCircle size={28} />
    </div>
  </header>
);

export default Header;