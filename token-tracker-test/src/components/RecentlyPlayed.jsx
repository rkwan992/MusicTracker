import React from 'react';
import { Clock } from 'lucide-react';

const RecentlyPlayed = () => {
  const recentTracks = [
    { id: 1, name: 'Song 1', artist: 'Artist 1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2' },
    { id: 3, name: 'Song 3', artist: 'Artist 3' },
    { id: 4, name: 'Song 4', artist: 'Artist 4' },
    { id: 5, name: 'Song 5', artist: 'Artist 5' },
  ];

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Recently Played</h2>
          <Clock className="h-6 w-6 text-gray-500" />
        </div>
        <ul>
          {recentTracks.map((track) => (
            <li key={track.id} className="mb-2 last:mb-0">
              <a href="#" className="flex items-center text-gray-700 hover:text-green-500">
                <span className="text-sm font-medium">{track.name}</span>
                <span className="ml-auto text-xs text-gray-500">{track.artist}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentlyPlayed;

