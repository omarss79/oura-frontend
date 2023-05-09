import { useDispatch } from 'react-redux'
import voteMovie from '../features/movies/movieSlice'

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
                {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul> */}
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">Votos: <span className='text-warning'>{ movie.vote_count }</span></div>
                        <div className="col-md-6">
                            {/* <a href="#" className="card-link">Votar</a> */}
                            <button className='btn' onClick={() => dispatch(voteMovie(movie.id))}>
                                Votar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    <a href="#" className="card-link">Ver pelicula</a>
                </div>
            </div>
        </div>
    )
}

export default MovieItem