import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
}

export default function NavLink({ to, icon: Icon, label }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
        isActive
          ? 'text-purple-600 bg-purple-50'
          : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
      }`}
    >
      <Icon className="h-5 w-5 mr-2" />
      {label}
    </Link>
  );
}