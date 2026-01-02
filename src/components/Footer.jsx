import React from 'react';

const Footer = () => (
  <footer className="w-full bg-white border-t border-gray-100 py-3 text-center text-sm text-gray-400">
    &copy; {new Date().getFullYear()} My Dashboard, All rights reserved.
  </footer>
);

export default Footer;