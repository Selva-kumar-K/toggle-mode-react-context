import { useEffect, useState } from "react";

export const useFetchData = (userId) => {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  useEffect(() => {
    // const controller = new AbortController();
    fetch(`${url}`)
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url]);

  return { data, error, loading };
};
