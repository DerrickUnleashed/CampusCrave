import { createSlice } from "@reduxjs/toolkit";

const userRoleSlice = createSlice({
  name: "userRole",
  initialState: {
    currentRole: "Student", // Default role
    user: null,
  },
  reducers: {
    setRole: (state, action) => {
      state.currentRole = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setRole, setUser } = userRoleSlice.actions;
export default userRoleSlice.reducer;
