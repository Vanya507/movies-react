import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";

const ActorInfoApi = () => {
  const { loading, request, error, clearError } = useHttp();
  const searchParams = new URLSearchParams(location.search);

  // console.log(searchParams.get("id"));

  const _apiActorInfo = `https://api.themoviedb.org/3/person/${searchParams.get(
  "id"
)}?language=en-US`;

  const [actor, setActor] = useState(null);
  const getActorInfo = async () => {
    try {
      const res = await request(_apiActorInfo);      
      // console.log(res);
      
      setActor(res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getActorInfo();
  }, []);

  return { loading, error, actor, clearError };
};

export default ActorInfoApi;