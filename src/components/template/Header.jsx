import {Link} from "react-router-dom";
import React, {useState} from "react";

function Header() {

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
                                <Link to='' className='dropdown-item'>Element 1</Link>
                                <Link to='' className='dropdown-item'>Element 2</Link>
                                <Link to='' className='dropdown-item'>Element 3</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;