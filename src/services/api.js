import axios from 'axios';

const API_KEY = '09d7a3eefc954f8342048cf5b31d1e79';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const response = await axios.get('/trending/movie/day', { params });
  return response.data;
};

export const fetchMoviesByName = async name => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
    query: name,
  };
  const response = await axios.get('search/movie', { params });
  return response.data;
};
