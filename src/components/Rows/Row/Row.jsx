import React, { useState, useEffect } from 'react';
import './row.css';
import axios from '../../../utils/axios';
import movieTrailer from "movie-trailer";
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(fetchUrl);
                setMovie(request.data.results);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        })();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl(''); // Close the video
        } else {
            // Try to find a movie trailer
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v')); // Get the video ID
                })
                .catch((error) => {
                    console.log('Error fetching trailer: ', error);
                    alert('Trailer not found!');
                });
        }
    };

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className='row'>
            <h4>{title}</h4>
            <div className='row__posters'>
                {movies?.map((movie, index) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={index}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        onError={(e) => (e.target.style.display = "none")} // Hide broken images
                    />
                ))}
            </div>
            <div style={{ padding: '40px' }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    );
};

export default Row;
