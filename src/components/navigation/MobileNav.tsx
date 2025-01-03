import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cat, Store, PlusCircle, Home, TrendingUp } from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/generate', icon: PlusCircle, label: 'Generate' },
  { to: '/marketplace', icon: Store, label: 'Marketplace' },
  { to: '/activity', icon: TrendingUp, label: 'Activity' }
];

interface MobileNavProps {
  onConnect: () => void;
  isConnecting: boolean;
  address?: string;
}

export default function MobileNav({ onConnect, isConnecting, address }: MobileNavProps) {
  const location = useLocation();

  return (
    <div className="sm:hidden bg-white border-t border-gray-200 pb-3">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'bg-purple-100 text-purple-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
        <button
          onClick={onConnect}
          disabled={isConnecting}
          className="w-full flex items-center px-3 py-2 text-base font-medium text-purple-600 hover:bg-purple-50 rounded-md"
        >
          <Cat className="h-5 w-5 mr-3" />
          {isConnecting ? 'Connecting...' : 
           address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 
           'Connect Wallet'}
        </button>
      </div>
    </div>
  );
}