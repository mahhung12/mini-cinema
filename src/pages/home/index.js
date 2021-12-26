import Footer from "components/Footer";
import React, { Suspense } from "react";

const Banner = React.lazy(() =>
    import("./components/Banner/banner")
);
const Header = React.lazy(() =>
    import("./components/Header/header")
);
const Lists = React.lazy(() =>
    import("./components/Lists/lists")
);

function Home() {
    return (
        <div>
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
