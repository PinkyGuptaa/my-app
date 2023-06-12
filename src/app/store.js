//create store very easily using configureStore
import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';

export default configureStore({
    reducer:{
        user: userReducer,

    }
})