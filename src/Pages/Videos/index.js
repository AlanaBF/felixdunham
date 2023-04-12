import React from "react";
import "../../assets/style.css"
import VideoCard from "../../components/Gallery";
import videos from "../../components/Gallery/videos.json";


//Home page
function Videos() {
    return (
        <div className="homeBackground">
            <br />
            <h1 className="myVideosTitle">My Videos</h1>
            <br />
            <div className="intro">
                <h4>Videos I have made.</h4>
            </div>
            <div className="VideoCard">
                {videos.map(videos => <VideoCard key={videos.id} videos={videos} />)}
            </div>
            <div className="moreInfo">
                <h4>If you want to see more, click the link below and follow me </h4>
                <a href="https://www.youtube.com/@bjkd/videos">
                    <i className="seeMore fa fa-brands fa-youtube"></i>
                </a>
            </div>
        </div>
    )
}

export default Videos