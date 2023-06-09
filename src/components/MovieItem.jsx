import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { voteMovie } from '../features/movies/moviesSlice'

const MovieItem = ({ movie }) => {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/w500'
    const dispatch = useDispatch()
    const resume = movie.overview
    return (
        <div className="col-md-4">
            <div className="card mb-3">
                {/* <h3 className="card-header">Card header</h3> */}
                <div className="card-body">
                    <h5 className="card-title">{ movie.title }</h5>
                    {/* <h6 className="card-subtitle text-muted">Support card subtitle</h6> */}
                </div>
                <img className="card-img-top" src={ URL_IMAGE + movie.backdrop_path } alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{ resume.substr(1,100) + "..." }</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">Votos: <span className='text-warning'>{ movie.vote_count }</span></div>
                        <div className="col-md-6">
                            <button className='btn' onClick={() => dispatch(voteMovie(movie.id))}>
                                Votar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    <Link className="nav-link" to={ '/movie/' + movie.id }>Ver pelicula</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieItem