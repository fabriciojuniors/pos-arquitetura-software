import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    const fetchMovie = async () => {
        const { data } = await MoviesService.getMovieById(id);
        setMovie(data);
      }
    
      useEffect(() => {
        fetchMovie();
      }, []);

    return (
        <>
            <h1>{movie.title}</h1>
            <article>
                {movie.overview}
            </article>
        </>
    )
}