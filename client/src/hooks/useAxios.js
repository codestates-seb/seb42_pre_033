import { useEffect, useState } from 'react';
import axios from 'axios';

function useAxios({ method = 'get', url, headers, body, auth, params }) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState();
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios({
      headers: headers,
      method: method,
      url: url,
      data: body,
      auth: auth,
      params: params,
    })
      .then((response) => {
        console.log(response);

        if (response.status !== 200) {
          // error coming back from server
          throw Error('could not fetch the data for that resource');
        }

        setStatus(response.status);
        setData(response.data);
        setError('');
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx

          setStatus(error.response.status);
          setData(error.response.data);
          setError(error.message);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        setloading(false);
      });
  }, [url]);

  return [data, loading, status, error];
}

export default useAxios;
