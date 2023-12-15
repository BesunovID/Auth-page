import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../models/models"

const USER_ID = 'user_id'
const USERNAME = 'username'

interface AuthState {
    user_id: number
    username: string
    isAuth: boolean
}

interface AuthPayloadLogin {
    user_id: number,
    username: string
}

const initialState: AuthState = {
    user_id: Number(localStorage.getItem(USER_ID)) ?? 0,
    username: localStorage.getItem(USERNAME) ?? '',
    isAuth: Boolean(localStorage.getItem(USERNAME) && localStorage.getItem(USER_ID)),
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<AuthPayloadLogin>){
            state.user_id = action.payload.user_id
            state.username = action.payload.username
            state.isAuth = Boolean(action.payload.user_id && action.payload.username)

            localStorage.setItem(USER_ID, String(action.payload.user_id))
            localStorage.setItem(USERNAME, action.payload.username)
        },
        logout(state) {
            state.user_id = 0
            state.username = ''
            state.isAuth = false

            localStorage.removeItem(USER_ID)
            localStorage.removeItem(USERNAME)
        },
        register(state, action: PayloadAction<IUser>) {
            state.user_id = action.payload.id
            state.username = action.payload.name
        }
    }
})

export default authSlice.reducer