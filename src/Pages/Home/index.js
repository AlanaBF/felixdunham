import React from "react";
import "../../assets/style.css"
import GoogleSearch from "../../components/GoogleSearch";


//Home page
function Home() {
    return (
        <div className="homeBackground">
            <br />
            <div className="dinoGiphy">
                <iframe title="myFrame" className="giphyFrame" src="https://giphy.com/embed/iVqXV4vE4DDYk" allowFullScreen></iframe>
            </div>
            <h1 className="welcome">Welcome to me</h1>
            <h2 className="myname">Felix Dunham</h2>
            <img className="tankPic" src={require('../../assets/images/challenger2.png')} alt="" />
            <p className="text">I love taking photos and videos and editing them to make really cool content.</p>
            <div className="googlePosition">
                <GoogleSearch />
            </div>
        </div>
    )
}

export default Home