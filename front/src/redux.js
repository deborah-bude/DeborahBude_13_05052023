import {configureStore, createSlice} from "@reduxjs/toolkit";

const tokenSlice = createSlice(({
    name: "token",
    initialState: null,
    reducers: {
        updateToken: (state, action) => {
            const newToken = action.payload
            state = newToken
        }
    }
}))

export const { updateToken } = tokenSlice.actions;

export const store = configureStore({
    reducer: {
        token: tokenSlice.reducer
    }
})