import React from "react";
//Contact page with links to my LinkedIn, Github, Twitter and emails
function Contact() {

    return (
        <div className="homeBackground">
            <h1 className="contact">Follow Me</h1>
            <p className="contactText">
                If you want to follow me click on the link
            </p>
            <span className="buttonGroup">
                <a href="https://www.youtube.com/@bjkd/videos">
                    <i className="followMe fa fa-brands fa-youtube"></i></a>
                    <a href="https://www.tiktok.com/@bjkd2002"><img className="tiktok" src={require('../../assets/images/tik-tok.png')} alt="" /></a>
            </span>
        </div>
    )
}

export default Contact;