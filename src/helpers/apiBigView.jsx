import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

function useBigView() {

    const [data, setData] = useState(null);
    const { postId } = useParams();

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${postId}`

    useEffect(() => {
        async function fetchBigView() {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '1d6ce4a9c9msh109797109f8c49cp1bb5ecjsneffd7b998d9c',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error(error);
            }
        }

        fetchBigView();
    }, [postId]);

    return data;
}

export default useBigView;
