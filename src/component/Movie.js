import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

export default function Movie({ id, posterPath, title, releaseDate, overview, genreIds, genres }) {
  return (
    <div className={styles.card}>
      <div className={styles.movie}>
        <Link to={`/movie/${id}`}>
          <img className={styles.movie__img}
            src={'https://image.tmdb.org/t/p/w300/' + posterPath}
            alt={title}>
          </img>
        </Link>
        <div className="styles.movie__top">
          <h2 className={styles.movie__title}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <ul className={styles.movie__genres}>
            {genreIds.map(id =>
              <li key={id} className="badge rounded-pill bg-primary">
                {genres.map(g => id === g.id ? g.name : null)}
              </li>
            )}
          </ul>
        </div>
        <h3 className={styles.movie__year}>{releaseDate}</h3>
        <p>{overview.length > 235 ? `${overview.slice(0, 235)}...` : overview}</p>
      </div>
    </div>
  )
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genreIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  genres: PropTypes.array.isRequired
};
