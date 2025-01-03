import React from 'react';
import { User, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProfileHeaderProps {
  address?: string;
}

export default function ProfileHeader({ address }: ProfileHeaderProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center gap-6">
        <div className="bg-purple-100 p-4 rounded-full">
          <User className="h-12 w-12 text-purple-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </h1>
          </div>
          <p className="text-gray-500 mt-1">Member since {new Date().toLocaleDateString()}</p>
        </div>
        <Link 
          to="/generate"
          className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Wand2 className="h-5 w-5" />
          Create Agent
        </Link>
      </div>
    </div>
  );
}