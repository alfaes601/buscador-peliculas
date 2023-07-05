import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export default function useMovies({ titulo, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(titulo);

  const getMovies = useCallback(async ({ titulo }) => {
    //return async ({ titulo }) => {
    if (titulo === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = titulo;
      const movies = await searchMovies({ titulo });
      setMovies(movies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
    //};
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);
  return { movies: sortedMovies, loading, getMovies };
}
