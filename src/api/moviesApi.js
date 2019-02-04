import axios from 'axios'

export const moviesApi = axios.create({
  baseURL: 'http://localhost:3000'
})

export const cancelSource = axios.CancelToken.source()

export const loadMovies = async (params, cancelToken) => {
  try {
    const { data } = await moviesApi.get('movies.json', { params, cancelToken })
    return data;
  } catch (error) {
    throw error;
  }
};