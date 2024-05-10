import axios from 'axios'

const baseUrl = "https://api.themoviedb.org/3"
const apiKey = "85283bf69143bd5f1984845f6eb12c03";

export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page1&api_key=${apiKey}`)
    console.log({ movieList: movie })
    return movie.data.results
}


export const searchMovie = async (r)=> {
    const search = await axios.get(`${baseUrl}/search/movie?query=${r}&page=1&api_key=${apiKey}`)
    return search.data
}