import { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { getMovie, reset } from '../features/movie/movieSlice'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'


const Movie = () => {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/w500'
    const params = useParams()
    const movie_id = params.movieId
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const { user } = useSelector((state) => state.auth)
    const { movie, isLoading, isError, message } = useSelector((state) => state.movie)

    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        dispatch(getMovie(movie_id))
        

        return () => {
            dispatch(reset())
        }

    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    
  return (
    <>

        <div className="has-bg-img">
            <h2>{movie.title}</h2>
            <img className="bg-img" src={ URL_IMAGE + movie.backdrop_path } alt={movie.title} />
            <p className="lead fw-normal">{movie.overview}</p>
        </div>
        <div className="row">
            <div className="col-md-12 px-md-5">
                <a className="nav-link" href="/">Regresar al listado</a>
            </div>
        </div>

    </>
  )
}

export default Movie