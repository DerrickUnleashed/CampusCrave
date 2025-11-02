import React from "react";
import { useSelector } from "react-redux";

const RunnerDashboard = () => {
  const deliveries = useSelector((store) => store.delivery.deliveries);

  return (
    <div className="pt-28 px-8">
      <br />
      <h1 className="text-3xl font-bold mb-6">Runner Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Active Deliveries</h2>
          <p className="text-2xl font-bold text-orange-600">{deliveries.filter(d => d.status === 'in_transit').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Earnings Today</h2>
          <p className="text-2xl font-bold text-green-600">₹350</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Available Orders</h2>
          <p className="text-gray-600">{deliveries.filter(d => d.status === 'pending').length} available</p>
        </div>
      </div>
    </div>
  );
};

export default RunnerDashboard;
