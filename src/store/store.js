import {configureStore} from '@reduxjs/toolkit'
import usersSlice from './usersSlice'
import blogsSlice from './blogsSlice'

export const store = configureStore({
    reducer: {
        blogs: blogsSlice,
        users: usersSlice
    }
})