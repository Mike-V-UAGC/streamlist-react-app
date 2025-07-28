import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../api';

const MovieSearch = () => {
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // Load saved movies from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('movies');
      if (saved) {
        setMovies(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to parse saved movies:", e);
      localStorage.removeItem('movies');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!term.trim()) return;

    try {
      const result = await searchMovies(term);
      if (result?.results?.length) {
        setMovies(result.results);
        localStorage.setItem('movies', JSON.stringify(result.results));
        setError(null);
      } else {
        setMovies([]);
        setError('No movies found.');
      }
    } catch (err) {
      console.error("Search error:", err);
      setError('Failed to fetch movies. Please try again.');
    }
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              {movie.title ?? "Untitled Movie"}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;