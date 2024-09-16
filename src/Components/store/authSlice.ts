import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: any;
    loading: boolean;
    error: string | null;
};

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart(state) {
            state.loading = true;
            state.error = null;
        }, 
        loginSuccess(state, action: PayloadAction<any>) {
            state.user = action.payload;
            state.loading = false;
        }, 
        loginFailure(state, action: PayloadAction<string>){
            state.error = action.payload;
            state.loading = false;
        },
        logout(state) {
            state.user = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;