import { useEffect, useState } from 'react';

function useCategories() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': `${import.meta.env.VITE_API_SECRET}`,
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options);
                const result = await response.json();
                // Set is deleting duplicates creating a new array w unique "game genre"
                const genres = [...new Set(result.map((game) => game.genre.trim()))];
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
