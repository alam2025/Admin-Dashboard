import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeBg: '#FFFFFF',
}

const bgColorSlice = createSlice({
    name : "bgColor",
    initialState,
    reducers : {
        // action
        changeBg : (state , action) => {
            state.activeBg = action.payload 
        }, 
    },
       
    
})


export const {changeBg} = bgColorSlice.actions
export default bgColorSlice.reducer;