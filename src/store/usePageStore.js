import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:3001/pages';

export const usePageStore = create((set) => ({
  pages: [],
  loading: false,

  fetchPages: async () => {
    set({ loading: true });
    const res = await axios.get(API_URL);
    set({ pages: res.data, loading: false });
  },

  addPage: async (page) => {
    await axios.post(API_URL, page);
  },

  updatePage: async (id, page) => {
    await axios.put(`${API_URL}/${id}`, page);
  },

  deletePage: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  },

  getPageById: async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  },
}));
