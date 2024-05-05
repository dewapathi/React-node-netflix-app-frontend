import React, { useEffect, useState } from 'react';
import "./home.scss";
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from "axios";

export default function Home({ type }) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type" : ""}${genre ? "&genre=" + genre : ""}`,
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjkzNzY0ZDdhMzRlYjI0ZjE0OGM4ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNDg4NDg4NywiZXhwIjoxNzE1MzE2ODg3fQ.PBgVRi3h5a-GdDm6fQSkt2z1l-FFfqIj0aNLFaJh9wI"
                        }
                    }
                );
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomLists();
    }, [type, genre]);

    return (
        <div className='home'>
            <Navbar />
            <Featured type={type} setGenre={setGenre} />
            {lists.map((list, i) => (
                <List key={i} list={list} />
            ))}
        </div>
    )
};
