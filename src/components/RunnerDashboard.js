import React, { useState } from "react";
import { useSelector } from "react-redux";

const RunnerDashboard = () => {
  const deliveries = useSelector((store) => store.delivery.deliveries);

  // Mock available orders for runners to pick
  const [availableOrders, setAvailableOrders] = useState([
    {
      id: 'ORD001',
      restaurant: 'Gazebo C1',
      customer: 'John Doe',
      location: 'Room 101, Dorm A',
      items: ['Burger Combo', 'French Fries'],
      total: 250,
      status: 'pending',
      pickupTime: '2024-01-15T11:00:00Z',
    },
    {
      id: 'ORD002',
      restaurant: 'NorthSquare C1',
      customer: 'Jane Smith',
      location: 'Library Study Area',
      items: ['Chole Bhature', 'Lassi'],
      total: 180,
      status: 'pending',
      pickupTime: '2024-01-15T12:00:00Z',
    },
    {
      id: 'ORD003',
      restaurant: 'Gymkhana',
      customer: 'Bob Johnson',
      location: 'Sports Complex',
      items: ['Steak', 'Champagne'],
      total: 850,
      status: 'pending',
      pickupTime: '2024-01-15T13:00:00Z',
    },
    {
      id: 'ORD004',
      restaurant: 'Dominoes',
      customer: 'Alice Brown',
      location: 'Central Library',
      items: ['Margherita Pizza', 'Garlic Bread'],
      total: 450,
      status: 'pending',
      pickupTime: '2024-01-15T14:00:00Z',
    },
  ]);

  const [acceptedOrders, setAcceptedOrders] = useState([]);

  const acceptOrder = (orderId) => {
    const order = availableOrders.find(o => o.id === orderId);
    if (order) {
      setAvailableOrders(availableOrders.filter(o => o.id !== orderId));
      setAcceptedOrders([...acceptedOrders, { ...order, status: 'accepted' }]);
    }
  };

  const unacceptOrder = (orderId) => {
    const order = acceptedOrders.find(o => o.id === orderId);
    if (order) {
      setAcceptedOrders(acceptedOrders.filter(o => o.id !== orderId));
      setAvailableOrders([...availableOrders, { ...order, status: 'pending' }]);
    }
  };

  return (
    <div className="pt-28 px-8">
      <br />
      <h1 className="text-3xl font-bold mb-6">Runner Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Active Deliveries</h2>
          <p className="text-2xl font-bold text-orange-600">{deliveries.filter(d => d.status === 'in_transit').length + acceptedOrders.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Earnings Today</h2>
          <p className="text-2xl font-bold text-green-600">₹{acceptedOrders.reduce((sum, order) => sum + Math.floor(order.total * 0.1), 350)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Available Orders</h2>
          <p className="text-gray-600">{availableOrders.length} available</p>
        </div>
      </div>

      {/* Available Orders Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Available Orders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {availableOrders.map(order => (
            <div key={order.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Order {order.id}</h3>
              <p className="text-sm text-gray-600 mb-1"><strong>Restaurant:</strong> {order.restaurant}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Customer:</strong> {order.customer}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {order.location}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Items:</strong> {order.items.join(', ')}</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Total:</strong> ₹{order.total}</p>
              <button
                onClick={() => acceptOrder(order.id)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
              >
                Accept Order
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Accepted Orders Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">My Accepted Orders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {acceptedOrders.map(order => (
            <div key={order.id} className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold mb-2">Order {order.id}</h3>
              <p className="text-sm text-gray-600 mb-1"><strong>Restaurant:</strong> {order.restaurant}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Customer:</strong> {order.customer}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {order.location}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Items:</strong> {order.items.join(', ')}</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Total:</strong> ₹{order.total}</p>
              <p className="text-sm text-green-600 font-semibold mb-2">Status: {order.status}</p>
              <button
                onClick={() => unacceptOrder(order.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
              >
                Unaccept Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunnerDashboard;
