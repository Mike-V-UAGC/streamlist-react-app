import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(`movie-${id}`);
    if (stored) {
      setMovie(JSON.parse(stored));
    } else {
      getMovieDetails(id).then(data => {
        setMovie(data);
        localStorage.setItem(`movie-${id}`, JSON.stringify(data));
      });
    }
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          style={{ marginTop: "1em" }}
        />
      )}
    </div>
  );
};

export default MovieDetail;
