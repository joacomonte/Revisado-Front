import { useState, useEffect } from 'react';
import axios from 'axios';

function UsePost(url,data,start) 
{
    const [response, setRespose] = useState(null);
    const [error, setError] = useState(true);
    
  
    useEffect(() => 
    {
        if(start){
            const fetchData = async () => 
            {
                try 
                {
                    const res = await axios.post(url,data)
                    setRespose(res.data)
                } 
                catch (err){setError(err)}
            }
            fetchData();
        }
        

    }, [start])

  return {response,error}
}
export default UsePost;