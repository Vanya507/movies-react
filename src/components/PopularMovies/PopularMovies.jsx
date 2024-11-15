import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import PopularMovieApi from "../../api/PopularMoviesAPi";
import "../../styles/loading.scss";
import "./PopularMovies.scss";

const PopularMovies = () => {
  const { loading: apiLoading, error, movies} = PopularMovieApi();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [apiLoading]);

  if (error) return <div>Error: {error}</div>;

  if (!movies || movies.length === 0) {
    return <img src="#" alt="Not found" />;
  }

  const hasMovies = movies && movies.length > 0;

  return (
    <section className="popular-movies">
      <div className="popular-movies__scroll-container">    
        {loading || apiLoading ? (
          <ul className="popular-movies__list">
            {hasMovies
              ? movies.map((_, index) => (
                  <li
                    className="popular-movies__item loading__img pulse"
                    key={index}
                  >
                    <img className="popular-movies__img loading__img pulse" />
                  </li>
                ))
              : null}
          </ul>
        ) : hasMovies ? (
          <ul className="popular-movies__list">
            {movies.map((movie) => (
              <li className="popular-movies__item" key={movie.id}>
                <Link to={`/movieInfoAndCast?id=${movie.id}`}>
                  <img
                    className="popular-movies__img"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                    alt="Movie Poster"
                  />

                  <h3 className="popular-movies__title">{movie.title}</h3>
                </Link>

                <h4 className="popular-movies__release">
                  {dayjs(movie.release_date).format("MMM DD, YYYY")}
                </h4>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
};

export default PopularMovies;
