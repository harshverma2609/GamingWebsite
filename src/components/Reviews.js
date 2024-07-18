
import React from "react";
import data from "./happyPlayers.json";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Reviews(){
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '30px',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                centerPadding: '40px'
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  centerPadding: '0px'
                }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                centerPadding: '100px'
              }
            }
        ]    
    };
      
    return(
        <div className="feedback">
            <h2>CHECK OUT THE <br/> RECENT GAMERS <br/> FROM OUR GAMES</h2>
            <div className="gamersGrid">
                <div className="gamePlayed">
                    <h4>Nishant Joshi</h4>
                    <p>Recently Played <br/> LEGION GOLD</p>
                </div>
                <div className="gamePlayed">
                    <h4>Nirmal Rama</h4>
                    <p>Recently Played <br/> WILD BANDOLIER</p>
                </div>
                <div className="gamePlayed">
                    <h4>Amar Gopal</h4>
                    <p>Recently Played <br/> COLT LIGHTNING</p>
                </div>
                <div className="gamePlayed">
                    <h4>Nishant Toor</h4>
                    <p>Recently Played <br/> SLASHMI</p>
                </div>
            </div>
            <div className="happyPlayer">
                <p>
                    EXPLORE
                    <br/>
                    OUR
                    <br/>            
                    GAMES
                </p>
                <a href="#Games"><button>PLAY GAMES</button></a>
            </div>
            <h2>OUR HAPPY PLAYERS</h2>
            <Slider {...settings}>
                {data.map((review, index)=>(
                    <div key={index} className="review">
                        <h3>{review.name}</h3>
                        <p>{review.experience}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Reviews;
