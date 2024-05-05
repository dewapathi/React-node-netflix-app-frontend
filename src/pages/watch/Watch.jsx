import React from 'react'
import "./watch.scss"
import { ArrowBackIosNewOutlined } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'

export default function Watch() {
    const location = useLocation();
    const movie = location.state;

    return (
        <div className='watch'>
            <Link to="/">
                <div className="back">
                    <ArrowBackIosNewOutlined />
                    Home
                </div>
            </Link>
            {/* <video
                className='video'
                autoPlay
                progress
                controls
                src='https://player.vimeo.com/video/936116540?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            /> */}
            <iframe
                className='video'
                title="Furious 7 - Official Trailer (HD)"
                src={movie.video}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            // style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
        </div>
    )
};
