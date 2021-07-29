
import {useState, useEffect} from 'react';

const useFetch = (url) => {


    const [data, setData] = useState(null);

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController();
        //can't use async inside this but can externalize the async method if you want
        // fetch('http://localhost:8000/blogs')
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(data => {
        //         //we finally have the data smh
        //         console.log(data);
        //         setBlogs(data); //will this cause an infinite loop?
        //         setIsPending(false);
        //     })
        setTimeout(() => {
            // fetch('http://localhost:8000/blogss')
            fetch(url, { signal: abortCont.signal })
                .then(response => {
                    // console.log(response);
                    if(!response.ok) {
                        throw Error('could not fetch data for that resource')
                    }
                    return response.json();
                })
                .then(data => {
                    //we finally have the data smh
                    console.log(data);
                    setData(data); //will this cause an infinite loop?
                    setIsPending(false);
                })
                .catch(err => {
                    // console.log(err.message);
                    if (err.name === 'AbortError') {
                        console.log("fetch aborted");
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                });
        }, 1000)
        return () => abortCont.abort(); 
    }, []); 
    return { data, isPending, error }
}

export default useFetch;