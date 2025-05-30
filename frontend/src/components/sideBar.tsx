import React from 'react';
import Image from 'next/image';

interface Podcast {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl600?: string;
}

interface SidebarProps {
  topPodcasts: Podcast[];
}

const Sidebar: React.FC<SidebarProps> = ({ topPodcasts }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-md shadow-md w-64">
      <h2 className="text-xl font-semibold text-white mb-6">Top Podcasts</h2>
      <ul>
        {topPodcasts.map((podcast) => (
          <li key={podcast.trackId} className="py-3 border-b border-gray-700 last:border-b-0"> 
            <div className="flex items-center space-x-4"> 
              {podcast.artworkUrl600 && (
                <div className="relative w-12 h-12 rounded-md overflow-hidden"> 
                  <Image
                    src={podcast.artworkUrl600}
                    alt={podcast.trackName}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h3 className="text-sm font-semibold text-white line-clamp-2">{podcast.trackName}</h3> 
                <p className="text-xs text-gray-400 line-clamp-1">{podcast.artistName}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;