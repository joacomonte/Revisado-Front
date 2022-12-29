import { useState, useEffect } from 'react';
import axios from 'axios';

function UsePost(url,data) 
{
    const [response, setRespose] = useState(null);
    const [error, setError] = useState(true);
    
    const fetchData = async () => 
    {
        try 
        {
            const res = await axios.post(url,data)
            setRespose(res.data)
            console.log(res)
        } 
        catch (err){setError(err)}
    }

    return {response,error, fetchData}
}
export default UsePost;


