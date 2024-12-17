import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecentlyPlayed from './RecentlyPlayed';
import FriendsList from './FriendsList';
import Discover from './Discover';
import Profile from './profile/Profile';
import Animations from './Animations';
//import TopArtists from './TopArtists';
import CurrentlyPlaying from './CurrentlyPlaying';
//import PlaylistOverview from './PlaylistOverview';

const Dashboard = () => {
    const [currentView, setCurrentView] = useState("Dashboard");
    const [friendProfile, setFriendProfile] = useState(null);
    const [isAnimating, setAnimating] = useState(true); // Start in animating state
/*
    useEffect(() => {
        const timer = setTimeout(() => setAnimating(false), 500); // Stop animation after 500ms

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []); // Empty array ensures this runs only once, on initial render

    const animationClasses = isAnimating
        ? 'opacity-0 transition-opacity duration-500 ease-in-out'
        : 'opacity-100 transition-opacity duration-500 ease-in-out';
*/
    const view = () =>{
        switch (currentView){
            case "Discover":
                return(
                        <div className={`flex-1 flex flex-col overflow-hidden animate-fadeIn`}>
                            <Header />
                            <Discover />
                        </div>
                )
                case "Profile":
                    return (
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <Header />
                            {friendProfile ? (
                                <Profile user={friendProfile} />
                            ) : (
                                <div>No friend selected</div>
                            )}
                        </div>
                    );
            default:
                return(
                    <div 
                        key = {currentView}
                        className="flex-1 flex flex-col overflow-hidden animate-fadeIn">
                        <Header />
                        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <div className="container mx-auto px-6 py-8">
                            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
                            <div className="mt-4">
                            <div className="flex flex-wrap -mx-6">
                                <CurrentlyPlaying />
                                <RecentlyPlayed />
                                <FriendsList 
                                onMenuClick ={setCurrentView} 
                                onSelectedFriend = {setFriendProfile}
                                />
                                {/*<TopArtists />*/}
                                {/*<PlaylistOverview />*/}
                            </div>
                            </div>
                        </div>
                        </main>
                    </div>
                )
        }
    }
  return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar onMenuClick={setCurrentView}/>
            {view()}
        </div>
  );
};

export default Dashboard;