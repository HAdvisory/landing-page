import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">REI Trail</h1>
      <ul className="flex gap-6 text-sm">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/state-laws">State Laws</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
