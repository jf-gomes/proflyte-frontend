import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserData{
    data: DataType | undefined
}

interface PostType{
    id: string,
    title: string,
    tag: string,
    description: string,
    img: string
}

interface DataType{
    id: string,
    name: string,
    userName: string,
    email: string,
    img?: string,
    about: string,
    posts: PostType[]
}

const initialState: UserData = {
    data: undefined
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<DataType>): void => {
            state.data = action.payload
        }
    }

})

export const { setUserData } = userDataSlice.actions
export const changeUserData = userDataSlice.reducer