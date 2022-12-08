import './App.css';
import { Route,Routes} from "react-router-dom"
import Header from './components/Header/Header';
import Home from './Pages/Home/home';
import MovieList from './components/movieList/movieList';
import Movie from './Pages/Home/movieDetail/movie';
function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="movie/:id" element={<Movie/>} />
          <Route path="movies/:type" element={<MovieList/>} />
          <Route path='/*' element={<h1> Error page</h1>} />
        </Routes>
        
    </div>
  );
}

export default App;
