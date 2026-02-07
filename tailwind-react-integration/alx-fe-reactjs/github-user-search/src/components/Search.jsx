import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState(0);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const users = await fetchUserData(query, location, minRepos);
    setResults(users);
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Search query"
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
        placeholder="Min Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(Number(e.target.value))}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Enhanced results display */}
      <div>
        {results && results.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt={user.login} width="50" />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
