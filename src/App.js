import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import NotFound from "./components/NotFound";
import Account from "./pages/account/account";
import Home from "./pages/home";
import Landing from "./pages/landing/index";
import Login from "./components/Auth/Login/login";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </div>
    );
}

export default App;
