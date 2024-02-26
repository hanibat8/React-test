import {configureStore} from '@reduxjs/toolkit'
import usersReducer from '../components/List/usersSlice'

export const store=configureStore({
    reducer:{
        users:usersReducer
    }
})