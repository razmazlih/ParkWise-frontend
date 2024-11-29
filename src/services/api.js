import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  get: async (endpoint, params) => {
    try {
      const response = await api.get(endpoint, { params });
      return response.data;
    } catch (error) {
      console.error(`GET ${endpoint} failed:`, error);
      throw error;
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`POST ${endpoint} failed:`, error);
      throw error;
    }
  },

  put: async (endpoint, data) => {
    try {
      const response = await api.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`PUT ${endpoint} failed:`, error);
      throw error;
    }
  },

  delete: async (endpoint) => {
    try {
      const response = await api.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error(`DELETE ${endpoint} failed:`, error);
      throw error;
    }
  },

  getParkingAreas: async (params = {}) => {
    return await apiService.get("parking-areas/", params);
  },

  getParkingAreaById: async (id) => {
    return await apiService.get(`parking-areas/${id}`);
  },

  createParkingArea: async (data) => {
    return await apiService.post("parking-areas/", data);
  },

  updateParkingArea: async (id, data) => {
    return await apiService.put(`parking-areas/${id}`, data);
  },

  deleteParkingArea: async (id) => {
    return await apiService.delete(`parking-areas/${id}`);
  },

  getParkingSpots: async (params = {}) => {
    return await apiService.get("parking-spots/", params);
  },

  getParkingSpotById: async (id) => {
    return await apiService.get(`parking-spots/${id}`);
  },

  createParkingSpot: async (data) => {
    return await apiService.post("parking-spots/", data);
  },

  updateParkingSpot: async (id, data) => {
    return await apiService.put(`parking-spots/${id}`, data);
  },

  deleteParkingSpot: async (id) => {
    return await apiService.delete(`parking-spots/${id}`);
  },
};

export default apiService;