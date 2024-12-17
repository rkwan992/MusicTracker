import React from 'react';
import { User, Music, Clock } from 'lucide-react';

const ProfileHeader = ({ user }) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={user.profileImage || "https://via.placeholder.com/150"}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4 md:mb-0 md:mr-8"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
            <p className="text-xl mb-4">@{user.username}</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <div className="flex items-center">
                <User className="mr-2" />
                <span>{user.followers} Followers</span>
              </div>
              <div className="flex items-center">
                <Music className="mr-2" />
                <span>{user.playlists} Playlists</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2" />
                <span>{user.listeningTime} Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

