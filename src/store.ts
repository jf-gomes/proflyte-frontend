import { configureStore } from "@reduxjs/toolkit";
import { changeHasAccount } from "./features/hasAccount/hasAccount.slice.ts";
import { changeIsLoggedIn } from "./features/isLoggedIn/isLoggedIn.slice.ts";

export const store = configureStore({
    reducer: {
        changeHasAccount,
        changeIsLoggedIn
    }
})

export type RootState = ReturnType<typeof store.getState>;