
function NoResults() {
    return (
        <p>No se encontraron resultados</p>
    )
}

function ListOfResults({ movies }) {

    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.image} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

export default function Movies({ movies }) {
    const hasMovies = movies?.length > 0;

    return (
        hasMovies ? <ListOfResults movies={movies} /> : <NoResults />
    )
}