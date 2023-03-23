import axios from 'axios';

const API = {
  getCategories: async () => {
    const response = await axios.get('http://localhost:8080/categories');
    return response.data;
  },

  createCategory: async (name, description) => {
    const response = await axios.post('http://localhost:8080/categories', { name, description });
    return response.data;
  },

  updateCategory: async (id, name, description) => {
    const response = await axios.put(`http://localhost:8080/categories/${id}`, { name, description });
    return response.data;
  },

  deleteCategory: async (id) => {
    await axios.delete(`http://localhost:8080/categories/${id}`);
  }
};

export default API;
