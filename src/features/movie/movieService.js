import axios from 'axios'

const API_URL = 'https://oura-backend-production.up.railway.app/api/movies/'
// const API_URL = 'http://localhost:5000/api/movies/'

//obtener las movies del usuario logeado
const getMovie = async (id) => {
    const response = await axios.get(API_URL + id)
    return response.data
}


const movieService = {
    getMovie
}

export default movieService