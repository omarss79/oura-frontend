import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import moviesReducer from '../features/movies/moviesSlice'
import movieReducer from '../features/movie/movieSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        movies: moviesReducer,
        movie: movieReducer
    },
})