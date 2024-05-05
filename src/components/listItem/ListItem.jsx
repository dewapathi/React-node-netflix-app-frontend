import React, { useEffect, useState } from 'react'
import "../listItem/listItem.scss";
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(true);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("movies/find/" + item);
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getMovie();
    }, [item]);

    if (!movie) return null;

    return (
        <Link to="/watch" state={movie}  >
            <div
                className='listItem'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            >
                <img src={movie.img} alt="" />
                {isHovered && (
                    <>
                        <div className="videoWrapper">
                            <iframe
                                title={movie.title}
                                src={movie.trailer}
                                frameborder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            ></iframe>
                        </div>
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className='icon' />
                                <Add className='icon' />
                                <ThumbUpAltOutlined className='icon' />
                                <ThumbDownAltOutlined className='icon' />
                            </div>
                            <div className="itemInfoTop">
                                <span>1 hour 14 mins</span>
                                <span className='limit'>{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">
                                {movie.desc}
                            </div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </ Link>
    )
};
