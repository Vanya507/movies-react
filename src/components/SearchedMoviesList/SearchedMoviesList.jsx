import { useLocation, Link } from "react-router-dom";

import SearchMovieApi from "../../api/SearchMoviesApi";

import NotFoundImg from "../../assets/notFound.svg";

import dayjs from "dayjs";


import "./SearchedMoviesList.scss";

function SearchedMoviesList() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search");

  const { loading, error, movies } = SearchMovieApi(query);

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <section className="movie-results">
      <ul className="movie-results__list">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <li className="movie-results__item" key={movie.id}>
              <Link to={`/movieInfoAndCast?id=${movie.id}`}>
                {movie.poster_path ? (
                  <img
                    className="movie-results__img"
                    src={`https://media.themoviedb.org/t/p/w94_and_h141_face${movie.poster_path}`}
                  />
                ) : (
                  <img
                    className="movie-results__img"
                    src={NotFoundImg}
                    alt="Not Found"
                    style={{
                      width: "70px",
                      height: "119px",
                      backgroundColor: "#bababa",
                      padding: "11px 12px",
                    }}
                  />
                )}
              </Link>
              <div className="movie-results__container">
                <Link to={`/movieInfoAndCast?id=${movie.id}`}>
                  <h3 className="movie-results__title">{movie.title}</h3>
                </Link>
                <h4 className="movie-results__release">
                  {movie.release_date
                    ? dayjs(movie.release_date).format("MMM DD, YYYY")
                    : null}
                </h4>
                
              </div>
            </li>
          ))
        ) : (
          <div>No movies found</div>
        )}
      </ul>
    </section>
  );
}

export default SearchedMoviesList;
