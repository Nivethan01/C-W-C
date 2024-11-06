import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, allUsers: [] }, // Initialize allUsers here with an empty array
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload; // Fix naming to allUsers (camelCase)
    },
  },
});

export const { setUser, setAllUsers } = userSlice.actions;
export default userSlice.reducer;
