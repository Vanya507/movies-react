/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";

const SearchMovieApi = (query) => {
  const { loading, request, error, clearError } = useHttp();

  const _apiSearchMovie = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`;

  const [movies, setMovies] = useState(null);

  const getMovieInfo = async () => {
    try {
      const res = await request(_apiSearchMovie);
      // console.log(res);
      
      setMovies(res.results);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (query) {
      getMovieInfo();
    }
  }, [query]);

  return { loading, error, movies, clearError };
};

export default SearchMovieApi;


