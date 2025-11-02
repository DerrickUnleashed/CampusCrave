import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { mockRestaurants } from '../mockData';

const AdminDashboard = () => {
  const mealShares = useSelector((store) => store.mealShare.shares);
  const [selectedVendor, setSelectedVendor] = useState('Gazebo C1');

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

  // Mock data for user management
  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  ];

  const mockRunners = [
    { id: 1, name: 'Alice Runner', email: 'alice@runner.com', status: 'Active' },
    { id: 2, name: 'Charlie Speed', email: 'charlie@runner.com', status: 'Active' },
  ];

  // Use vendors from mockData.js
  const mockVendors = mockRestaurants.map(restaurant => ({
    id: restaurant.info.id,
    name: restaurant.info.name,
    email: `${restaurant.info.name.toLowerCase().replace(/\s+/g, '')}@example.com`,
    status: 'Active'
  }));

  // State for restricting users, runners, and vendors
  const [restrictedUsers, setRestrictedUsers] = useState(new Array(mockUsers.length).fill(false));
  const [restrictedRunners, setRestrictedRunners] = useState(new Array(mockRunners.length).fill(false));
  const [restrictedVendors, setRestrictedVendors] = useState(new Array(mockVendors.length).fill(false));

  // Toggle functions
  const toggleUserRestrict = (index) => {
    setRestrictedUsers(prev => prev.map((val, i) => i === index ? !val : val));
  };

  const toggleRunnerRestrict = (index) => {
    setRestrictedRunners(prev => prev.map((val, i) => i === index ? !val : val));
  };

  const toggleVendorRestrict = (index) => {
    setRestrictedVendors(prev => prev.map((val, i) => i === index ? !val : val));
  };

  // Generate random analytics data for each vendor
  const generateRandomData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    return months.map(month => ({
      month,
      revenue: Math.floor(Math.random() * 10000) + 2000, // Random revenue between 2000-12000
      orders: Math.floor(Math.random() * 200) + 50, // Random orders between 50-250
    }));
  };

  const vendorAnalyticsData = {};
  mockVendors.forEach(vendor => {
    const data = generateRandomData();
    vendorAnalyticsData[vendor.name] = {
      revenue: data.map(d => ({ month: d.month, revenue: d.revenue })),
      orders: data.map(d => ({ month: d.month, orders: d.orders })),
    };
  });

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

      {/* User Management Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Management</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Users</h3>
            <ul className="space-y-2">
              {mockUsers.map((user, index) => (
                <li key={user.id} className="flex justify-between items-center">
                  <span>{user.name} ({user.email})</span>
                  <button onClick={() => toggleUserRestrict(index)} className={`px-3 py-1 rounded text-white ${restrictedUsers[index] ? 'bg-gray-500 hover:bg-gray-600' : 'bg-red-500 hover:bg-red-600'}`}>
                    {restrictedUsers[index] ? 'Restricted' : 'Restrict'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Runners</h3>
            <ul className="space-y-2">
              {mockRunners.map((runner, index) => (
                <li key={runner.id} className="flex justify-between items-center">
                  <span>{runner.name} ({runner.email})</span>
                  <button onClick={() => toggleRunnerRestrict(index)} className={`px-3 py-1 rounded text-white ${restrictedRunners[index] ? 'bg-gray-500 hover:bg-gray-600' : 'bg-red-500 hover:bg-red-600'}`}>
                    {restrictedRunners[index] ? 'Restricted' : 'Restrict'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Vendors</h3>
            <ul className="space-y-2">
              {mockVendors.map((vendor, index) => (
                <li key={vendor.id} className="flex justify-between items-center">
                  <span>{vendor.name}</span>
                  <button onClick={() => toggleVendorRestrict(index)} className={`px-3 py-1 rounded text-white ${restrictedVendors[index] ? 'bg-gray-500 hover:bg-gray-600' : 'bg-red-500 hover:bg-red-600'}`}>
                    {restrictedVendors[index] ? 'Restricted' : 'Restrict'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Vendor Analytics Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Vendor Analytics</h2>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Vendor:</label>
          <select
            value={selectedVendor}
            onChange={(e) => setSelectedVendor(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md"
          >
            {Object.keys(vendorAnalyticsData).map(vendor => (
              <option key={vendor} value={vendor}>{vendor}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{selectedVendor} Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={vendorAnalyticsData[selectedVendor].revenue}>
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
            <h3 className="text-xl font-semibold mb-4">{selectedVendor} Orders Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={vendorAnalyticsData[selectedVendor].orders}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Runner Analytics Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Runner Analytics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Deliveries Completed</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[
                { name: 'Alice Runner', deliveries: Math.floor(Math.random() * 100) + 50 },
                { name: 'Charlie Speed', deliveries: Math.floor(Math.random() * 100) + 50 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="deliveries" fill="#ff7300" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Average Delivery Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={[
                { month: 'Jan', time: Math.floor(Math.random() * 20) + 10 },
                { month: 'Feb', time: Math.floor(Math.random() * 20) + 10 },
                { month: 'Mar', time: Math.floor(Math.random() * 20) + 10 },
                { month: 'Apr', time: Math.floor(Math.random() * 20) + 10 },
                { month: 'May', time: Math.floor(Math.random() * 20) + 10 },
                { month: 'Jun', time: Math.floor(Math.random() * 20) + 10 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="time" stroke="#ff0000" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
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
