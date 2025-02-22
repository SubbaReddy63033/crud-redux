import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  users: [], // Ensure users is always an array
};

// Create user slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload; // Update only the specific user
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

// Export actions
export const { addUser, updateUser, deleteUser } = userSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

export default store;
