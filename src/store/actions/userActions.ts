import { AppDispatch } from "..";
import axios from "../../axios"
import { IUser } from "../../models/models";
import {userSlice} from "../slices/userSlice";

export const fetchUser = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(userSlice.actions.fetching());
            const response = await axios.get<IUser[]>('users');
            console.log(response);
            dispatch(userSlice.actions.fetchSuccess(
                response.data
            )); 
        } catch (e) {
            dispatch(userSlice.actions.fetchError(e as Error));
        }
    }
}