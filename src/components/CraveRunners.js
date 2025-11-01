import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { assignRunner, updateDeliveryStatus } from "../Utils/deliverySlice";

const CraveRunners = () => {
  const dispatch = useDispatch();
  const deliveries = useSelector((store) => store.delivery.deliveries);
  const userRole = useSelector((store) => store.userRole.currentRole);

  const handleAcceptDelivery = (deliveryId) => {
    dispatch(assignRunner({ deliveryId, runnerId: 3 })); // Assuming current user is runner with id 3
  };

  const handleUpdateStatus = (deliveryId, status) => {
    dispatch(updateDeliveryStatus({ id: deliveryId, status }));
  };

  const availableDeliveries = deliveries.filter(d => d.status === 'pending');
  const myDeliveries = deliveries.filter(d => d.runnerId === 3);

  return (
    <div className="pt-28 px-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Crave Runners</h1>

      {userRole === 'Runner' && (
        <>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Available Deliveries</h2>
            <div className="space-y-4">
              {availableDeliveries.map((delivery) => (
                <div key={delivery.id} className="border p-4 rounded">
                  <h3 className="font-bold">Order #{delivery.orderId}</h3>
                  <p>Pickup: {delivery.pickupLocation}</p>
                  <p>Delivery: {delivery.deliveryLocation}</p>
                  <p>Items: {delivery.items.join(', ')}</p>
                  <button
                    onClick={() => handleAcceptDelivery(delivery.id)}
                    className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Accept Delivery
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">My Deliveries</h2>
            <div className="space-y-4">
              {myDeliveries.map((delivery) => (
                <div key={delivery.id} className="border p-4 rounded">
                  <h3 className="font-bold">Order #{delivery.orderId}</h3>
                  <p>Status: <span className="capitalize">{delivery.status}</span></p>
                  <p>Pickup: {delivery.pickupLocation}</p>
                  <p>Delivery: {delivery.deliveryLocation}</p>
                  <p>Items: {delivery.items.join(', ')}</p>
                  {delivery.status === 'assigned' && (
                    <button
                      onClick={() => handleUpdateStatus(delivery.id, 'picked_up')}
                      className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                    >
                      Mark Picked Up
                    </button>
                  )}
                  {delivery.status === 'picked_up' && (
                    <button
                      onClick={() => handleUpdateStatus(delivery.id, 'in_transit')}
                      className="mt-2 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 mr-2"
                    >
                      Start Delivery
                    </button>
                  )}
                  {delivery.status === 'in_transit' && (
                    <button
                      onClick={() => handleUpdateStatus(delivery.id, 'delivered')}
                      className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Mark Delivered
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {userRole !== 'Runner' && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Delivery Status</h2>
          <div className="space-y-4">
            {deliveries.map((delivery) => (
              <div key={delivery.id} className="border p-4 rounded">
                <h3 className="font-bold">Order #{delivery.orderId}</h3>
                <p>Status: <span className="capitalize">{delivery.status}</span></p>
                <p>Pickup: {delivery.pickupLocation}</p>
                <p>Delivery: {delivery.deliveryLocation}</p>
                <p>Items: {delivery.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CraveRunners;
