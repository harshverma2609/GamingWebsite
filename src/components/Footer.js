
import React from "react";
import { useNavigate } from "react-router-dom";

function Footer(){
    const navigate=useNavigate();
    const mainPage=()=>{
        navigate("/");
    };
    const PrivacyPolicy=()=>{
        navigate("/PrivacyPolicy");
    };
    const TC=()=>{
        navigate("/TC");
    };
    const CookiePolicy=()=>{
        navigate("/CookiePolicy");
    };
    const contactPage=()=>{
        navigate("/ContactUs");
    };

    return(
        <div>
            <div className="warning">
                <p id="red">18+</p>
                <p>Disclaimer: StarsFrost Content Disclaimer Please Read Carefully. This website and its contents are only meant for a mature audience of above 18 years old. StarsFrost is a free to play social casino gaming platform. StarsFrost does not offer any opportunity to win real money from its games. No Real Money can be spend or won from any of the games. We would like to remind players that practice and success on our website does not mean future success in the game is for real money.</p>
                <div className="footerLinks">
                    <a onClick={mainPage} href="#Home"><p>HOME</p></a>
                    <hr/>
                    <a onClick={PrivacyPolicy}><p>PRIVACY POLICY</p></a>
                    <hr/>
                    <a onClick={TC}><p>TERMS & CONDITIONS</p></a>
                    <hr/>
                    <a onClick={CookiePolicy}><p>COOKIE POLICY</p></a>
                    <hr/>
                    <a onClick={contactPage}><p>CONTACT US</p></a>
                </div>
            </div>
            <footer>
                © COPYRIGHT STARSFROST.COM | ALL RIGHTS RESERVED
            </footer>
        </div>
    );
}

export default Footer;
