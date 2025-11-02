import React from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const AdminDashboard = () => {
  const mealShares = useSelector((store) => store.mealShare.shares);

  // Sample data for charts
  const revenueData = [
    { month: 'Jan', revenue: 12000 },
    { month: 'Feb', revenue: 15000 },
    { month: 'Mar', revenue: 18000 },
    { month: 'Apr', revenue: 22000 },
    { month: 'May', revenue: 25000 },
    { month: 'Jun', revenue: 28000 },
  ];

  const userGrowthData = [
    { month: 'Jan', users: 1000 },
    { month: 'Feb', users: 1150 },
    { month: 'Mar', users: 1300 },
    { month: 'Apr', users: 1450 },
    { month: 'May', users: 1600 },
    { month: 'Jun', users: 1750 },
  ];

  const orderStatusData = [
    { name: 'Completed', value: 400, color: '#0088FE' },
    { name: 'Pending', value: 300, color: '#00C49F' },
    { name: 'Cancelled', value: 100, color: '#FFBB28' },
    { name: 'In Transit', value: 200, color: '#FF8042' },
  ];

  return (
    <div className="pt-28 px-8">
      <br />
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Users</h2>
          <p className="text-2xl font-bold text-blue-600">1,250</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Active Orders</h2>
          <p className="text-2xl font-bold text-orange-600">45</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Revenue</h2>
          <p className="text-2xl font-bold text-green-600">₹15,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Meal Shares</h2>
          <p className="text-gray-600">{mealShares.length} active</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Status Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={orderStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {orderStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>New user registration</span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Order #1234 completed</span>
              <span className="text-sm text-gray-500">4 hours ago</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Meal share created</span>
              <span className="text-sm text-gray-500">6 hours ago</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Vendor added new item</span>
              <span className="text-sm text-gray-500">8 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
