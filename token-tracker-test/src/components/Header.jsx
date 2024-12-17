import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-green-500">
      <div className="flex items-center">
        <Search className="h-5 w-5 text-gray-500" />
        <input
          className="ml-4 px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          type="text"
          placeholder="Search for artists, songs, or playlists"
        />
      </div>
      <div className="flex items-center">
        <button className="flex mx-4 text-gray-600 focus:outline-none">
          <Bell className="h-5 w-5" />
        </button>
        <button className="flex mx-4 text-gray-600 focus:outline-none">
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
