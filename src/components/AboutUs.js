import React from "react";

function AboutUs(){
    return(
        <div id="About">
            <img src={require('./images/divider.png')} alt="divider" />
            <img src={require('./images/divider.png')} alt="divider" />
            <h2>THE TOP FREE SOCIAL GAMES</h2>
            <p>Our ultimate goal is for everyone who visits our site to be happy. We want you to enjoy yourself and have lots of fun while playing our games. If you’re smiling, we’re smiling. To make your experience at Stars Frost Slots as amusing and worthwhile as possible, we’ve put together a collection of games from only the very best software providers.</p>
            <p>All of our games are immersive, they’re designed with crisp, clear graphics, incredible sound effects, and features that take the gameplay to the next level. You will be met with overwhelming joy once you play with Stars Frost Games and experience the best in free social gaming.</p>
            <img id="divider" src={require('./images/divider.png')} alt="divider" />
            <img src={require('./images/divider.png')} alt="divider" />
        </div>
    );
}

export default AboutUs;