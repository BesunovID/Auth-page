import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISelect } from "../../models/models"

interface OptionPayload {
    title: string
    value: string
}

const initialState: ISelect = {
    options: [],
    selected: null,
    isOpen: false,
}

export const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        openMenu(state){
            state.isOpen = !state.isOpen
        },
        selectOption(state, action: PayloadAction<OptionPayload>) {
            state.selected = action.payload;
        },
    }
})

export default selectSlice.reducer