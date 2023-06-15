import { useEffect, useState } from 'react';

function useGameData(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchGames() {
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

        fetchGames();
    }, []);

    return data;
}

export default useGameData;
