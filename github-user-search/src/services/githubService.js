import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchAdvancedUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
