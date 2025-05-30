import React from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  onSearch,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-md p-6 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          className="flex-1 border border-gray-700 rounded-lg px-4 py-3 text-lg text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Search for podcasts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
           text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          onClick={onSearch}
        >
          Search Podcasts
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
