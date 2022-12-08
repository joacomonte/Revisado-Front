import { useState, useEffect } from 'react';
import axios from 'axios';

function UseFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {      
        axios.get(url)
        .then(res => {setData(res.data)})
        .catch(err => {setError('Error has ocurred: '+err)})
        .finally( () => setIsLoading(false))
    } ,500)
  }, [url])

  return { data,isLoading, error }
}

export default UseFetch;