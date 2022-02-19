import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import NotFound from "./components/NotFound";
import Account from "./pages/account/account";
import Home from "./pages/home";
import Landing from "./pages/landing/index";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/account" element={<Account />} />
                {/* <Route path="/*" element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default App;
