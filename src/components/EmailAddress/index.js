import React from "react";
import "./emailAddress.scss";

function EmailAddress() {
    return (
        <div className="emailAddress">
            <p className="small-text">
                Ready to watch? Enter your email to create or
                restart your membership.
            </p>
            <div className="form-email">
                <input type="text" placeholder="Email Address" />
                <button>Get Started</button>
            </div>
        </div>
    );
}

export default EmailAddress;
