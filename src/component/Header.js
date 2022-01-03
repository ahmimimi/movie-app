import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
      <div className="container-fluid">
        <Link className="navbar-brand" to={`/movie`} style={{marginLeft:"1rem"}}>Movie App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={`/movie`}>Home</Link>
            </li>
          </ul>
          <form>
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </div>
    </div>
  );
}