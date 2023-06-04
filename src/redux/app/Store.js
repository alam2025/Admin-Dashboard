import {configureStore} from "@reduxjs/toolkit"
import homeDisplaySlice from "../features/HomeSlices/homeDisplaySlice";
import bgColorSlice from "../features/ThemeSlices/bgColorSlice";
import bgImageSlice from "../features/ThemeSlices/bgImageSlice";


const store = configureStore({
    reducer : {
       homeDisplay : homeDisplaySlice,
       bgColor : bgColorSlice,
       bgImage: bgImageSlice,
    }
})

export default store;