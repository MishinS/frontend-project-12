import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || null,
    isAuthenticated:!!localStorage.getItem("token"),
    channel: localStorage.getItem("channel") || null,  
};

const authSlice = createSlice(
    {
        name: "auth",
        initialState,
        reducers: {
            loginSuccess(state, action) {
                state.token = action.payload;
                state.isAuthenticated = true;
            },
            logout(state) {
                state.token = null;
                state.isAuthenticated = false;
                localStorage.removeItem("token");
            },
            channelsSuccess(state, action)  {
                state.channel  = action.payload;

            }
        },
    }
);

export const { loginSuccess, logout, channelsSuccess } = authSlice.actions;

export default authSlice.reducer;