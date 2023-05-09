import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieService from './movieService'

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
        return await movieService.getMovies()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const movieSlice = createSlice({
    name: 'movie',
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
    }
})

export const { reset } = movieSlice.actions
export default movieSlice.reducer