import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Success.css"; // Import the CSS file

const Success = () => {
  const navigate = useNavigate();
  const deliveries = useSelector((store) => store.delivery.deliveries);
  const latestOrder = deliveries[deliveries.length - 1]; // Get the most recent order

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#eee]">
      <svg
        className="checkmark mt-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
      <h2 className="mt-4 text-2xl text-[#282c3f] font-bold tracking-tight">Order Placed</h2>
      <p className="mt-2 text-gray-600 text-center max-w-md">
        Your order has been successfully placed! You will receive a confirmation shortly.
      </p>
      <div className="mt-6 space-y-3 w-full max-w-xs">
        {latestOrder && (
          <button
            onClick={() => navigate(`/track-order/${latestOrder.orderId}`)}
            className="block w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Track Your Order
          </button>
        )}
        <Link
          to="/home"
          className="block w-full bg-[#fc8019] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#e67316] transition-colors text-center"
        >
          Continue Shopping
        </Link>
        <Link
          to="/order-history"
          className="block w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
        >
          View Order History
        </Link>
      </div>
    </div>
  );
};

export default Success;
