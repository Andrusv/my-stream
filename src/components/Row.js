import React, { useState, useEffect } from 'react'
import axios from '../utils/axios';
import Youtube from "react-youtube";
import './style/Row.css';

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // Options for react-youtube
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
        autoplay: 1,
        },
    };

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

    const handleClick = async (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          let trailerurl = await axios.get(
            `/movie/${movie.id}/videos?api_key=c121868d8c4caf942c8541fb65b5ecb8`
          );
          setTrailerUrl(trailerurl.data.results[0]?.key);
        }
    };

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
                        alt={movie.name}
                        key={movie.id}
                        onClick={() => handleClick(movie)}>
                    </img>
                    )
                )}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;