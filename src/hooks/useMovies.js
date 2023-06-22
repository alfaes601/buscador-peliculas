import results from "../mocks/results.json";

export default function useMovies() {
  const movies = results.Search;
  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }));
  return mappedMovies;
}
