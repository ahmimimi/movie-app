import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Movie({ id, posterPath, title, overview, genreIds, genres}) {
  return (
    <div>
            <img src={'https://image.tmdb.org/t/p/w300/' + posterPath} alt={title}></img>
            <h2>
              <Link to={`/movie/${id}`}>{title}</Link>
              </h2>
            <p>{overview}</p>
            <ul>
              {genreIds.map(id => 
              <li key={id}>
                {genres.map(g => id === g.id ? g.name : null)}
              </li>
              )}
            </ul>
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
