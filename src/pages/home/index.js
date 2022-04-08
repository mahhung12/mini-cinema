import React, { useState, Suspense } from "react";
import Footer from "components/Footer";

import Login from "components/Auth/SignIn";

const Banner = React.lazy(() => import("./components/Banner/banner"));
const Header = React.lazy(() => import("./components/Header/header"));
const Lists = React.lazy(() => import("./components/Lists/lists"));

function Home() {
    const [token, setToken] = useState();

    // if (!token) {
    //     return <Login setToken={setToken} />;
    // }

    return (
        <div
            style={{ maxWidth: "2560px", width: "100%", margin: "0 auto" }}
        >
            <Suspense fallback={<div>Loading ...</div>}>
                <Header />
                <Banner />
                <Lists />
                <Footer />
            </Suspense>
        </div>
    );
}

export default Home;
