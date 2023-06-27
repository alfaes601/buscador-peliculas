
import { useRef, useState } from 'react';
import './App.css'
import Movies from './components/Movies';
import useMovies from './hooks/useMovies';
import { useEffect } from 'react';

function useSearch() {

  const [titulo, setTitulo] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {

    if (isFirstInput.current) {
      isFirstInput.current = titulo === ''
      return;
    }

    if (titulo.length <= 3) {
      setError("Consulta mayor a 3 caracteres")
      return;
    }

    setError(null);

  }, [titulo]);

  return { titulo, setTitulo, error }
}
function App() {

  const { titulo, setTitulo, error } = useSearch();
  const [sort, setSort] = useState(false);
  const {movies, loading, getMovies} = useMovies({titulo, sort});

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  }

  const handleOnChange = (e) => {
    setTitulo(e.target.value);
  }

  const handleSort = () => {
    setSort(!sort);
  }

  return (
    <div className='page'>
      <header>
        <form action="" onSubmit={handleSubmit}>
          <input onChange={handleOnChange} value={titulo} name="titulo" placeholder='Avengers, Avatar ...' />
          <button>Buscar</button>
          <input onClick={handleSort} type='checkbox'/>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <div>Resultado:</div>
        {
          loading ? <p>Cargando ... </p> : 
          <Movies movies={movies} />
        }
      </main>

    </div>
  )
}

export default App
