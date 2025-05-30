// components/PodcastGrid.tsx
import React from "react";
import PodcastCard from "./podcastCard";

interface Podcast {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl600?: string;
  collectionName?: string;
  primaryGenreName?: string;
  trackCount?: number;
}

const PodcastGrid: React.FC<{ podcasts: Podcast[] }> = ({ podcasts }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.trackId} podcast={podcast} />
      ))}
    </div>
  );
};

export default PodcastGrid;
