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
                    <iframe width="560" height="315" src={videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Card.Body>
            </div>
        </Card>
    );
}

export default VideoCard;