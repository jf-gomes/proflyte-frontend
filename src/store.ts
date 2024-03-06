import { configureStore } from "@reduxjs/toolkit";
import { changeHasAccount } from "./features/hasAccount/hasAccount.slice.ts";
import { changeIsLoggedIn } from "./features/isLoggedIn/isLoggedIn.slice.ts";
import { changeUserData } from "./features/userData/userData.slice.ts";

export const store = configureStore({
    reducer: {
        changeHasAccount,
        changeIsLoggedIn,
        changeUserData
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch