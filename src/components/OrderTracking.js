import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { updateDeliveryStatus } from "../Utils/deliverySlice";

const OrderTracking = () => {
  const { orderId } = useParams();
  const deliveries = useSelector((store) => store.delivery.deliveries);
  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [eta, setEta] = useState(null);
  const [statusTimer, setStatusTimer] = useState(null);

  const delivery = deliveries.find(d => d.orderId === orderId);

  useEffect(() => {
    if (delivery) {
      let timer;
      if (delivery.status === 'pending') {
        timer = setTimeout(() => {
          dispatch(updateDeliveryStatus({ id: delivery.id, status: 'assigned' }));
        }, 10000); // 10 seconds
      } else if (delivery.status === 'assigned') {
        timer = setTimeout(() => {
          dispatch(updateDeliveryStatus({ id: delivery.id, status: 'picked_up' }));
        }, 10000); // 10 seconds
      } else if (delivery.status === 'picked_up') {
        timer = setTimeout(() => {
          dispatch(updateDeliveryStatus({ id: delivery.id, status: 'in_transit' }));
        }, 10000); // 10 seconds
      } else if (delivery.status === 'in_transit') {
        // Simulate real-time location updates
        const interval = setInterval(() => {
          // Mock location update - in real app, this would come from GPS
          setCurrentLocation({
            lat: delivery.pickupCoords.lat + Math.random() * 0.01,
            lng: delivery.pickupCoords.lng + Math.random() * 0.01
          });
          // Calculate ETA based on distance
          const distance = calculateDistance(currentLocation, delivery.deliveryCoords);
          setEta(Math.ceil(distance * 10)); // Rough ETA calculation
        }, 5000);

        timer = setTimeout(() => {
          dispatch(updateDeliveryStatus({ id: delivery.id, status: 'delivered' }));
        }, 30000); // 30 seconds for transit

        return () => clearInterval(interval);
      }
      setStatusTimer(timer);
      return () => clearTimeout(timer);
    }
  }, [delivery, dispatch, currentLocation]);

  const calculateDistance = (point1, point2) => {
    if (!point1 || !point2) return 0;
    const R = 6371; // Earth's radius in km
    const dLat = (point2.lat - point1.lat) * Math.PI / 180;
    const dLng = (point2.lng - point1.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  if (!delivery) {
    return <div className="text-center py-8">Order not found</div>;
  }

  const statusSteps = [
    { status: 'pending', label: 'Order Placed', icon: '📝' },
    { status: 'assigned', label: 'Runner Assigned', icon: '👤' },
    { status: 'picked_up', label: 'Picked Up', icon: '📦' },
    { status: 'in_transit', label: 'In Transit', icon: '🚴' },
    { status: 'delivered', label: 'Delivered', icon: '✅' }
  ];

  const currentStepIndex = statusSteps.findIndex(step => step.status === delivery.status);

  return (
    <div className="pt-28 px-8 max-w-4xl mx-auto">
      <br/>
      <br/>
      <h1 className="text-3xl font-bold mb-6">Track Your Order</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Order #{orderId}</h2>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            delivery.status === 'delivered' ? 'bg-green-100 text-green-800' :
            delivery.status === 'in_transit' ? 'bg-blue-100 text-blue-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
            {delivery.status.replace('_', ' ').toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-medium text-gray-700">Pickup Location</h3>
            <p className="text-gray-600">{delivery.pickupLocation}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700">Delivery Location</h3>
            <p className="text-gray-600">{delivery.deliveryLocation}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-2">Items</h3>
          <ul className="text-gray-600">
            {delivery.items.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {delivery.status === 'in_transit' && eta && (
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium text-blue-800">Estimated Time of Arrival</h3>
            <p className="text-blue-600 text-lg font-bold">{eta} minutes</p>
          </div>
        )}
      </div>

      {/* Progress Tracker */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">Order Progress</h2>
        <div className="flex items-center justify-between">
          {statusSteps.map((step, index) => (
            <div key={step.status} className="flex flex-col items-center flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2 ${
                index <= currentStepIndex
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-400'
              }`}>
                {step.icon}
              </div>
              <p className={`text-sm text-center font-medium ${
                index <= currentStepIndex ? 'text-orange-600' : 'text-gray-400'
              }`}>
                {step.label}
              </p>
              {index < statusSteps.length - 1 && (
                <div className={`flex-1 w-1 h-8 mx-4 mt-2 ${
                  index < currentStepIndex ? 'bg-orange-500' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      {delivery.status === 'in_transit' && (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4">Live Location</h2>
          <div className="h-64 rounded-lg overflow-hidden">
            <MapContainer
              center={[delivery.pickupCoords.lat, delivery.pickupCoords.lng]}
              zoom={15}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {currentLocation && (
                <Marker position={[currentLocation.lat, currentLocation.lng]}>
                  <Popup>
                    Delivery Runner's Current Location
                  </Popup>
                </Marker>
              )}
              <Marker position={[delivery.deliveryCoords.lat, delivery.deliveryCoords.lng]}>
                <Popup>
                  Delivery Destination
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Current Location: {currentLocation ? `${currentLocation.lat.toFixed(4)}, ${currentLocation.lng.toFixed(4)}` : 'Updating...'}
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
