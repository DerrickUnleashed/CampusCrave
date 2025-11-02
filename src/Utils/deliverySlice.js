import { createSlice } from "@reduxjs/toolkit";

const deliverySlice = createSlice({
  name: "delivery",
  initialState: {
    deliveries: [
      {
        id: 1,
        orderId: "ORD001",
        runnerId: 3,
        status: "in_transit",
        pickupLocation: "Campus Cafe",
        deliveryLocation: "Room 101, Dorm A",
        estimatedTime: "2024-01-15T11:00:00Z",
        items: ["Burger Combo"],
        pickupCoords: { lat: 12.84166255938762, lng: 80.15455173160387 }, // Gazebo location
        deliveryCoords: { lat: 12.843687187497949, lng: 80.15451785651514 },
        createdAt: "2024-01-15T10:00:00Z",
      },
      {
        id: 2,
        orderId: "ORD002",
        runnerId: 3,
        status: "delivered",
        pickupLocation: "Dormitory Dining",
        deliveryLocation: "Library Study Area",
        estimatedTime: "2024-01-15T09:30:00Z",
        items: ["Chicken Biryani"],
        pickupCoords: { lat: 12.843467535033184, lng: 80.15260642635936 }, // Gymkhana location
        deliveryCoords: { lat: 12.843687187497949, lng: 80.15451785651514 },
        createdAt: "2024-01-14T15:00:00Z",
      },
    ],
  },
  reducers: {
    addDelivery: (state, action) => {
      state.deliveries.push({
        id: Date.now(),
        ...action.payload,
        status: "pending",
        createdAt: new Date().toISOString(),
      });
    },
    updateDeliveryStatus: (state, action) => {
      const { id, status } = action.payload;
      const delivery = state.deliveries.find(d => d.id === id);
      if (delivery) {
        delivery.status = status;
      }
    },
    assignRunner: (state, action) => {
      const { deliveryId, runnerId } = action.payload;
      const delivery = state.deliveries.find(d => d.id === deliveryId);
      if (delivery) {
        delivery.runnerId = runnerId;
        delivery.status = "assigned";
      }
    },
  },
});

export const { addDelivery, updateDeliveryStatus, assignRunner } = deliverySlice.actions;
export default deliverySlice.reducer;
