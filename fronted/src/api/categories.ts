import axios from "axios";

const API_URL = "http://localhost:1337/api/categories";

export const fetchCategories = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};
