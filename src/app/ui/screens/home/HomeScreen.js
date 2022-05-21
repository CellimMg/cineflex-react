import Screen from "../../commom/Screen";
import { useState, useEffect } from "react";
import axios from "axios";
import "./HomeScreen.css";
import MovieCard from "./components/MovieCard";

export default function HomeScreen() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            setMovies([...response.data]);
            console.log(response.data);
        });
        promise.catch(error => console.log(error));
    }, []);

    return (
        <Screen title={"Selecione o filme"}>
            <div className="movies-list">
                {movies.map(movie => <MovieCard posterURL={movie.posterURL} id={movie.id} key={movie.id} />)}
            </div>
        </Screen>
    );
}