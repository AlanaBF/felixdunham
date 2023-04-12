import React from "react";
import Card from 'react-bootstrap/Card';


// Card htat gives an image of the project, the name and a description and the deployed link

function VideoCard({ videos }) {
    const { name, videoLink } = videos

    return (

        <Card className="card" >
            <div className="card-image-position">
                <Card.Title className="cardBodyText">{name}</Card.Title>
                <Card.Body className="cardBodyText" >
                    <div class="iframecontainer">
                        <iframe className="responsive-iframe" src={videoLink} title="YouTube video player" ></iframe>
                    </div>
                </Card.Body>
            </div>
        </Card>
    );
}

export default VideoCard;