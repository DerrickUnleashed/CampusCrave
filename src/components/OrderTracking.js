import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { updateDeliveryStatus } from "../Utils/deliverySlice";

const OrderTracking = () => {
  const { orderId } = useParams();
  const deliveries = useSelector((state) => state.delivery.deliveries);
  const dispatch = useDispatch();

  const [currentLocation, setCurrentLocation] = useState(null);
  const [eta, setEta] = useState(null);

  const delivery = deliveries.find((d) => d.orderId === orderId);

  // Haversine distance formula (in km)
  const calculateDistance = (a, b) => {
    if (!a || !b) return 0;
    const R = 6371;
    const dLat = ((b.lat - a.lat) * Math.PI) / 180;
    const dLng = ((b.lng - a.lng) * Math.PI) / 180;
    const x =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((a.lat * Math.PI) / 180) *
        Math.cos((b.lat * Math.PI) / 180) *
        Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  };

  useEffect(() => {
    if (!delivery) return;

    let timer, interval;

    const nextStatus = {
      pending: "assigned",
      assigned: "picked_up",
      picked_up: "in_transit",
      in_transit: "delivered",
    };

    const triggerNextStatus = (delay, from) => {
      timer = setTimeout(() => {
        const next = nextStatus[from];
        if (next) dispatch(updateDeliveryStatus({ id: delivery.id, status: next }));
      }, delay);
    };

    switch (delivery.status) {
      case "pending":
      case "assigned":
      case "picked_up":
        triggerNextStatus(10000, delivery.status);
        break;

      case "in_transit":
        if (delivery.pickupCoords && delivery.deliveryCoords) {
          const pickup = delivery.pickupCoords;
          const drop = delivery.deliveryCoords;

          console.log("Pickup:", pickup, "Drop:", drop);

          const duration = 10000; // 30 seconds
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1); // 0 → 1

            const newLat = pickup.lat + (drop.lat - pickup.lat) * progress;
            const newLng = pickup.lng + (drop.lng - pickup.lng) * progress;

            const newLoc = { lat: newLat, lng: newLng };
            setCurrentLocation(newLoc);

            const distance = calculateDistance(newLoc, drop);
            setEta(Math.ceil(distance * 10));

            console.log(
              `Progress: ${(progress * 100).toFixed(1)}%`,
              newLoc,
              `Distance left: ${distance.toFixed(3)} km`
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              console.log("✅ Delivery reached destination!");
              dispatch(updateDeliveryStatus({ id: delivery.id, status: "delivered" }));
            }
          };

          requestAnimationFrame(animate);
        }
        break;



      default:
        break;
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [delivery, dispatch]);

  if (!delivery) {
    return (
      <div className="text-center py-10 text-gray-600">
        ❌ Order not found.
      </div>
    );
  }

  const steps = [
    { status: "pending", label: "Order Placed", icon: "📝" },
    { status: "assigned", label: "Runner Assigned", icon: "👤" },
    { status: "picked_up", label: "Picked Up", icon: "📦" },
    { status: "in_transit", label: "In Transit", icon: "🚴" },
    { status: "delivered", label: "Delivered", icon: "✅" },
  ];

  const currentStep = steps.findIndex((s) => s.status === delivery.status);
  const defaultCoords = { lat: 12.843744, lng: 80.154570 };

  const pickup = delivery.pickupCoords || defaultCoords;
  const drop = delivery.deliveryCoords || defaultCoords;
  console.log("Pickup:", pickup, "Drop:", drop);

  return (
    <div className="pt-28 px-8 max-w-4xl mx-auto">
      <br/>
      <br/>
      <h1 className="text-3xl font-bold mb-6">Track Your Order</h1>

      {/* --- Order Summary --- */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Order #{orderId}</h2>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              delivery.status === "delivered"
                ? "bg-green-100 text-green-700"
                : delivery.status === "in_transit"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {delivery.status.replace("_", " ").toUpperCase()}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-medium text-gray-700">Pickup Location</h3>
            <p className="text-gray-600">{delivery.pickupLocation || "N/A"}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700">Delivery Location</h3>
            <p className="text-gray-600">{delivery.deliveryLocation || "N/A"}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-2">Items</h3>
          <ul className="text-gray-600">
            {delivery.items?.map((item, i) => (
              <li key={i} className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {delivery.status === "in_transit" && eta && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800">Estimated Arrival</h3>
            <p className="text-blue-600 text-lg font-semibold">{eta} minutes</p>
          </div>
        )}
      </div>

      {/* --- Progress Tracker --- */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">Order Progress</h2>
        <div className="flex justify-between items-center">
          {steps.map((step, i) => (
            <div key={step.status} className="flex flex-col items-center flex-1">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl mb-2 ${
                  i <= currentStep
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {step.icon}
              </div>
              <p
                className={`text-sm font-medium ${
                  i <= currentStep ? "text-orange-600" : "text-gray-400"
                }`}
              >
                {step.label}
              </p>
              {i < steps.length - 1 && (
                <div
                  className={`w-1 h-8 ${
                    i < currentStep ? "bg-orange-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- Live Map --- */}
      {delivery.status === "in_transit" && (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4">Live Location</h2>
          <div className="h-64 rounded-lg overflow-hidden">
            <MapContainer
              center={[pickup.lat, pickup.lng]}
              zoom={30}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />
              <Marker position={[pickup.lat, pickup.lng]}>
                <Popup>Pickup Location</Popup>
              </Marker>
              {currentLocation && (
                <Marker position={[currentLocation.lat, currentLocation.lng]}>
                  <Popup>Runner’s Current Location</Popup>
                </Marker>
              )}
              <Marker position={[drop.lat, drop.lng]}>
                <Popup>Delivery Destination</Popup>
              </Marker>
            </MapContainer>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Current Location:{" "}
            {currentLocation
              ? `${currentLocation.lat.toFixed(4)}, ${currentLocation.lng.toFixed(4)}`
              : "Updating..."}
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
