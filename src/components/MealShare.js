import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addShare, claimShare } from "../Utils/mealShareSlice";

const MealShare = () => {
  const dispatch = useDispatch();
  const shares = useSelector((store) => store.mealShare.shares);
  const [newShare, setNewShare] = useState({
    title: "",
    description: "",
    quantity: 1,
    expiryTime: "",
    location: "",
  });

  const handleAddShare = () => {
    if (newShare.title && newShare.description && newShare.location) {
      dispatch(addShare(newShare));
      setNewShare({
        title: "",
        description: "",
        quantity: 1,
        expiryTime: "",
        location: "",
      });
    }
  };

  const handleClaimShare = (id) => {
    dispatch(claimShare(id));
  };

  return (
    <div className="pt-28 px-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Meal Share</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Share Surplus Food</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title (e.g., Leftover Pizza)"
            value={newShare.title}
            onChange={(e) => setNewShare({...newShare, title: e.target.value})}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={newShare.location}
            onChange={(e) => setNewShare({...newShare, location: e.target.value})}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Description"
            value={newShare.description}
            onChange={(e) => setNewShare({...newShare, description: e.target.value})}
            className="border p-2 rounded md:col-span-2"
            rows="3"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newShare.quantity}
            onChange={(e) => setNewShare({...newShare, quantity: parseInt(e.target.value)})}
            className="border p-2 rounded"
            min="1"
          />
          <input
            type="datetime-local"
            value={newShare.expiryTime}
            onChange={(e) => setNewShare({...newShare, expiryTime: e.target.value})}
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddShare}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Share Meal
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Available Shares</h2>
        <div className="space-y-4">
          {shares.filter(share => !share.claimed).map((share) => (
            <div key={share.id} className="border p-4 rounded">
              <h3 className="font-bold">{share.title}</h3>
              <p className="text-gray-600">{share.description}</p>
              <p className="text-sm">Quantity: {share.quantity} | Location: {share.location}</p>
              <p className="text-sm">Expires: {new Date(share.expiryTime).toLocaleString()}</p>
              <button
                onClick={() => handleClaimShare(share.id)}
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Claim Share
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealShare;
