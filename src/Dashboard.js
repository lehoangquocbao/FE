import React, { useState, useEffect } from 'react';
import { getDashboardData } from '../api';

function Dashboard() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('access_token');
            if (token) {
                try {
                    const dashboardData = await getDashboardData(token);
                    setData(dashboardData);
                } catch (error) {
                    console.error("Failed to fetch dashboard data", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, []); // [] đảm bảo hook chỉ chạy một lần khi component được tạo

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            {data ? (
                <div>
                    <p>Total Users: {data.total_users}</p>
                    <p>Total Appointments: {data.total_appointments}</p>
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default Dashboard;
