import { createSlice } from '@reduxjs/toolkit'

interface HasAccountState{
    value: boolean
}

const initialState: HasAccountState = {
    value: false
}

export const hasAccountSlice = createSlice({
    name: 'hasAccount',
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

export const { setTrue, setFalse } = hasAccountSlice.actions
export const changeHasAccount = hasAccountSlice.reducer