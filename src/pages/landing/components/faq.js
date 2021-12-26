import React from "react";

function faq() {
    return (
        <div className="faq-container faq">
            <h1 className="title">Frequently Asked Questions</h1>
            <div className="questions">
                <div className="question">
                    <details className="details">
                        <summary>What is netflix?</summary>
                        <p className="text">
                            Netflix is a streaming service that
                            offers a wide variety of
                            award-winning TV shows, movies,
                            anime, documentaries, and more on
                            thousands of internet-connected
                            devices.
                        </p>
                    </details>
                </div>
                <div className="question">
                    <details className="details">
                        <summary>
                            How much does Netflix cost?
                        </summary>
                        <p className="text">
                            Watch Netflix on your smartphone,
                            tablet, Smart TV, laptop, or
                            streaming device, all for one fixed
                            monthly fee. Plans range from 70,000
                            ₫ to 260,000 ₫ a month. No extra
                            costs, no contracts.
                        </p>
                    </details>
                </div>
                <div className="question">
                    <details className="details">
                        <summary>Where can I watch?</summary>
                        <p className="text">
                            You can also download your favorite
                            shows with the iOS, Android, or
                            Windows 10 app. Use downloads to
                            watch while you're on the go and
                            without an internet connection. Take
                            Netflix with you anywhere.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
}

export default faq;
