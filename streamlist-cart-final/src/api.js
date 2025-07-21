const API_KEY = 'e984537342c9740ee5ed0dd4a1c40112';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  return response.json();
};

export const getMovieDetails = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  return response.json();
};
