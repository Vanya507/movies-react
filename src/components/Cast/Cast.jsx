import { Link } from "react-router-dom";
import CastApi from "../../api/CastApi";
import "./cast.scss";

function Cast() {
  const { error, cast } = CastApi();

  if (error) return <div>Error: {error}</div>;

  const limitedCast = cast ? cast.slice(0, 9) : [];

  return (
    <section className="cast">
      <ul className="cast__list">
        {limitedCast.length > 0
          ? limitedCast.map((item) => (
              <li className="cast__item" key={item.id}>
                <Link to={`/actorInfo?id=${item.id}`}>
                  <img
                    className="cast__img"
                    src={`https://media.themoviedb.org/t/p/w138_and_h175_face/${item.profile_path}`}
                    alt={item.name}
                  />
                </Link>
                <h3 className="cast__name">{item.name}</h3>
                <h5 className="cast__character">{item.character}</h5>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
}

export default Cast;
