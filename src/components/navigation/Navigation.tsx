import React from 'react';
import { Link } from 'react-router-dom';
import { Cat } from 'lucide-react';
import NavLink from './NavLink';
import { navItems } from './navItems';

export default function Navigation() {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center space-x-2 mr-8">
        <Cat className="h-8 w-8 text-purple-600" />
        <span className="text-xl font-bold text-gray-900">KittieVerse AI</span>
      </Link>
      <div className="hidden sm:flex items-center space-x-2">
        {navItems.map((item) => (
          <NavLink key={item.to} {...item} />
        ))}
      </div>
    </div>
  );
}