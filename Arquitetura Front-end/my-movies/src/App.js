import { Header } from './components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { About } from './views/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
