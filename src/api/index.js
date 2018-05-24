import { status, json } from '../utils';

const API_KEY = 'da9a74c438c0aec2e101b15f0c154ec4';

export const getPopular = () =>
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then(status)
    .then(json)
    .catch(console.error);