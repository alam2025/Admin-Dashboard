import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeBgImage: 'https://i.ibb.co/bdywfSP/Dream-Shaper-v5-Photo-islamic-Evening-with-Sun-Light-Backgroun-0.webp',
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