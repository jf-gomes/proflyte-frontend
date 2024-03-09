import { configureStore } from "@reduxjs/toolkit";
import { changeHasAccount } from "./features/hasAccount/hasAccount.slice.ts";
import { changeIsLoggedIn } from "./features/isLoggedIn/isLoggedIn.slice.ts";
import { changeUserData } from "./features/userData/userData.slice.ts";
import { changePostData } from "./features/post/post.slice.ts";

export const store = configureStore({
    reducer: {
        changeHasAccount,
        changeIsLoggedIn,
        changeUserData,
        changePostData
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch