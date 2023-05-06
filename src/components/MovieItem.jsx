import { useDispatch } from 'react-redux'

const MovieItem = ({ movie }) => {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/w500'
    const dispatch = useDispatch()

    return (
        <div className="col-md-4">
            <div className="card text-white bg-warning mb-3">
                <img className="card-img-top" src={ URL_IMAGE + movie.backdrop_path } alt="Card image cap" />
                <div className="card-header">{ movie.title }</div>
                <div className="card-body">
                    {/* <h4 className="card-title">Warning card title</h4> */}
                    <p className="card-text">{ movie.overview }</p>
                </div>
            </div>
        </div>
    )
}

export default MovieItem