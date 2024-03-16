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
    posts: PostType[],
    token: string
}

export class User{
    id: string
    name: string
    userName: string
    email: string
    img?: string
    about: string
    posts: PostType[]
    token: string

    constructor({ id, name, userName, email, img, about, posts, token }: DataType){
        this.id = id,
        this.name = name,
        this.userName = userName,
        this.email = email,
        this.img = img,
        this.about = about,
        this.posts = posts,
        this.token = token
    }

    userData(): any{
        return (
            this.id,
            this.name,
            this.userName,
            this.email,
            this.img,
            this.about,
            this.posts,
            this.token
        )
    }
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