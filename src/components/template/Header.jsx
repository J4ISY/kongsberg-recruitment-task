import {Link} from "react-router-dom";
import React, {useState} from "react";

function Header() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div className="header-wrapper">
                    <Link to='/'><img src="src/assets/images/logo.png" alt="xbox controller" className="header-logo"/></Link>
                    <nav className="header-nav">
                        <Link to='/' className="header-link">Main page</Link>
                        <span
                            onClick={() => {setOpen(!open)}}
                            className="dropdown-btn"
                        >Browse category</span>
                        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                            <ul>
                                <li className='dropdown-items'>
                                    <Link to='/' className="dropdown-item">Shooting</Link>
                                    <Link to='/' className="dropdown-item">MMORPG</Link>
                                    <Link to='/' className="dropdown-item">Fighting</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;