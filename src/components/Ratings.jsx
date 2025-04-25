import "../css/Ratings.css";
import { useMovieContext } from "../contexts/MovieContexts";

const Ratings = ({ movie }) => {
    const normalizedValue = Math.min(Math.max(0, movie.vote_average), 10);
    const percentage = ((normalizedValue / 10) * 100);

    const getColorFromValue = (value) => {
        if (value <= 5) {
            return `hsl(0, 80%, 45%)`; // Default color for movies with rating <= 5
        }
        const hue = Math.round(((value - 5) / 5) * 120);
        return `hsl(${hue}, 80%, 45%)`;
    };

    return (
        <div className="movie-ratings">
            <div
                className="ratings-circle"
                style={{
                    background: `conic-gradient(#4d94ff ${percentage}%, #e6e6e6 ${percentage}% 100%)`
                }}
            >
                <div
                    className="ratings-circle-inner"
                    style={{
                        background: `${getColorFromValue(normalizedValue)}`
                    }}>
                    <span className="ratings-value">{normalizedValue.toFixed(1)}</span>
                </div>
            </div>
        </div >
    );
};


export default Ratings;


