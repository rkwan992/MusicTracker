import React from 'react';

const NewReleases = () => {
  const releases = [
    { id: 1, title: 'Album 1', artist: 'Artist 1', cover: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Album 2', artist: 'Artist 2', cover: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Album 3', artist: 'Artist 3', cover: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Album 4', artist: 'Artist 4', cover: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">New Releases</h2>
      <div className="grid grid-cols-2 gap-4">
        {releases.map((release) => (
          <div key={release.id} className="flex items-center space-x-3">
            <img src={release.cover} alt={release.title} className="w-16 h-16 object-cover rounded" />
            <div>
              <h3 className="font-medium text-gray-800">{release.title}</h3>
              <p className="text-sm text-gray-600">{release.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;

