import React from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const CurrentlyPlaying = () => {
  return (
    <div className="w-full xl:w-1/3 px-6 py-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Currently Playing</h2>
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/80" alt="Album Cover" className="w-20 h-20 rounded-md mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Song Title</h3>
            <p className="text-sm text-gray-600">Artist Name</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <button className="text-gray-600 hover:text-green-500 focus:outline-none">
            <SkipBack className="h-8 w-8" />
          </button>
          <button className="text-gray-600 hover:text-green-500 focus:outline-none">
            <Play className="h-12 w-12" />
          </button>
          <button className="text-gray-600 hover:text-green-500 focus:outline-none">
            <SkipForward className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyPlaying;

