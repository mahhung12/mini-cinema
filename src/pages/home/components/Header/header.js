import "boxicons";
import React from "react";
import { Link } from "react-router-dom";
import netflixLogo from "../../../../assests/imgs/netflix.png";
import "./header.scss";

function Header() {
    return (
        <div className="header-fixed">
            <div className="header-container">
                <div className="left-items">
                    <Link to="/" className="left-items__logo">
                        <img
                            className="netflix-logo"
                            src={netflixLogo}
                            alt="netflix-logo"
                            srcSet=""
                        />
                    </Link>
                    <div className="left-items__items">
                        <Link to="/" className="item">
                            Home
                        </Link>
                        <Link to="/" className="item">
                            TV Shows
                        </Link>
                        <Link to="/" className="item">
                            Movies
                        </Link>
                        <Link to="/" className="item">
                            New & Popular
                        </Link>
                        <Link to="/" className="item">
                            My List
                        </Link>
                    </div>
                </div>

                <div className="right-items">
                    <div className="btn-func">
                        <div className="btn-func__search">
                            <box-icon name="search"></box-icon>
                        </div>
                        <div className="btn-func__notifications">
                            <box-icon name="bell"></box-icon>
                        </div>
                    </div>
                    <div className="account-hover">
                        <div className="account-hover__img">
                            <Link to="/account">
                                <img
                                    className="account-alt"
                                    src={netflixLogo}
                                    alt="user-Logo"
                                    srcSet=""
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
