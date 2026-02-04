import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

/**
 * Fetch GitHub users with advanced search options
 * @param {string} query - Search keyword
 * @param {string} location - Optional location filter
 * @param {number} minRepos - Optional minimum number of repositories
 * @returns {Promise<Array>} - Array of user objects
 */
export const fetchAdvancedUsers = async (query, location = "", minRepos = 0) => {
  try {
    let searchQuery = query;

    if (location) {
      searchQuery += `+location:${location}`;
    }

    if (minRepos > 0) {
      searchQuery += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}`, {
      params: { q: searchQuery },
    });

    return response.data.items;
  } catch (error) {
    console.error("Error fetching advanced users:", error);
    return [];
  }
};
