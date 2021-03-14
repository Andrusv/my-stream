import React, { useState, useEffect } from 'react'
import axios from './axios';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(async () => {
        async function fetchData() {

            const request = await axios.get(fetchUrl);

            return request;
        }

        fetchData();
        /* If the [] (Second param of the function 'useEffect') is empty, the useEffect is going to load only once.
        Instead of having a variable like 'movies', that will change constantly, every time that variable changes, the function useEffect will load. */
    }, []);
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row;