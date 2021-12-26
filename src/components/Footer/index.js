import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
    return (
        <div className="footer-container">
            <Link className="contactUs" to="/">
                Question? Contact us
            </Link>
            <div className="link-items">
                <NavLink className="item" to="/">
                    FAQ
                </NavLink>
                <NavLink className="item" to="/">
                    Help Center
                </NavLink>
                <NavLink className="item" to="/">
                    Account
                </NavLink>
                <NavLink className="item" to="/">
                    Media Center
                </NavLink>
                <NavLink className="item" to="/">
                    Investor Relations
                </NavLink>
                <NavLink className="item" to="/">
                    Jobs
                </NavLink>
                <NavLink className="item" to="/">
                    Ways to Watch
                </NavLink>
                <NavLink className="item" to="/">
                    Terms of Use
                </NavLink>
                <NavLink className="item" to="/">
                    Privacy
                </NavLink>
                <NavLink className="item" to="/">
                    Cookie Preferences
                </NavLink>
                <NavLink className="item" to="/">
                    Corporate Information
                </NavLink>
                <NavLink className="item" to="/">
                    Contact Us
                </NavLink>
                <NavLink className="item" to="/">
                    Speed Test
                </NavLink>
                <NavLink className="item" to="/">
                    Legal Notices
                </NavLink>
                <NavLink className="item" to="/">
                    Only on Netflix
                </NavLink>
            </div>
            <select
                className="languages"
                name="languages"
                id="select"
            >
                <option value="English">English</option>
                <option value="Vietnam">Tiếng Việt</option>
            </select>
            <span>Netflix Vn</span>
        </div>
    );
}

export default Footer;
