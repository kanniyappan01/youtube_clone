import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    intialState:{
        user:null,
    },
    reducers:{
        setUser: (state,action)=>{
            state.user = action.payload;
        },
        logout:(state,action)=>{
            state.user = null;
        }
    }
})

export const {setUser,logout} = userSlice.actions;

// export const getUser = (state) => state.user;

export default userSlice.reducer;