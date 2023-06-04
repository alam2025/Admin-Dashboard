import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    containerOpen: false,
    isOpen : false
}

const homeDisplaySlice = createSlice({
    name : "homeDisplay",
    initialState,
    reducers : {
        toggleIsOpen : (state , action) => {
            state.isOpen = action.payload
        },
        toggleContainerOpen : (state , action) => {
            state.containerOpen = action.payload
        }
    },
       
    
})


export const {toggleIsOpen,toggleContainerOpen} = homeDisplaySlice.actions
export default homeDisplaySlice.reducer;