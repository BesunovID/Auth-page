import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import selectReducer from './slices/selectSlice'
import particlesReducer from "./slices/particlesSlice";

const rootReducer = combineReducers({
    users: userReducer,
    auth: authReducer,
    select: selectReducer,
    particles: particlesReducer,
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']