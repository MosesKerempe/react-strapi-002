import axios from "axios";

const API_URL = "http://localhost:1337/api/articles"; // Strapi API URL

export const fetchArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data; // Strapi wraps data inside "data"
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};
