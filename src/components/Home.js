import React from "react";

function Home(){
    return(
        <div id="Home">
            <div className="homeDetail">
                <h1>Play Best Social Casino Slot Games</h1>
                <h3>Unleash the gamer within you!</h3>
                <a href="#Games"><button>PLAY GAMES</button></a>
            </div>
            <div className="bannerImage">
                <img src={require('./images/game1.jpg')} alt="game 1" />
                <img id="game2" src={require('./images/game2.jpg')} alt="game 2" />
            </div>
        </div>
    );
}

export default Home;