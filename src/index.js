import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { AuthProvider } from "components/Auth/AuthProvider/authProvider";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

import { store } from "store/store";
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            {/* <Provider store={store}> */ }
            <Router>
                <App />
            </Router>
            {/* </Provider> */ }
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
