import PopularMovies from "../PopularMovies/PopularMovies";
import MainTitle from "../MainTitle/MainTitle";
import PopularMovieApi from "../../api/PopularMoviesAPi";

function MainPage() {
  const { loading, error, movies } = PopularMovieApi();

  return (
    <>
      <MainTitle />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && movies && <PopularMovies movies={movies} />}
    </>
  );
}

export default MainPage;










