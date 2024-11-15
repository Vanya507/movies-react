/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";

const MovieInfoApi = () => {
  const { loading, request, error, clearError } = useHttp();
  const searchParams = new URLSearchParams(location.search);

  // console.log(searchParams.get("id"));

  const _apiMovieInfo = `https://api.themoviedb.org/3/movie/${searchParams.get(
    "id"
  )}?language=en-US`;

  const [movies, setMovies] = useState(null);
  const getMovieInfo = async () => {
    try {
      const res = await request(_apiMovieInfo);      

      setMovies(res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovieInfo();
  }, []);

  return { loading, error, movies, clearError };
};

export default MovieInfoApi;
