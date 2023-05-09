import { useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  async function fetchData(url, category) {
    setIsLoading(true);
    setData([]);
    try {
      const response = await fetch(`${url}${category}`);
      if (!response.ok) {
        throw new Error('data unavailable, please try again');
      }
      const responseData = await response.json();
      setData(responseData);
      setIsLoading(false);
      setErr(null);
    } catch (err) {
      setErr(err.message);
    }
  }

  return { fetchData, data, isLoading, err };
};

export default useFetch;