import { Header } from './components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { About } from './views/About';
import { MovieDetail } from './views/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
