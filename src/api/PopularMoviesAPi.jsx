/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";

const PopularMovieApi = () => {
  
  const { loading, request, error, clearError } = useHttp();
  const [movies, setMovies] = useState([]);
  
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
  const getPopularMovies = async () => {
    try {
      const res = await request(apiUrl);
      setMovies(res.results);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (apiUrl) {
      console.log(`Fetching from: ${apiUrl}`);  
      getPopularMovies();
    }
  }, [apiUrl]);  

  return { loading, error, movies, clearError };
};

export default PopularMovieApi;







