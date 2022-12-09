import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchWithCancel(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(true);
    let source = axios.CancelToken.source();
  
    useEffect(() => {
      axios.get(url, { cancelToken: source.token })
        .then(response => {
          // setTimeout(() => {
            // Delay the execution of this code by 1000ms (1 second)
            setData(response.data);
            setIsLoading(false)
          // }, 1000);
        })
        .catch(error => {
            setIsLoading(false)
            if (!axios.isCancel(error)) {
              console.log("has been an error"+error);
              setError("error"+error);
            }
        })

      return () => {
        source.cancel();
        console.log('has been canceled')
      };
    }, [url]);
  
    return {data, isLoading, error};
  }
export default useFetchWithCancel;