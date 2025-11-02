import React, { useState } from "react";
import { useSelector } from "react-redux";

const VendorDashboard = () => {
  const deliveries = useSelector((store) => store.delivery.deliveries);

  // Mock menu data - in a real app, this would come from an API
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Margherita Pizza", price: 250, category: "Pizza", offer: false },
    { id: 2, name: "Chicken Burger", price: 180, category: "Burger", offer: true },
    { id: 3, name: "Veg Biryani", price: 150, category: "Rice", offer: false },
    { id: 4, name: "Chocolate Shake", price: 120, category: "Beverage", offer: true },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleAddItem = () => {
    if (newItem.name && newItem.price && newItem.category) {
      const item = {
        id: Date.now(),
        name: newItem.name,
        price: parseInt(newItem.price),
        category: newItem.category,
        offer: false,
      };
      setMenuItems([...menuItems, item]);
      setNewItem({ name: "", price: "", category: "" });
    }
  };

  const handleRemoveItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleToggleOffer = (id) => {
    setMenuItems(menuItems.map(item =>
      item.id === id ? { ...item, offer: !item.offer } : item
    ));
  };

  return (
    <div className="pt-28 px-8">
      <br />
      <h1 className="text-3xl font-bold mb-6">Vendor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Today's Orders</h2>
          <p className="text-2xl font-bold text-blue-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Revenue</h2>
          <p className="text-2xl font-bold text-green-600">₹2,450</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Pending Deliveries</h2>
          <p className="text-gray-600">{deliveries.filter(d => d.status !== 'delivered').length} pending</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Menu Management</h2>

        {/* Add New Item Form */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Add New Item</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="number"
              placeholder="Price (₹)"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Category"
              value={newItem.category}
              onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleAddItem}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              Add Item
            </button>
          </div>
        </div>

        {/* Menu Items List */}
        <div>
          <h3 className="text-lg font-medium mb-2">Current Menu Items</h3>
          <div className="space-y-4">
            {menuItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-600">₹{item.price} • {item.category}</p>
                  {item.offer && <span className="text-sm text-green-600 font-medium">Offer Active</span>}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleToggleOffer(item.id)}
                    className={`px-3 py-1 rounded text-sm ${
                      item.offer
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                    }`}
                  >
                    {item.offer ? "Deactivate Food Item" : "Activate Food Item"}
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
