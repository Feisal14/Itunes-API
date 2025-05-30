"use client";

import { useState, useEffect } from "react";
import SearchBar from "../components/searchBar";
import PodcastGrid from "../components/podcastGrid";
import Sidebar from "../components/sideBar";
import { fetchPodcasts } from "../api/api";

interface Podcast {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl600?: string;
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("فنجان");
  const [results, setResults] = useState<Podcast[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [topPodcasts, setTopPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    fetchTopPodcasts();
    handleSearch(1);
  }, []);

  const fetchTopPodcasts = async () => {
    try {
      const data = await fetchPodcasts("فنجان", 1, 5);
      setTopPodcasts(data);
    } catch (error) {
      console.error("Failed to fetch top podcasts:", error);
    }
  };

  const handleSearch = async (page: number = 2) => {
  
    try {
      const data = await fetchPodcasts(searchTerm, page, 20);
      setResults(data);
      setHasSearched(true);
    } catch (error) {
      console.error("Search error:", error);
     } 
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        <div>
          <Sidebar topPodcasts={topPodcasts} />
        </div>
        <main>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={() => handleSearch(1)}
          />
          
          {results.length > 0 && (
            <div className="bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Found {results.length} podcasts
                </h2>
              </div>
              <PodcastGrid podcasts={results} />
            </div>
          )}
          {hasSearched &&  results.length === 0 && (
            <div className="bg-gray-800 rounded-xl shadow-md p-12 text-center">
              <div className="text-gray-600 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No podcasts found
              </h3>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
