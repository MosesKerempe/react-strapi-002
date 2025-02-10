import axios from "axios";

const API_URL = "http://localhost:1337/api/articles"; // Ensure this is correct

export const getArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return null;
  }
};
