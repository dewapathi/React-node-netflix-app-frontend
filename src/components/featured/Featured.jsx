import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import "../featured/featured.scss";
import axios from 'axios';

export default function Featured({ type, setGenre }) {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`movies/random?type=${type}`,
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjkzNzY0ZDdhMzRlYjI0ZjE0OGM4ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNDg4NDg4NywiZXhwIjoxNzE1MzE2ODg3fQ.PBgVRi3h5a-GdDm6fQSkt2z1l-FFfqIj0aNLFaJh9wI"
                        }
                    }
                );
                setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomContent();
    }, [type]);

    return (
        <div className='featured'>
            {type && (
                <div className='category'>
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={e=> setGenre(e.target.value)}>
                        <option value="">Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentery">Documentery</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt="" />
            <div className="info">
                <img src={content.imgSm} alt="" />
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
};
