import { useEffect, useState } from 'react';

function useFetch({ url }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, {
      signal: abortCont.signal,
    })
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setError('');
      })
      .catch((err) => {
        setError(err.message);
      });

    // abort the fetch. 완료되기 전에 DOM 요청 중단
    return () => abortCont.abort();
  }, [url]);

  return [data, setData, error];
}

export default useFetch;
