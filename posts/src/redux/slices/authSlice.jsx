import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {g
        },

        register: (state, action) => {
            state.user = action.payload
        },

    },
})

export const { login, logout, registerg } = authSlice.actions
export default authSlice.reducer