import { MovieItem } from "./MovieItem"

export const MovieList = ({ movies }) => (
    <section>
        <ul>
            {movies.map(m => <MovieItem title={m.title} key={m.title} />)}
        </ul>
    </section>
);