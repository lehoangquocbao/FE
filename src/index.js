import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

export const loginUser = async (username, password) => {
  try {
    const response = await axiosInstance.post('/auth/login', { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDashboardSummary = async () => {
  const token = localStorage.getItem('access_token');
  try {
    const response = await axiosInstance.get('/dashboard/summary', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
