import { useState, useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(true);
    console.log(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Movie Theater</h1>
      {!loading ? <h2>Loading...</h2> : <MovieList moviedata={movies} />}
    </div>
  );
}

function MovieList({ moviedata }) {
  return (
    <div>
      {moviedata.map((movie) => (
        <div key={movie.id}>
          <img src={movie.medium_cover_image} alt="" />;<h1>{movie.title}</h1>
          <ul>
            {movie.genres.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
          <p>✨ Rating : {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
