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

export class Post{
    id: string
    title: string
    tag: string
    description: string
    img: string
    content: string
    createdBy: string

    constructor({ id, title, tag, description, img, content, createdBy }: DataType){
        this.id = id,
        this.title = title,
        this.tag = tag,
        this.description = description,
        this.img = img,
        this.content = content,
        this.createdBy = createdBy
    }
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