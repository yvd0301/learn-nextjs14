import { API_URL } from "../app/(home)/page";

import potato from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
    console.log(`Fetching movies: ${Date.now()}`);

    const response = await fetch(`${API_URL}/${id}`);

    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);

    return (
        <div className={potato.container}>
            <img
                src={movie.poster_path}
                className={potato.poster}
                alt={movie.title}
            />

            <div className={potato.info}>
                <h1 className={potato.title}>{movie.title}</h1>
                <h3>★{movie.vote_average.toFixed(2)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>
                    Homepage &rarr;
                </a>
            </div>
        </div>
    );
}
