import "./MovieCard.css";
import { Link } from "react-router-dom";

export default function MovieCard({ posterURL, id }) {
    return (
        <Link to={`/filmes/${id}`}>
            <div className="movie-card">
                <img src={posterURL} alt="Poster do filme" />
            </div>
        </Link>
    );
}