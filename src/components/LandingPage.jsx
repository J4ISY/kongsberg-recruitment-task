import Header from "./template/Header.jsx";
import {AiOutlineSearch} from "react-icons/ai";
import {Link} from "react-router-dom";
import useGameData from "../helpers/apiGames.jsx";

function LandingPage() {

    const data = useGameData('https://free-to-play-games-database.p.rapidapi.com/api/games');

    return (
        <>
            <Header/>
            <main className="main">
                <form action="" className="search-games">
                    <label htmlFor="search-games-input"></label>
                    <input type="text" className='search-games-t' name="search-games-input" id="search-games-input"
                           placeholder='Search for games'/>
                    <button className='search-games-btn'><AiOutlineSearch/></button>
                </form>
                <div className="main-wrapper">
                    <div className="main-row">
                        {data.map((entry) => {
                            return (
                                <>
                                    <div className="single-game">
                                        <Link to='/'>
                                            <img src={entry.thumbnail || null} alt={entry.title}
                                                 className="single-game-img"/>
                                        </Link>
                                        <div className="single-game-content">
                                            <Link to='/' className="single-game-title">{entry.title}</Link>
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