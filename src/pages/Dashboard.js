import React, { useState, useEffect } from 'react';
import { getDashboardSummary } from '../api/index.js'; // Nhập hàm API
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

// Dữ liệu mẫu cho biểu đồ
const sampleChartData = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
    datasets: [
        {
            label: 'Tổng số bệnh nhân',
            data: [100, 120, 150, 130, 180],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
        },
    ],
};

function Dashboard() {
  const [summaryData, setSummaryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboardSummary();
        setSummaryData(data);
      } catch (err) {
        setError("Không thể tải dữ liệu Dashboard.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard tổng quan</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Card hiển thị tổng số người dùng */}
        <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px', flex: 1 }}>
          <h3>Tổng số người dùng</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{summaryData?.total_users}</p>
        </div>
        
        {/* Card hiển thị tổng số cuộc hẹn */}
        <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px', flex: 1 }}>
          <h3>Tổng số cuộc hẹn</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{summaryData?.total_appointments}</p>
        </div>

        {/* Thêm các card khác ở đây */}
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>Biểu đồ thống kê</h3>
        {/* Sử dụng biểu đồ để hiển thị dữ liệu */}
        <Line data={sampleChartData} />
      </div>
    </div>
  );
}

export default Dashboard;
