import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice';

//Store
const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;