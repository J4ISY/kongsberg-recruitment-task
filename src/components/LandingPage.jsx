import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import useCategories from "../helpers/apiCategories.jsx";

function LandingPage() {

    const [data, setData] = useState(null);
    const [categoryGame, setCategoryGame] = useState('shooter');
    const [url, setUrl] = useState('https://free-to-play-games-database.p.rapidapi.com/api/games');

    const dataCategories = useCategories();

    // Games
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
    });


    return (
        <>
            <header className="header">
                <div className="header-wrapper">
                    <Link to='/'><img src="src/assets/images/logo.png" alt="xbox controller"
                                      className="header-logo"/></Link>
                    <nav className="header-nav">
                        <Link to="/" className="home-link">Main Page</Link>
                        <div className="dropdown">
                            <button className="home-link drop-btn">Game Genre<i className="arrow down"></i></button>
                            <div className="dropdown-content">
                                <button
                                    onClick={() => {
                                        setUrl('https://free-to-play-games-database.p.rapidapi.com/api/games');
                                    }}
                                    className='dropdown-item'
                                >All games</button>
                                {dataCategories.map((genre) => {
                                    return (
                                        <>
                                            <button
                                                onClick={() => {
                                                    setUrl(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryGame}`)
                                                    setCategoryGame(genre);
                                                    console.log('genre game ' + setCategoryGame);
                                                    if(genre === 'Action RPG' || genre === 'ARPG') {
                                                        setCategoryGame('action-rpg')
                                                    }
                                                    if(genre === 'MMORPG' || genre === 'MMOARPG') {
                                                        setCategoryGame('mmo')
                                                    }
                                                    if(genre === 'Card Game') {
                                                        setCategoryGame('card')
                                                    }
                                                    if(genre === 'Battle Royale') {
                                                        setCategoryGame('battle-royale')
                                                    }
                                                }}
                                                className='dropdown-item'
                                            >{genre}</button>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <main className="main">
                <form action="" className="search-games">
                    {/*<label htmlFor="search-games-input"></label>*/}
                    {/*<input*/}
                    {/*    value={gameName}*/}
                    {/*    onChange={handleInputChange}*/}
                    {/*    type="text" className='search-games-t' name="search-games-input" id="search-games-input"*/}
                    {/*       placeholder='Search for games'/>*/}
                    {/*<button*/}
                    {/*    onClick={handleSearchGame}*/}
                    {/*    className='search-games-btn'*/}
                    {/*><AiOutlineSearch/></button>*/}
                    {/*<Link*/}
                    {/*    to='/'*/}
                    {/*    type="submit"*/}
                    {/*    className="get-random-game"*/}
                    {/*>Try your luck!</Link>*/}
                </form>
                <div className="main-wrapper">
                    <div className="main-row">
                        {data && data.map((entry) => {
                            return (
                                <>
                                    <div className="single-game">
                                        <Link to={`/${entry.id}`}>
                                            <img src={entry.thumbnail || null} alt={entry.title}
                                                 className="single-game-img"/>
                                        </Link>
                                        <div className="single-game-content">
                                            <Link to={`/${entry.id}`} className="single-game-title">{entry.title}</Link>
                                            <p className="single-game-shortdesc">{entry.short_description}</p>
                                            <div className='genre-box'>
                                                <span className="single-game-gamegenre">{entry.genre}</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}

export default LandingPage;