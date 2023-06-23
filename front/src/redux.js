import {configureStore, createSelector, createSlice} from "@reduxjs/toolkit";

const tokenSlice = createSlice(({
    name: 'token',
    initialState: null,
    reducers: {
        updateToken: (state, action) => {
            return action.payload
        }
    },

}))

const userSlice = createSlice(({
    name: 'user',
    initialState: {
        lastName: null,
        firstName: null
    },
    reducers: {
        userName: (state, action) => {
            return action.payload
        },
        editName: (state, action) => {
            return action.payload
        }
    },

}))

export const { updateToken } = tokenSlice.actions;
export const { userName, editName } = userSlice.actions;

export const isUserAuthenticatedSelector = createSelector((state) => state, state => !!state.token)

export const store = configureStore({
    reducer: {
        token: tokenSlice.reducer,
        userName: userSlice.reducer,
    }
})