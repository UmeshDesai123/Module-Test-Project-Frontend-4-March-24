import NavBar from "./navbar/navBar";
import { useState, useEffect } from "react";
import Home from "./home/home";
import { movies } from "./data/movies-list";
import { genres } from './data/genre';

const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if(filter !== 'all'){
      const filteredMovies = movies.filter((movie) => movie.genre === filter);
      setMoviesList(filteredMovies);
    }
    else {
      setMoviesList(movies);
    }
  }, [filter]);

  return(
    <div className="container">
      <NavBar filter={filter} setFilter={setFilter} genres={genres}></NavBar>
      <Home movies={moviesList}></Home>
    </div>
  )
}

export default App;