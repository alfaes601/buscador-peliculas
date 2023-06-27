const API_KEY = "da216029";

export const searchMovies = async ({ titulo }) => {
  if (!titulo) return null;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`
    );
    const json = await response.json();
    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
    }));
  } catch (e) {
    throw new Error("Error en el fetch de datos", e);
  }
};
