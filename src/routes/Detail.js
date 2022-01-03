import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [images, setImages] = useState([]);
    const [genres, setGenres] = useState([]);
    const url = "/movie/" + id;

    const getMovies = async () => {
        const json = await (
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=672a577226c1acb755bb1f08558b6944`)
        ).json();
        setMovie(json);
        setGenres(json.genres);

        console.log(json);
        console.log(json.genres);
    };

    const getImages = async () => {
        const json = await (
            await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=672a577226c1acb755bb1f08558b6944`)
        ).json();
        setImages(json.backdrops);
    };

    useEffect(() => {
        getMovies();
        getImages();
        //getGenres();
    }, []);

    return (
        <div className="d-flex h-100 text-center text-white bg-dark" data-new-gr-c-s-check-loaded="14.1043.0" data-gr-ext-installed="">
            <div className="cover-container d-flex w-100 mx-auto flex-column bg-dark">
                <div id="postSlide" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner opacity-75">
                        {images.map((image) => (
                            images[0] == image ?
                                (
                                    <div className="carousel-item active">
                                        <img className="img-fluid  d-block w-100" src={`https://image.tmdb.org/t/p/w1280${image.file_path}`}
                                            alt={image.file_path} key={image.file_path}>
                                        </img>
                                    </div>
                                ) : (
                                    <div className="carousel-item">
                                        <img className="img-fluid  d-block w-100" src={`https://image.tmdb.org/t/p/w1280${image.file_path}`}
                                            alt={image.file_path} key={image.file_path}>
                                        </img>
                                    </div>
                                )
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#postSlide" data-bs-slide="prev" style={{left:"-2rem"}}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#postSlide" data-bs-slide="next" style={{right:"-2rem"}}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="position-absolute ps-5" style={{ textAlign: "left", top: "35%", left: "5%" }}>
                    <div className="col-md-7 ms-5">
                        <div>
                            <h1 className="fs-1 mb-1">
                                {movie.original_title}
                                <span className="badge rounded-pill ms-2 bg-primary" style={{ fontSize: "14px" }}>
                                    <i className="bi bi-star-fill me-1 "></i>
                                    {movie.vote_average}
                                </span>
                            </h1>
                            <h5 className="mb-0">{movie.tagline}</h5>
                            <div className="d-flex w-100 justify-content-start mt-3">
                                <p className="fs-6 me-3">
                                    {movie.release_date}
                                </p>
                                <p className="fs-6">
                                    {movie.runtime}min
                                </p>
                            </div>
                        </div>

                        <p className="lead opacity-75">
                            {movie.overview}
                        </p>
                        <ul className="ps-0">
                            {genres.map((genre) => (
                                <li key={genre.id} className="badge rounded-pill bg-light text-dark me-1 opacity-75">
                                    {genre.name}
                                </li>
                            )
                            )}
                        </ul>
                        <p className="lead pt-1">
                            <a href={movie.homepage} className="btn btn-outline-dark fw-bold border-white text-light">
                                Learn more
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}