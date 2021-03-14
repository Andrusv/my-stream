import React, { useEffect, useState } from 'react';
import axious from '../utils/axios';
import requests from '../utils/requests';
import './style/Banner.css';

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect( () => {
        async function fetchData() {
            const request = await axious.get(
                requests.fetchTrending
            )

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }

        fetchData();
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backdropPosition: "center center",
            }}
        >
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie?.name || movie?.original_name || movie?.title}
                </h1>

                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>

                <h1 className='banner__description'>
                    {truncate(movie?.overview, 200)}
                </h1>
            </div>
            <div className='banner__fadeBottom'></div>
        </header>
    )
}

export default Banner;