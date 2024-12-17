import React from 'react';
import NewReleases from './NewReleases';
//import GenreExplorer from './GenreExplorer';
//import RecommendedPlaylists from './RecommendedPlaylists';
import TrendingArtists from './TrendingArtists';

const Discover = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Discover New Music</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NewReleases />
        {/*<GenreExplorer />
        <RecommendedPlaylists />*/}
        <TrendingArtists />
      </div>
    </div>
  );
};

export default Discover;

