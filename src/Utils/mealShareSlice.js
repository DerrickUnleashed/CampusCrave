import { createSlice } from "@reduxjs/toolkit";

const mealShareSlice = createSlice({
  name: "mealShare",
  initialState: {
    shares: [],
  },
  reducers: {
    addShare: (state, action) => {
      state.shares.push({
        id: Date.now(),
        ...action.payload,
        claimed: false,
        createdAt: new Date().toISOString(),
      });
    },
    claimShare: (state, action) => {
      const share = state.shares.find(s => s.id === action.payload);
      if (share) {
        share.claimed = true;
      }
    },
    removeShare: (state, action) => {
      state.shares = state.shares.filter(s => s.id !== action.payload);
    },
  },
});

export const { addShare, claimShare, removeShare } = mealShareSlice.actions;
export default mealShareSlice.reducer;
