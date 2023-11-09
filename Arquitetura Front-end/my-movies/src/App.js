import { Header } from './components/Header';
import { MovieList } from './components/MovieList';
import { MoviesContainer } from './styles/MoviesContainer';

function App() {
  return (
    <div className="App">
      <Header />

      <MoviesContainer>
        <MovieList movies={[]} />
      </MoviesContainer>
    </div>
  );
}

export default App;
