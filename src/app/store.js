import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from '../features/Todo.Slice.js'


export const store = configureStore({
    reducer:{
        todos:TodoReducer
    }
})