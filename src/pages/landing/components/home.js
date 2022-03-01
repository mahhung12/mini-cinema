import React from "react";
import { Link } from "react-router-dom";
import BackGroundImg from "../../../assests/imgs/home-bg.png";
import netflix from "../../../assests/imgs/netflix.png";
import Email from "../../../components/EmailAddress";

function Home() {
    return (
        <div className="home-container border-bottom">
            <img
                className="bg-img"
                src={BackGroundImg}
                alt="background-img"
                srcSet=""
            />
            <div className="home-container__top-items">
                <Link to="/" className="img-cover">
                    <img src={netflix} alt="netflix-logo" srcSet="" />
                </Link>

                <div className="btn-func">
                    <select className="languages">
                        <option value="us">English</option>
                        <option value="fr">France</option>
                        <option value="vn">Vietnam</option>
                    </select>

                    <Link to="/login" className="button">
                        Login
                    </Link>
                </div>
            </div>
            <div className="home-container__center-items">
                <h1 className="title">
                    Unlimited movies, TV shows, and more.
                </h1>
                <span className="text">
                    Watch anywhere. Cancel anytime.
                </span>

                <Email />
            </div>
        </div>
    );
}

export default Home;
