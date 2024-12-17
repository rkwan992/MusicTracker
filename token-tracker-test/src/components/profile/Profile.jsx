import React from 'react';
import { User, Music, Clock, BarChart2 } from 'lucide-react';
import ProfileHeader from './ProfileHeader';
import ListeningStats from './ListeningStats';
import TopArtists from './TopArtists';
//import TopTracks from './TopTracks';
import VolumeGraph from './VolumeGraph';

const Profile = ({ user }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-100">
      <ProfileHeader user={user} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ListeningStats user={user} />
          {/*<TopArtists user={user} />*}
          {/*<TopTracks user={user} />*/}
          <VolumeGraph user={user} />
        </div>
      </div>
    </div>
  );
};

export default Profile;

