import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token"), // Récupère le token dans le localStorage 
    user: {},
};


const userSlice = createSlice({
    name: "user", // Nom du slice
    initialState, // On utilise l'état initial
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUserData: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.user = {};
            localStorage.removeItem("token");
        },
    },
});

export const { setToken, setUserData, logout } = userSlice.actions;
export default userSlice.reducer;