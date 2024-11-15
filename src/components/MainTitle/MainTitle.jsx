import "./MainTitle.scss";
import PopularMovieApi from "../../api/PopularMoviesAPi";
import SearchMovieInput from "../SearchMovieInput/SearchMovieInput";

function MainTitle() {
  const { error, movies } = PopularMovieApi();

  if (error) return <div>Error: {error}</div>;

  if (!movies || movies.length === 0) {
    return <img src="#" alt="Not found" style={{backgroundColor: 'grey', width: '1200px'}}/>
  }

  const randomMovieImg = movies[Math.floor(Math.random() * movies.length)];

  return (
    <section
      className="main-title-section"
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${randomMovieImg.backdrop_path})`,
      }}
    >
      <SearchMovieInput />
    </section>
  );
}

export default MainTitle;
