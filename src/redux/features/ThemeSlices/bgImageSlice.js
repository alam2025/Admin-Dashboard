import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeBgImage: 'https://i.ibb.co/kKxqbS8/Group-260.png',
}

const bgImageSlice = createSlice({
    name : "bgImage",
    initialState,
    reducers : {
        // action
        changeBgImage : (state , action) => {
            state.activeBgImage = action.payload 
        }, 
    },
       
    
})


export const {changeBgImage} = bgImageSlice.actions
export default bgImageSlice.reducer;