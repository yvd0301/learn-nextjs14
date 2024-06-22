import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
    title: "Home",
};

async function getMovies() {
    console.log("Im fetching");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function HomePage() {
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    );
}
