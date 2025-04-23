import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContexts";

function MovieCard({ movie }) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const fav = isFavorite(movie.id)

    
    function onFavouriteClick(e) {
        e.preventDefault()
        if (fav) removeFromFavorites(movie.id)
        else addToFavorites(movie)

    }

    return <div className="movie-card">
        <div className="movie-poster">
            
            <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_self" rel="noopener noreferrer">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </a>
            <div className="movie-overlay">
                <button className={`favorite-btn ${fav ? "active" : ""}`}
                    onClick={onFavouriteClick}>
                    ♥
                </button>

            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}
            </p>
        </div>
    </div>
}

export default MovieCard;
