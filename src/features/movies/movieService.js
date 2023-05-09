import axios from 'axios'

const API_URL = 'https://oura-backend-production.up.railway.app/api/movies/'
// const API_URL = 'http://localhost:5000/api/movies/'

//obtener las movies del usuario logeado
const getMovies = async () => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }
    const response = await axios.get(API_URL)
    return response.data
}

const movieService = {
    getMovies
    // createTarea,
    // borrarTareas
}

export default movieService