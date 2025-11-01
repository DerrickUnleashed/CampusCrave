import React from "react";
import { useSelector } from "react-redux";

const OrderHistory = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  // Mock order history data
  const orderHistory = [
    {
      id: "ORD001",
      date: "2024-01-15",
      items: ["Burger Combo", "French Fries"],
      total: 250,
      status: "Delivered",
      rating: 5,
      review: "Great food and fast delivery!"
    },
    {
      id: "ORD002",
      date: "2024-01-10",
      items: ["Chicken Biryani", "Raita"],
      total: 180,
      status: "Delivered",
      rating: 4,
      review: "Tasty but could be spicier"
    },
    {
      id: "ORD003",
      date: "2024-01-05",
      items: ["Veggie Pizza", "Coke"],
      total: 320,
      status: "Delivered",
      rating: 5,
      review: "Perfect pizza, will order again!"
    }
  ];

  return (
    <div className="pt-28 px-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>

      <div className="space-y-6">
        {orderHistory.map((order) => (
          <div key={order.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">Order #{order.id}</h2>
                <p className="text-gray-600">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">₹{order.total}</p>
                <p className={`text-sm ${order.status === 'Delivered' ? 'text-green-600' : 'text-orange-600'}`}>
                  {order.status}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-medium mb-2">Items:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {order.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center mb-2">
                <span className="font-medium mr-2">Rating:</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${i < order.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic">"{order.review}"</p>
            </div>
          </div>
        ))}
      </div>

      {orderHistory.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No orders yet</p>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
