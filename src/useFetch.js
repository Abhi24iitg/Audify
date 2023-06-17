import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Sorry Could not fetch the data!!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setisPending(false);
        setError(null);
      })
      .catch((err) => {
        setisPending(false);
        setError(err.message);
      });
  }, [url]);
  return {data,setData,isPending,error}
};

export default useFetch;
