import { MovieItem } from "./MovieItem"

export const MovieList = ({ movies }) => (
    <section>
        <ul>
            {movies.map(m => <MovieItem id={m.id} title={m.title} key={m.title} />)}
            {/* {movies.map(m => <MovieItem {...m} key={m.title} />)} */}
            {/* {movies.map(m => <MovieItem movie={m} key={m.title} />)} */}
        </ul>
    </section>
);