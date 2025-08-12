import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Component chính của ứng dụng
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute'; // Component bảo vệ route

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Route cho trang đăng nhập, không cần bảo vệ */}
        <Route path="/login" element={<Login />} />

        {/* Route cho trang Dashboard, cần được bảo vệ */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Định nghĩa các route khác ở đây */}
        {/* ... */}
      </Routes>
    </Router>
  </React.StrictMode>
);
