import React, { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "components/Auth/AuthProvider/authProvider";

import {
    getUserById,
    createNewUser,
    getUserByNamePassword,
} from "api/users";
import "./signin.scss";

const Login = () => {
    const { setAuth } = useContext(AuthContext);

    const [clicked, setClicked] = useState();
    const [getUserId, setGetUserId] = useState();
    const [success, setSuccess] = useState(false);

    const userRef = useRef();

    const [SignUpForm, setSignUpForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [SignInForm, setSignInForm] = useState({
        username: "",
        password: "",
    });

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

    const handleSignUpClick = async (bool) => {
        setClicked(!clicked);

        if (bool) {
            //Call API here
            console.log("true");

            await createNewUser(SignUpForm);

            setSignUpForm({
                username: "",
                email: "",
                password: "",
            });
        }
    };

    const handleSignInClick = async () => {
        const userCheck = await getUserByNamePassword(SignInForm);

        if (userCheck) {
            setSuccess(true);

            userCheck.map((user) => {
                // console.log("All list: " + user);
                console.log("All list: " + user[Object.keys(user)[0]]);
                return console.log(user);

                // if (
                //     user.username === SignInForm.username &&
                //     user.password === SignInForm.password
                // ) {
                //     return {
                //         user: user.username,
                //         pass: user.password,
                //     };
                // } else {
                //     return alert(
                //         "data just contains your keyword, but not exist"
                //     );
                // }
            });
        } else {
            alert("user not exist");
        }
        setSignInForm({
            username: "",
            password: "",
        });
    };

    const handleOnChangeSignUpForm = (e, id) => {
        let copyForm = { ...SignUpForm };
        copyForm[id] = e.target.value;
        setSignUpForm({
            ...copyForm,
        });
    };

    const handleOnChangeSignInForm = (e, id) => {
        let copyForm = { ...SignInForm };
        copyForm[id] = e.target.value;
        setSignInForm({
            ...copyForm,
        });
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
                            onClick={() => handleSignUpClick(false)}
                        >
                            <span>or</span>Sign up
                        </h2>

                        <div className="form-holder">
                            <input
                                type="text"
                                className="input"
                                placeholder="Username"
                                value={SignUpForm.username}
                                onChange={(e) =>
                                    handleOnChangeSignUpForm(e, "username")
                                }
                                ref={userRef}
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Email"
                                value={SignUpForm.email}
                                onChange={(e) =>
                                    handleOnChangeSignUpForm(e, "email")
                                }
                            />
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                value={SignUpForm.password}
                                onChange={(e) =>
                                    handleOnChangeSignUpForm(e, "password")
                                }
                            />
                        </div>
                        <div
                            className="LinkDirect submit-btn"
                            onClick={() => handleSignUpClick(true)}
                        >
                            Sign up
                        </div>
                    </div>

                    <div className={!clicked ? "login" : "login slide-up"}>
                        <div className="center">
                            <h2
                                className="form-title"
                                onClick={() => onSignUpClickSlide(clicked)}
                            >
                                <span>or</span>
                                Log in
                            </h2>
                            <div className="form-holder">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Username"
                                    value={SignInForm.username}
                                    onChange={(e) =>
                                        handleOnChangeSignInForm(
                                            e,
                                            "username"
                                        )
                                    }
                                    ref={userRef}
                                />
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    value={SignInForm.password}
                                    onChange={(e) =>
                                        handleOnChangeSignInForm(
                                            e,
                                            "password"
                                        )
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
                            {/* <Link */}
                            {/* to="/account" */}
                            <div
                                className="submit-btn loginbtn"
                                onClick={() => handleSignInClick()}
                            >
                                Login
                            </div>
                            {/* </Link> */}
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
