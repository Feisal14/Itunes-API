import React from "react";
import Image from "next/image";

interface PodcastCardProps {
  podcast: {
    trackId: number;
    trackName: string;
    artistName: string;
    artworkUrl600?: string;
  };
}

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  return (
    <div
      key={podcast.trackId}
      className="bg-gray-800 hover:bg-gray-700 p-4 rounded-2xl shadow-lg flex flex-col gap-3 transition-colors duration-200 cursor-pointer group"
    >
      <div className="relative w-full aspect-square rounded-xl overflow-hidden">
        <Image
          src={
            podcast.artworkUrl600 ||
            "/placeholder-podcast.png"
          }
          alt={podcast.trackName}
          fill
          className="object-cover group-hover:opacity-90 transition-opacity duration-300"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-white truncate">
          {podcast.trackName}
        </h3>
        <p className="text-sm text-gray-300 truncate">{podcast.artistName}</p>
        
      </div>
    </div>
  );
};

export default PodcastCard;
