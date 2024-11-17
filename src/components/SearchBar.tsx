import React, { useState } from 'react';

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="mb-4 animate-slideIn">
      <input
        type="text"
        placeholder="🔍 Search tasks..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-blue-300 transition-all"
      />
    </div>
  );
};

export default SearchBar;
