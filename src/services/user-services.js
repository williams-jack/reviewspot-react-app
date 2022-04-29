import axios from "axios";

const API_BASE = "http://localhost:4000/api/"; // TODO: Replace with actuat api paths

export const editBio = async (user, bio) => {
  const response = await axios.post(`${API_BASE}/user/${user._id}/`, bio);
  return response.data;
};

export const deleteUser = async (user) => {
  const response = await axios.delete(`${API_BASE}/user/${user._id}`);
  return response.data;
};

// TODO: not really sure how this works
export const banUser = async (user) => {
  // TODO: Using a post for now? like appending to a ban list
  const response = await axios.post(`${API_BASE}/user/${user._id}/`, user);
  return response.data;
};