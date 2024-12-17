import React from 'react';

const TopArtists = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Top Artists</h2>
      <ul className="space-y-4">
        {user.topArtists.map((artist, index) => (
          <li key={artist.id} className="flex items-center">
            <span className="text-2xl font-bold text-indigo-500 mr-4">{index + 1}</span>
            <img src={artist.image} alt={artist.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="font-semibold">{artist.name}</h3>
              <p className="text-sm text-gray-600">{artist.genre}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopArtists;

