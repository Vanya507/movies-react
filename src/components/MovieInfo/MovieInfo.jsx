import MovieInfoApi from "../../api/MovieInfoApi";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

function MovieInfo() {
  const { error, movies } = MovieInfoApi();
  

  if (error) return <div>Error: {error}</div>;

  return (
    <section
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movies?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={`https://media.themoviedb.org/t/p/w300_and_h450_face${movies?.poster_path}`}
        alt="Poster"
      />
      <h2>{movies?.title}</h2>
      <h4>{dayjs.duration(movies?.runtime, "minutes").format("H[h] mm[m]")}</h4>
      <h4>{dayjs(movies?.release_date).format("DD/MM/YYYY")}</h4>
    </section>
  );
}

export default MovieInfo;
