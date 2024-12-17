import React, { useState } from 'react';
import { Home, Disc, Users, List, Settings, ChevronRight } from 'lucide-react';

const Sidebar = ({onMenuClick}) => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isExpanded, setIsExpanded] = useState(false);



  const menuItems = [
    { name: "Dashboard", icon: Home, subItems: [] },
    { name: "Discover", icon: Disc, subItems: [] },
    { name: "Artists", icon: Users, subItems: ["Top Artists", "New Releases", "Genres"] },
    { name: "Playlists", icon: List, subItems: ["Your Playlists", "Discover Playlists", "Create Playlist"] },
    { name: "Settings", icon: Settings, subItems: ["Profile Settings", "Account Settings", "Preferences"] },
  ];
  

  const handleMenuClick = (menuName) => {
    if (activeMenu === menuName && menuName !== "Dashboard") {
      setIsExpanded(!isExpanded);
    } else {
      setActiveMenu(menuName);
      setIsExpanded(menuName !== "Dashboard");
    }
  };

  return (
    <div className="flex flex-col w-64 bg-gray-800 h-screen transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl px-10 uppercase text-green-500 font-bold">Spotify Tracker</h1>
      </div>
      <ul className="flex flex-col py-4">
        {menuItems.map((item) => (
          <li key={item.name} className={`relative ${activeMenu !== "Dashboard" && activeMenu !== item.name ? "opacity-50" : ""}`}>
            <a
              onClick={() => {
                handleMenuClick(item.name) 
                onMenuClick(item.name)}}
              href="#"
              className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-200 ${activeMenu === item.name ? "text-green-500" : ""}`}
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <item.icon />
              </span>
              <span className="text-sm font-medium">{item.name}</span>
              {item.subItems.length > 0 && (
                <ChevronRight className={`ml-auto mr-4 h-4 w-4 transform transition-transform duration-300 ${isExpanded && activeMenu === item.name ? "rotate-90" : ""}`} />
              )}
            </a>
            {isExpanded && activeMenu === item.name && item.subItems.length > 0 && (
              <ul className="pl-12 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out animate-expand">
                {item.subItems.map((subItem) => (
                  <li key={subItem}>
                    <a href="#" className="block text-gray-500 hover:text-gray-200 transition-colors duration-300">
                      {subItem}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;


