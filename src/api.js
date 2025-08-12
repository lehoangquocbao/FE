import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Hàm để lấy dữ liệu Dashboard
export const getDashboardData = async (token) => {
    const response = await axios.get(`${API_URL}/dashboard/summary`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};
