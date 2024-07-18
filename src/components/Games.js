
import React from "react";
import { useNavigate } from "react-router-dom";

function Games(){
    const navigate=useNavigate();
    const game1=()=>{
        navigate('/Luchamigos');
    };
    const game2=()=>{
        navigate('/CaptainGlum');
    };
    const game3=()=>{
        navigate('/GerardGambit');
    };
    const game4=()=>{
        navigate('/RoninHonour');
    };
    const game5=()=>{
        navigate('/Slashimi');
    };
    const game6=()=>{
        navigate('/PilgrimOfDead');
    };
    const game7=()=>{
        navigate('/WildBandolier');
    };
    const game8=()=>{
        navigate('/MoonPrincessTrinity');
    };
    const game9=()=>{
        navigate('/PandoraBoxOfEvil');
    };
    const game10=()=>{
        navigate('/ColtLightning');
    };
    const game11=()=>{
        navigate('/LegionGold');
    };
    const game12=()=>{
        navigate('/LegacyOfInca');
    };
    const game13=()=>{
        navigate('/4Horsemen');
    };
    const game14=()=>{
        navigate('/IrrishTreasures');
    };
    const game15=()=>{
        navigate('/GoWild');
    };
    const game16=()=>{
        navigate('/GoldOfMaya');
    };
    const game17=()=>{
        navigate('/CrazyMonkeyMobile');
    };
    const game18=()=>{
        navigate('/BookOfRebirth');
    };

    return(
        <div id="Games">
            <h2>LATEST GAMES</h2>
            <div className="gameContainer">
                <div className="card">
                    <a onClick={game1} >
                        <img src={require('./images/games/1.jpg')} alt="game 1" />
                        <p>LUCHAMIGOS</p>
                    </a>
                </div>
                <div className="card up">
                    <a onClick={game2} >
                        <img src={require('./images/games/2.jpg')} alt="game 2" />
                        <p>CAPTAIN GLUM</p>
                    </a>
                </div>
                <div className="card">
                    <a onClick={game3} >
                        <img src={require('./images/games/3.jpg')} alt="game 3" />
                        <p>GERARD'S GAMBIT</p>
                    </a>
                </div>
                <div className="card up">
                    <a onClick={game4} >
                        <img src={require('./images/games/4.jpg')} alt="game 4" />
                        <p>RONIN'S HONOUR</p>
                    </a>
                </div>
                <div className="card">
                    <a onClick={game5} >
                        <img src={require('./images/games/5.jpg')} alt="game 5" />
                        <p>SLASHIMI</p>
                    </a>
                </div>
                <div className="card up">
                    <a onClick={game6} >
                        <img src={require('./images/games/6.jpg')} alt="game 6" />
                        <p>PILGRIM OF DEAD</p>
                    </a>
                </div>
                <div className="card">
                    <a onClick={game7} >
                        <img src={require('./images/games/7.jpg')} alt="game 7" />
                        <p>WILD BANDOLIER</p>
                    </a>
                </div>
                <div className="card up">
                    <a onClick={game8} >
                        <img src={require('./images/games/8.jpg')} alt="game 8" />
                        <p>MOON PRINCESS TRINITY</p>
                    </a>
                </div>
                <div className="card">
                    <a onClick={game9} >
                        <img src={require('./images/games/9.jpg')} alt="game 9" />
                        <p>PANDORA'S BOX OF EVIL</p>
                    </a>
                </div>
                <div className="card up">
                    <a onClick={game10} >
                        <img src={require('./images/games/10.jpg')} alt="game 10" />
                        <p>COLT LIGHTNING</p>
                    </a>
                </div>
                <div className="card">
                    <a onClick={game11} >
                        <img src={require('./images/games/11.jpg')} alt="game 11" />
                        <p>LEGION GOLD</p>
                    </a>
                </div>
                <div className="card up">
                    <a onClick={game12} >
                        <img src={require('./images/games/12.jpg')} alt="game 12" />
                        <p>LEGACY OF INCA</p>
                    </a>
                </div>
                <div className="card">
                    <a onClick={game13} >
                        <img src={require('./images/games/13.png')} alt="game 13" />
                        <p>4 HORSEMEN II</p>
                    </a>
                </div>
                <div className="card up">
                    <a onClick={game14} >
                        <img src={require('./images/games/14.png')} alt="game 14" />
                        <p>IRRISH TREASURES</p>
                    </a>
                </div>
                <div className="card">
                    <a onClick={game15} >
                        <img src={require('./images/games/15.jpg')} alt="game 15" />
                        <p>GO WILD</p>
                    </a>
                </div>
                <div className="card up">
                    <a onClick={game16} >
                        <img src={require('./images/games/16.jpg')} alt="game 16" />
                        <p>GOLD OF MAYA</p>
                    </a>
                </div>
                <div className="card">
                    <a onClick={game17} >
                        <img src={require('./images/games/17.jpg')} alt="game 17" />
                        <p>CRAZY MONKEY MOBILE</p>
                    </a>
                </div>
                <div className="card up">
                    <a onClick={game18} >
                        <img src={require('./images/games/18.png')} alt="game 18" />
                        <p>BOOK OF REBIRTH</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Games;
