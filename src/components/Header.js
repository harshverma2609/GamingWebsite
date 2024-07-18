
import React from "react";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate=useNavigate();
    const mainPage=()=>{
        navigate("/");
    };
    const contactPage=()=>{
        navigate("/ContactUs");
    };

    return(
        <header>
            <a href="#Games"><img src={require('./images/STARS-FROST.png')} alt="Site Logo" /></a>
            <div className="links">
                <a onClick={mainPage} href="#Home"><p>Home</p></a>
                <a onClick={mainPage} href="#About"><p>About Us</p></a>
                <a onClick={mainPage} href="#Games"><p>Exclusive Games</p></a>
                <a onClick={contactPage} ><p>Contact Us</p></a>
            </div>
        </header>
    );
}

export default Header;