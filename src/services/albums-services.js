import axios from "axios";

const API_BASE = "http://localhost:4000/api/"; // TODO: Replace with actuat api paths

// Albums to display on home page
export const findHomeAlbums = async (searchTerm) => {
  const response = await axios.get(`${API_BASE}/`);
  return response.data;
};

export const findSearchAlbums = async (searchTerm) => {
  const response = await axios.get(`${API_BASE}/search/${searchTerm}`);
  return response.data;
};