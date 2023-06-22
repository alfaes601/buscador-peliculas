
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

  const movies = useMovies();
  const { titulo, setTitulo, error } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titulo)
  }

  const handleOnChange = (e) => {
    setTitulo(e.target.value);
  }

  return (
    <div className='page'>
      <header>
        <form action="" onSubmit={handleSubmit}>
          <input onChange={handleOnChange} value={titulo} name="titulo" placeholder='Avengers, Avatar ...' />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>Resultado:</div>
        <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App
