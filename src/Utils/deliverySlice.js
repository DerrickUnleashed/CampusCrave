import { createSlice } from "@reduxjs/toolkit";

const deliverySlice = createSlice({
  name: "delivery",
  initialState: {
    deliveries: [],
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
