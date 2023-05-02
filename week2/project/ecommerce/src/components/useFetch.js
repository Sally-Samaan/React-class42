import { useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  function fetchData(url, category) {
    setIsLoading(true);
    setData([]);
    fetch(`${url}${category}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data, please try again');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setErr(null);
      })
      .catch((err) => {
        return setErr(err.message);
      });
  }

  return { fetchData, data, isLoading, err };
};

export default useFetch;