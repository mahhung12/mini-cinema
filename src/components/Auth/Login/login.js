import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import {
    getUserById,
    createNewUser,
    getUserByNamePassword,
} from "api/users";

const Login = () => {
    const [clicked, setClicked] = useState();
    const [getUserId, setGetUserId] = useState();

    //----------------Sign Up------------------
    const [signUpUsername, setSignUpUsername] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [formSignUp, setFormSignUp] = useState({});

    //---------------Sign In--------------------
    const [signInUsername, setSignInUsername] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const [formSignIn, setFormSignIn] = useState({});

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

    const useInput = ({ type, placeholder }) => {
        const [value, setValue] = useState("");
        const input = (
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type}
                className="input"
                placeholder={placeholder}
            />
        );
        return [value, input];
    };
    const [username, userInput] = useInput({
        type: "text",
        placeholder: "Username",
    });

    // Đang dừng ở Login - Lấys value input form sao cho hợp lý

    //Comming next from tomorrow

    //--------------------------Sign Up------------------------
    const handleOnChangeSignUpUsername = (e) => {
        e.preventDefault();
        setSignUpUsername(e.target.value);
    };

    const handleOnChangeSignUpEmail = (e) => {
        e.preventDefault();
        setSignUpEmail(e.target.value);
    };
    const handleOnChangeSignUpPassword = (e) => {
        e.preventDefault();
        setSignUpPassword(e.target.value);
    };

    //--------------------Sign In--------------------
    const handleOnChangeSignInUsername = (e) => {
        e.preventDefault();
        setSignInUsername(e.target.value);
        console.log(signInUsername);
    };

    const handleOnChangeSignInPassword = (e) => {
        e.preventDefault();
        console.log(signInPassword);
        setSignInPassword(e.target.value);
    };

    //-----------------Handle-SignUp-----------
    const handleSignUp = async () => {
        setClicked(!clicked);
        setFormSignUp({
            username: signUpUsername,
            password: signUpPassword,
            email: signUpEmail,
        });

        await createNewUser(formSignUp);
    };

    //--------------------Handle Login--------------
    const handleSignIn = async () => {
        setFormSignIn({
            username: signInUsername,
            password: signInPassword,
        });

        // console.log(formSignIn);
        const user = await getUserByNamePassword(formSignIn);
        console.log("user after login data: " + user);
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
                                value={signUpUsername}
                                onChange={(e) =>
                                    handleOnChangeSignUpUsername(e)
                                }
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Email"
                                value={signUpEmail}
                                onChange={(e) =>
                                    handleOnChangeSignUpEmail(e)
                                }
                            />
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                value={signUpPassword}
                                onChange={(e) =>
                                    handleOnChangeSignUpPassword(e)
                                }
                            />
                        </div>
                        {/* <button className="submit-btn"> */}
                        <div
                            className="LinkDirect submit-btn"
                            onClick={() => handleSignUp(clicked)}
                        >
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
                                {useInput({
                                    type: "text",
                                    placeholder: "Username",
                                })}

                                {/* {useInput({
                                    type: "text",
                                    placeholder: "Password",
                                })} */}
                                {/* <input
                                    type="text"
                                    className="input"
                                    placeholder="Username"
                                    value={signInUsername}
                                    onChange={(e) =>
                                        handleOnChangeSignInUsername(e)
                                    }
                                /> */}
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    value={signInPassword}
                                    onChange={(e) =>
                                        handleOnChangeSignInPassword(e)
                                    }
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
                            <div
                                // <div
                                className="submit-btn loginbtn"
                                to="/account"
                                onClick={() => {
                                    handleSignIn();
                                }}
                            >
                                Login
                                {/* </Link> */}
                            </div>

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
