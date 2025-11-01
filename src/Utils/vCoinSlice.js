import { createSlice } from "@reduxjs/toolkit";

const vCoinSlice = createSlice({
  name: "vCoins",
  initialState: {
    balance: 150, // Default balance
    transactions: [],
  },
  reducers: {
    earnCoins: (state, action) => {
      const { amount, description } = action.payload;
      state.balance += amount;
      state.transactions.push({
        id: Date.now(),
        type: "earn",
        amount,
        description,
        date: new Date().toISOString(),
      });
    },
    redeemCoins: (state, action) => {
      const { amount, description } = action.payload;
      if (state.balance >= amount) {
        state.balance -= amount;
        state.transactions.push({
          id: Date.now(),
          type: "redeem",
          amount: -amount,
          description,
          date: new Date().toISOString(),
        });
      }
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
});

export const { earnCoins, redeemCoins, setBalance } = vCoinSlice.actions;
export default vCoinSlice.reducer;
