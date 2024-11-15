import ActorInfoApi from "../../api/ActorInfoApi";
// import { Link } from "react-router-dom";

function ActorInfo() {
  const { error, actor } = ActorInfoApi();

  if (error) return <div>Error: {error}</div>;

  return (
    <section className="actor-info">
      <img
        src={`https://media.themoviedb.org/t/p/w300_and_h450_face${actor?.profile_path}`}
        alt="Actor Photo"
      />
      <h1>{actor?.name}</h1>
      <p>{actor?.biography}</p>
    </section>
  );
}

export default ActorInfo;
