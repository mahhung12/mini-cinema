import React from "react";
import Email from "../../components/EmailAddress";
import Footer from "../../components/Footer";
import FAQ from "./components/faq";
import Features from "./components/features";
import HomeFeatures from "./components/home";
import "./landing.scss";

function Landing() {
    return (
        <div className="landing-wrap">
            <HomeFeatures />
            <Features />
            <FAQ />
            <Email />
            <Footer />
        </div>
    );
}

export default Landing;
