import { createSlice } from '@reduxjs/toolkit'

interface IsLoggedIn{
    value: boolean
}

const initialState: IsLoggedIn = {
    value: true
}

export const isLoggedInSlice = createSlice({
    name: 'isLoggedIn',
    initialState,
    reducers: {
        setTrue: (state): void => {
            state.value = true
        },
        setFalse: (state): void => {
            state.value = false
        }
    }

})

export const { setTrue, setFalse } = isLoggedInSlice.actions
export const changeIsLoggedIn = isLoggedInSlice.reducer