import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moviesService from './moviesService'

const initialState = {
    movies: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//mostrar las movies del usuario
export const getMovies = createAsyncThunk('movies/getAll', async (_, thunkAPI) => {
    try {
        // const token = thunkAPI.getState().auth.user.token
        // console.log("Token: " + token);
        return await moviesService.getMovies()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//votar una pelicula
export const voteMovie = createAsyncThunk('movies/vote', async (id, thunkAPI) => {
    try {
        return await moviesService.updateLikesMovies(id)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movies = action.payload
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(voteMovie.pending, (state) => {
                state.isLoading = true
            })
            .addCase(voteMovie.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                // state.movies[0].vote_count = action.payload.vote_count
                state.movies.forEach(element => {
                    if(element._id === action.payload._id){
                        element.vote_count = action.payload.vote_count
                    }
                })
            })
            .addCase(voteMovie.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = moviesSlice.actions
export default moviesSlice.reducer