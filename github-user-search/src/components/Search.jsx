import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = ({ onResults }) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState(0);

  const handleSearch = async () => {
    const users = await fetchUserData(query, location, minRepos);
    onResults(users);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search users"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Repos"
        value={minRepos}
        onChange={(e) => setMinRepos(Number(e.target.value))}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
