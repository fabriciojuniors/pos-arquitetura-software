import { Header } from './components/Header';
import { MovieList } from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />

      <section>
        <MovieList movies={[]} />
      </section>
    </div>
  );
}

export default App;
