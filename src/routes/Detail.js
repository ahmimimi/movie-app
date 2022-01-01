import { useEffect } from "react";
import { useParams } from "react-router";
export default function Detail() {
    const { id } = useParams();
    
    const getMovies = async () => {
        console.log(id)
        const json = await (
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=672a577226c1acb755bb1f08558b6944`)
        ).json();
        console.log(json);
    };

    useEffect(() => {
        getMovies();
    },[]);

    return (
    <h1>{id}</h1>
    );
}