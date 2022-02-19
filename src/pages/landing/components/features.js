import React from "react";
import { Link } from "react-router-dom";

// Import image + video for animation
import tv from "../../../assests/imgs/tv.png";
import video from "../../../assests/imgs/video-tv-0819.m4v";

import mobile from "../../../assests/imgs/mobile-0819.png";
import boxshot from "../../../assests/imgs/boxshot.png";
import kids from "../../../assests/imgs/kids.png";
import vn from "../../../assests/imgs/vn.png";

function features() {
    return (
        // Sáng mai là chỉnh font-size text based on responsive (sửa hết r up github)
        <div className="features-container border-bottom">
            <div className="card border-bottom">
                <div className="text-wrap">
                    <h1 className="title">Enjoy on your TV.</h1>
                    <h2 className="des">
                        Watch on Smart TVs, Playstation, Xbox, Chromecast,
                        Apple TV, Blu-ray players, and more.
                    </h2>
                </div>
                <div className="animation-wrap">
                    <div className="section-wrap">
                        <img src={tv} alt="video-png" srcSet="" />
                        <div className="video-wrap">
                            <video
                                src={video}
                                alt="video"
                                autoPlay={true}
                                controls
                                srcSet=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-bottom">
                <div className="animation-wrap">
                    <div className="section-wrap">
                        <img src={mobile} alt="mobile" srcSet="" />
                        <div className="boxshot-wrap">
                            <img src={boxshot} alt="box-shot" srcSet="" />
                            <div className="text-boxshot">
                                <h1 className="title">Stanger things</h1>
                                <h3 className="des">Downloading....</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-wrap">
                    <h1 className="title">
                        Download your shows to watch offline.
                    </h1>
                    <h2 className="des">
                        Save your favorites easily and always have
                        something to watch.
                    </h2>
                </div>
            </div>
            <div className="card border-bottom">
                <div className="text-wrap">
                    <h1 className="title">Watch everywhere.</h1>
                    <h2 className="des">
                        Stream unlimited movies and TV shows on your phone,
                        tablet, laptop, and TV.
                    </h2>
                </div>
                <div className="animation-wrap">
                    {/* <img src="/" alt="" srcSet="" /> */}
                    {/* <div className="video-wrap"> */}
                    {/* <video src="" alt="" srcSet="" /> */}
                    {/* </div> */}
                </div>
            </div>
            <div className="card border-bottom">
                <div className="animation-wrap">
                    <img src={kids} alt="kids" srcSet="" />
                </div>
                <div className="text-wrap">
                    <h1 className="title">Create profiles for kids.</h1>
                    <h2 className="des">
                        Send kids on adventures with their favorite
                        characters in a space made just for them—free with
                        your membership.
                    </h2>
                </div>
            </div>
            <div className="card border-bottom">
                <div className="text-wrap">
                    <h1 className="title">
                        Have an Android Phone? Get our new free plan!
                    </h1>
                    <h2 className="des">
                        Watch a selection of new movies and TV shows
                        without adding any payment details!
                    </h2>
                    <Link className="getapp" to="/">
                        Get the app {">"}
                    </Link>
                </div>
                <div className="animation-wrap">
                    <img src={vn} alt="Vn-app" srcSet="" />
                </div>
            </div>
        </div>
    );
}

export default features;
