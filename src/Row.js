import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css'

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(async () => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);

            setMovies(request.data.results);
            return request;
        }

        fetchData();
        /* If the [] (Second param of the function 'useEffect') is empty, the useEffect is going to load only once.
        Instead of having a variable like 'movies', that will change constantly, every time that variable changes, the function useEffect will load. */
    }, [fetchUrl]);
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map( movie => (
                    <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${baseImgUrl}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                          }`}
                        alt={movie.name}>
                    </img>
                    )
                )}
            </div>
        </div>
    )
}

export default Row;