import { useDispatch } from 'react-redux'

const MovieItem = ({ movie }) => {

    const dispatch = useDispatch()

    return (
        <div className="card text-white bg-warning mb-3" style="max-width: 20rem;">
            <div className="card-header">{ movie.title }</div>
            <div className="card-body">
                <h4 className="card-title">Warning card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            </div>
        </div>
    )
}

export default MovieItem