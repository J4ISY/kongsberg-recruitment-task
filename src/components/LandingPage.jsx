import Header from "./template/Header.jsx";
import {AiOutlineSearch} from "react-icons/ai";
import {Link} from "react-router-dom";

function LandingPage() {
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
                        <div className="single-game">
                            <Link to='/'>
                                <img src="https://via.placeholder.com/350x500" alt="game photo"
                                     className="single-game-img"/>
                            </Link>
                            <div className="single-game-content">
                                <Link to='/' className="single-game-title">Game Title</Link>
                                <p className="single-game-shortdesc">Game Short Desc</p>
                                <span className="single-game-gamegenre">Genre</span>
                            </div>
                        </div>
                        <div className="single-game">
                            <Link to='/'>
                                <img src="https://via.placeholder.com/350x500" alt="game photo"
                                     className="single-game-img"/>
                            </Link>
                            <div className="single-game-content">
                                <Link to='/' className="single-game-title">Game Title</Link>
                                <p className="single-game-shortdesc">Game Short Desc</p>
                                <span className="single-game-gamegenre">Genre</span>
                            </div>
                        </div>
                        <div className="single-game">
                            <Link to='/'>
                                <img src="https://via.placeholder.com/350x500" alt="game photo"
                                     className="single-game-img"/>
                            </Link>
                            <div className="single-game-content">
                                <Link to='/' className="single-game-title">Game Title</Link>
                                <p className="single-game-shortdesc">Game Short Desc</p>
                                <span className="single-game-gamegenre">Genre</span>
                            </div>
                        </div>
                        <div className="single-game">
                            <Link to='/'>
                                <img src="https://via.placeholder.com/350x500" alt="game photo"
                                     className="single-game-img"/>
                            </Link>
                            <div className="single-game-content">
                                <Link to='/' className="single-game-title">Game Title</Link>
                                <p className="single-game-shortdesc">Game Short Desc</p>
                                <span className="single-game-gamegenre">Genre</span>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </>
    );
}

export default LandingPage;