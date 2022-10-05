import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = ()=> {

    return(
        <main className="container" id="container1">
            <img className="image" src={process.env.PUBLIC_URL+"images/image_1.svg"} />

            <div className="text-container">
                <h1 className="one">Imagine if</h1>
                <h1 className="two">Snapchat</h1>
                <h1 className="three">had events</h1>

                <p className="text">
                    Easily host and share events wth your friends<br />
                    across any social media
                </p>

                <Link to="/create" className="btn d-none d-md-block">
                    Create event
                </Link>
            </div> 

            <Link to="/create" className="btn sm-btn d-block d-md-none">
                    Create event
            </Link>

        </main>
    );
}

export default HomeComponent;