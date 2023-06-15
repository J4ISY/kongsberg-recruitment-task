import { useEffect, useState } from 'react';

function useCategories(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
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
                // Set is deleting duplicates creating a new array w unique "game genre"
                const genres = [...new Set(result.map((game) => game.genre))];
                setData(genres);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCategories();
    }, []);

    return data;
}

export default useCategories;
