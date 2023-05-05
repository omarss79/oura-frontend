import axios from 'axios'

const API_URL = 'https://oura-backend-production.up.railway.app/api/movies/'

//obtener las movies del usuario logeado
const getMovies = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

const movieService = {
    getMovies
    // createTarea,
    // borrarTareas
}

export default movieService