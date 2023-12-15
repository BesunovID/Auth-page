import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../models/models"

interface UserState {
    loading: boolean
    user: IUser[]
    login: boolean
    error: string
}

const initialState: UserState = {
    loading: false,
    user: [],
    login: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IUser[]>) {
            state.loading = false;
            state.user = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        },
    }
})

export default userSlice.reducer