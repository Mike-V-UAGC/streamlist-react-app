import { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../api';

const MovieSearch = () => {
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem('movies');
    if (!saved) return [];
    try {
      return JSON.parse(saved);
    } catch (e) {
      localStorage.removeItem('movies');
      return [];
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    const result = await searchMovies(term);
    setMovies(result.results);
    localStorage.setItem('movies', JSON.stringify(result.results));
  };

  return (
    <div>
      <h2>Movie Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={term}
          onChange={e => setTerm(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
