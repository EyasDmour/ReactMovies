import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContexts";
import MovieCard from "../components/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return <div className="favorites">
        <h2>Favorite Movies</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
  } else {
    return <div className="favorites-empty">
        <h1 className="favorites-empty-title">No Favorite Movies</h1>
        <p className="favorites-empty-text">
          You have not added any movies to your favorites yet.
        </p>
      </div>
  }
}

export default Favorite;
