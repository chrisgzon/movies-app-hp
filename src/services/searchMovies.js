const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getMovies = async (title, year = "", type = "", page = 1) => {
  const url = `${BASE_URL}?s=${title}&y=${year}&type=${type}&page=${page}&apikey=${API_KEY}`;

  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson;
};
