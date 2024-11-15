import { useState, useCallback } from "react";
import axios from "axios";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2I3MmUyNjRiZmRlMGVlMzkzNjY5NjQ4YzljYThhNSIsInN1YiI6IjVlZjQ5ZTIyYmNjZjFlMDAzNzM4NThmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ayZEv5_yIcHQ8MlpHvW6N54uBDoSz7XsnHGEHLUzack",
    }) => {
      setLoading(true);

      try {
        const response = await axios({
          url,
          method,
          data: body,
          headers,
        });

        setLoading(false);
        return response.data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};

