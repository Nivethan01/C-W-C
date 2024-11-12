import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
     user: null, 
     allUsers: [] ,
     allChats:[],
     selectedChat:null

  }, // Initialize allUsers here with an empty array
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload; // Fix naming to allUsers (camelCase)
    },
    setAllChats:(state,action)=>{
      state.allChats=action.payload;
    },
    setSelectedChat:(state,action)=>{
      state.selectedChat=action.payload;
    }
  },
});

export const { setUser, setAllUsers,setAllChats,setSelectedChat } = userSlice.actions;
export default userSlice.reducer;
