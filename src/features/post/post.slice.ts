import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PostData{
    data: DataType | undefined
}

interface DataType{
    id: string,
    title: string,
    tag: string,
    description: string,
    img: string,
    content: string,
    createdBy: string
}

const initialState: PostData = {
    data: undefined
}

export const postDataSlice = createSlice({
    name: 'postData',
    initialState,
    reducers: {
        setPostData: (state, action: PayloadAction<DataType>): void => {
            state.data = action.payload
        }
    }
})

export const { setPostData } = postDataSlice.actions
export const changePostData = postDataSlice.reducer