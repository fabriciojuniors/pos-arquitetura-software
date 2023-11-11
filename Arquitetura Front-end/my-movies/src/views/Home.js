import { useEffect, useState } from 'react';
import { MoviesContainer } from '../styles/MoviesContainer';
import { MovieList } from '../components/MovieList';
import { MoviesService } from '../api/MoviesService';

export const Home = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
      const { data } = await MoviesService.getMovies();
      setMovies(data.results);
    }
  
    useEffect(() => {
      fetchMovies();
    }, []);

    return (
        <MoviesContainer>
            <MovieList movies={movies} />
        </MoviesContainer>
    )
}