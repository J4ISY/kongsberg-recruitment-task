import {Link} from "react-router-dom";
import useCategories from "../../helpers/apiCategories.jsx";

function Header() {

    const data = useCategories('https://free-to-play-games-database.p.rapidapi.com/api/games')

    return (
        <>
            <header className="header">
                <div className="header-wrapper">
                    <Link to='/'><img src="src/assets/images/logo.png" alt="xbox controller"
                                      className="header-logo"/></Link>
                    <nav className="header-nav">
                            <Link to="/" className="home-link">Main Page</Link>
                        <div className="dropdown">
                            <button className="home-link drop-btn">Dropdown<i className="arrow down"></i></button>
                            <div className="dropdown-content">
                                {data.map((genre) => {
                                    return (
                                        <>
                                            <Link to='' className='dropdown-item'>{genre}</Link>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;