
import './App.css'
import results from "./mocks/results.json";
import noresults from "./mocks/no-results.json";

function App() {

  const movies = results.Search;
  const hasMovies = movies?.length > 0;

  const handleSubmit = (e) => {

  }
  return (
    <div className='page'>
      <header>
        <form className="form" action="" onSubmit={handleSubmit}>
          <input name="titulo" placeholder='Avengers, Avatar ...' />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        <div>Resultado:</div>
        {hasMovies ? (
          <ul>
            {
              movies.map(movie => (
                <li key={movie.imdbID}>{movie.Title}
                  <img src={movie.Poster} alt="img-movie" />
                </li>
              ))
            }
          </ul>
        ) :
          (<p>No hay peliculas</p>)}
      </main>

    </div>
  )
}

export default App
