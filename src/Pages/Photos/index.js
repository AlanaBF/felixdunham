import React from "react";
import "../../assets/style.css"
import SlideShow from "../../components/Carousel/index"


//Home page
function Photos() {
    return (
        <div className="homeBackground">
            <br/>
            <h1 className="myPhotos">My Photos</h1>
            <br/>
            <SlideShow/>
        </div>
    )
}

export default Photos