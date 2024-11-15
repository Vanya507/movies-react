/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";

const CastApi = () => {
  const { loading, request, error, clearError } = useHttp();
  const searchParams = new URLSearchParams(location.search);

  // console.log(searchParams.get("id"));

  const _apiCast = `https://api.themoviedb.org/3/movie/${searchParams.get(
    "id"
  )}/credits?language=en-US`;

  const [cast, setCast] = useState(null);
  const getCastInfo = async () => {
    try {
      const res = await request(_apiCast);      

      setCast(res.cast);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCastInfo();
  }, []);

  return { loading, error, cast, clearError };
};

export default CastApi;