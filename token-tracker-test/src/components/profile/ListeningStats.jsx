import React from 'react';
import { BarChart2, Clock, Repeat, Shuffle } from 'lucide-react';

const ListeningStats = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Listening Stats</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="mr-2 text-indigo-500" />
            <span>Average listening time</span>
          </div>
          <span className="font-semibold">{user.avgListeningTime} hrs/day</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BarChart2 className="mr-2 text-indigo-500" />
            <span>Favorite genre</span>
          </div>
          <span className="font-semibold">{user.favoriteGenre}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Repeat className="mr-2 text-indigo-500" />
            <span>Most repeated track</span>
          </div>
          <span className="font-semibold">{user.mostRepeatedTrack}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shuffle className="mr-2 text-indigo-500" />
            <span>Shuffle percentage</span>
          </div>
          <span className="font-semibold">{user.shufflePercentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default ListeningStats;

