import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {userInputReducer, userSelectReducer, userCategoryReducer} from './InputSlice'
import DataReducer from "./UserDatas";


const rootReducer = combineReducers({
    userInput: userInputReducer,
    userSelect: userSelectReducer,
    userCategory: userCategoryReducer,
    UserData: DataReducer,
})

export default configureStore({
    reducer: rootReducer,
})