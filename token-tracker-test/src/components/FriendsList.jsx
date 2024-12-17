import React from 'react';
import { Users } from 'lucide-react';

const FriendsList = ({ onMenuClick, onSelectedFriend }) => {
  const friends = [
    { id: 1, name: 'McKayla', status: 'Listening to Bohemian Rhapsody' },
    { id: 2, name: 'Sophie', status: 'Last seen 2 hours ago' },
    { id: 3, name: 'Joe', status: 'Offline' },
    { id: 4, name: 'Rudy', status: 'Listening to Playlist: Workout Mix' },
    { id: 5, name: 'McKenzie', status: 'Last seen 5 minutes ago' },
  ];

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Friends</h2>
          <Users className="h-6 w-6 text-gray-500" />
        </div>
        <ul>
          {friends.map((friend) => (
            <li key={friend.id} className="mb-3 last:mb-0">
              <a 
                onClick ={() =>{
                  onMenuClick("Profile")
                  onSelectedFriend(friend)
                }}
                href="#" className="flex items-center text-gray-700 hover:text-green-500">
                <img
                  src={`https://ui-avatars.com/api/?name=${friend.name}&background=random`}
                  alt={friend.name}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <span className="text-sm font-medium">{friend.name}</span>
                  <p className="text-xs text-gray-500">{friend.status}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
          Find Friends
        </button>
      </div>
    </div>
  );
};

export default FriendsList;
