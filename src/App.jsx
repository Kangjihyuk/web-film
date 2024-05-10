import { useEffect, useState } from "react";
import "./App.css";
import {getMovieList,searchMovie} from './api'

function App() {

  const [popularMovies,setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const baseImgUrl = "https://image.tmdb.org/t/p/w500"
  
const PopularMovieList = () => {
  return popularMovies.map((movie, i) => {
    return (
      <div className="Movie-wrapper" key={i}>
        <div className="Movie-title">{movie.title}</div>
        <img className="Movie_image" src={`${baseImgUrl}/${movie.poster_path}`} />
        <div className="Movie-date">release : {movie.release_date}</div>
        <div className="Movie-rate">{movie.vote_average}</div>
      </div>
    );
  });
};

  const search = async (r) => {
  if (r.length > 3) {
    const movieSearch = await searchMovie(r)
    setPopularMovies(movieSearch.results)
  }
};

return ( // Assuming this is placed within a React component's render function
  <>
    <div className="App">
      <header className="App-header">
        <h1>Movie online</h1>
        <input
          type="text"
          placeholder="search"
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  </>
);
}

export default App;
