import { AppDispatch } from ".."
import axios from "../../axios"
import { IUser } from "../../models/models"
import {authSlice} from "../slices/authSlice"

interface RegisterResponse {
    data: IUser
}

export const register = ( data: IUser ) => {
    return async (dispatch: AppDispatch) => {
        try{
            await axios.post<RegisterResponse>('users', data)
            dispatch(authSlice.actions.register(data))
            dispatch(authSlice.actions.login({user_id: data.id, username: data.name}))
        } catch(e) {
            console.log('error', e)
        }
    }
}

export const login = (username: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        try{
            const user = await axios.get<IUser[]>('users', {
                params: {
                    name: username,
                }}
            )
            console.log(user)
            if (user.data.length === 0) return 'no user'
            else if (password !== user.data[0].password) return 'incorrect password'
            else {
                dispatch(authSlice.actions.login({user_id: user.data[0].id, username: user.data[0].name}))
                return 'success'
            }
        } catch(e) {
            console.log('error', e)
            return 'server error'
        }
    }
}
