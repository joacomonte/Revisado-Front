import { useState } from 'react';
import axios from 'axios';

function UsePost(url) 
{
    const [response, setRespose] = useState(null);
    const [error, setError] = useState(true);
    
    const fetchData = async (values) => 
    {
        console.log('esta data se va a enviar: ',values)
        try 
        {
            console.log(values)
            const res = await axios.post(url,values)
            setRespose(res.data)
            console.log('la respuesta fue: ',res.data)
        } 
        catch (err){
            setError(err)
            console.log(err)
            console.log('error, pero la data enviada fue ',err)
        }
    }

    return {response,error,fetchData}
}
export default UsePost;


