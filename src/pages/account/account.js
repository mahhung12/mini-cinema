import React from "react";
import { Link } from "react-router-dom";
import "./account.scss";
import netflix from "../../assests/imgs/netflix.png";

export default function account() {
    return (
        <div className="landing-container">
            <div className="wrap-logo">
                <Link to="/">
                    <img className="icon" src={netflix} alt="landing" />
                </Link>
            </div>
            <div className="landing-container__center">
                <span className="text">Who's watching?</span>
                <div className="members">
                    <Link to="/home" className="member">
                        <div className="avatar">
                            <img src={netflix} alt="avatar" srcSet="" />
                            <p className="name">Account 1</p>
                        </div>
                    </Link>
                    <Link to="/home" className="member">
                        <div className="avatar">
                            <img src={netflix} alt="avatar" srcSet="" />
                            <p className="name">Account 2</p>
                        </div>
                    </Link>
                    <Link to="/home" className="member">
                        <div className="avatar">
                            <img src={netflix} alt="avatar" srcSet="" />
                            <p className="name">Account 3</p>
                        </div>
                    </Link>
                    <Link to="/home" className="member">
                        <div className="avatar">
                            <img src={netflix} alt="avatar" srcSet="" />
                            <p className="name">Account 4</p>
                        </div>
                    </Link>
                    <Link to="/home" className="member">
                        <div className="avatar">
                            <img src={netflix} alt="avatar" srcSet="" />
                            <p className="name">Account 5</p>
                        </div>
                    </Link>
                </div>
                <div className="btn-manage">
                    <button>Manage profiles</button>
                </div>
            </div>
        </div>
    );
}
