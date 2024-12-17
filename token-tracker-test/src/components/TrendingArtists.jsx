import React from 'react';

const TrendingArtists = () => {
  const artists = [
    { id: 1, name: 'Artist 1', genre: 'Pop', avatar: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Artist 2', genre: 'Rock', avatar: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Artist 3', genre: 'Hip Hop', avatar: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Artist 4', genre: 'Electronic', avatar: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Artist 5', genre: 'R&B', avatar: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Trending Artists</h2>
      <div className="flex flex-wrap -mx-2">
        {artists.map((artist) => (
          <div key={artist.id} className="w-1/2 px-2 mb-4">
            <div className="flex items-center space-x-3">
              <img src={artist.avatar} alt={artist.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="font-medium text-gray-800">{artist.name}</h3>
                <p className="text-sm text-gray-600">{artist.genre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingArtists;

