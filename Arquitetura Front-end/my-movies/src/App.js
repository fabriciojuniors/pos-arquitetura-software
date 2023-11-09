import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { MovieList } from './components/MovieList';
import { MoviesContainer } from './styles/MoviesContainer';
import { MoviesService } from './api/MoviesService';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data } = await MoviesService.getMovies();
    setMovies(data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header />

      <MoviesContainer>
        <MovieList movies={movies} />
      </MoviesContainer>
    </div>
  );
}

export default App;
