import {combineReducers,configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userSlice from '../slices/UserSlice';

// const reducer = combineReducers({
//     userInfo: userSlice,
// });

export const store = configureStore({
    reducer:userSlice,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck:false}),
})