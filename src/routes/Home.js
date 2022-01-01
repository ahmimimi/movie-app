import Movie from "../component/Movie";
import { useEffect, useState } from "react";

export default function Home() {
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const getMovies = async() => {
    const json = await (
      await fetch(`https://api.themoviedb.org/4/list/3?page=1&api_key=672a577226c1acb755bb1f08558b6944`)
    ).json();
    setMovies(json.results);
    console.log(json.results);
  };

  const getGenres = async() => {
    const json = await (
      await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=672a577226c1acb755bb1f08558b6944&language=en-US`)
    ).json();
    
    setGenres(json.genres);
    //console.log(json.genres);
  };

  useEffect(() => {
    getMovies();
    getGenres();
    setLoading(false);
  }, []);

    return (
        <div>
          {loading ? <h1>Loading...</h1> : 
          <div>
            {movies.map(movie => 
              <Movie 
                key={movie.id}
                id={movie.id}
                posterPath={movie.poster_path} 
                title={movie.title} 
                overview={movie.overview} 
                genreIds={movie.genre_ids} 
                genres={genres}
              />
              )}
          </div>
          }
        </div>
      );
}