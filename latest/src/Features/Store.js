import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./Slice"
const Store = configureStore({
    reducer: {
        counter: counterslice
    }})
export default Store