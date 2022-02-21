import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import {
    getUserById,
    createNewUser,
    getUserByNamePassword,
} from "api/users";

import InputField from "features/custom-fields/InputField";
import { FastField, Form, Formik } from "formik";

const Login = () => {
    const [clicked, setClicked] = useState();
    const [getUserId, setGetUserId] = useState();

    useEffect(() => {
        const getUser = async () => {
            setGetUserId(await getUserById());
        };

        getUser();
        return () => {};
    }, []);

    const onSignUpClickSlide = () => {
        setClicked(!clicked);
        console.log(getUserId);
    };

    return (
        <>
            <div className="form-container">
                <div className="form-structor">
                    <div
                        className={
                            !clicked ? "signup slide-up" : "signup "
                        }
                    >
                        <h2
                            className="form-title"
                            id="signup"
                            onClick={() => onSignUpClickSlide(clicked)}
                        >
                            <span>or</span>Sign up
                        </h2>
                        <div className="form-holder">
                            <input
                                type="text"
                                className="input"
                                placeholder="Username"
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                            />
                        </div>
                        {/* <button className="submit-btn"> */}
                        <div className="LinkDirect submit-btn">
                            Sign up
                        </div>
                        {/* </button> */}
                    </div>

                    <div className={!clicked ? "login" : "login slide-up"}>
                        <div className="center">
                            <h2
                                className="form-title"
                                id="login"
                                onClick={() => onSignUpClickSlide(clicked)}
                            >
                                <span>or</span>Log in
                            </h2>
                            <div className="form-holder">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Username"
                                />
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                />
                            </div>
                            <label className="forgot-password">
                                Forgot your password
                            </label>
                            <div
                                className="errorMessage"
                                style={{
                                    color: "red",
                                    fontSize: "14px",
                                }}
                            >
                                {/* {this.state.errMessage} */}
                            </div>
                            {/* <div */}
                            <Link
                                className="submit-btn loginbtn"
                                to="/account"
                            >
                                Login
                            </Link>
                            {/* </div> */}
                            <div className="social-login">
                                <h2>Or Login with</h2>

                                <div className="socials">
                                    <span className="social">Google</span>
                                    <span className="social">
                                        Facebook
                                    </span>
                                    <span className="social">Twitter</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
