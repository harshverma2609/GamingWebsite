
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "./App";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndCondition from "./components/TermsAndCondition";
import CookiePolicy from "./components/CookiePolicy";
import ScrollToTop from './components/ScrollToTop';

import Game1 from './components/Games/Luchamigos';
import Game2 from './components/Games/CaptainGlum';
import Game3 from './components/Games/GerardGambit';
import Game4 from './components/Games/RoninHonour';
import Game5 from './components/Games/Slashimi';
import Game6 from './components/Games/PilgrimOfDead';
import Game7 from './components/Games/WildBandolier';
import Game8 from './components/Games/MoonPrincessTrinity';
import Game9 from './components/Games/PandoraBoxOfEvil';
import Game10 from './components/Games/ColtLightning';
import Game11 from './components/Games/LegionGold';
import Game12 from './components/Games/LegacyOfInca';

import Game13 from './components/Games/4Horsemen';
import Game14 from './components/Games/IrrishTreasures';
import Game15 from './components/Games/GoWild';
import Game16 from './components/Games/GoldOfMaya';
import Game17 from './components/Games/CrazyMonkeyMobile';
import Game18 from './components/Games/BookOfRebirth';

import CasinoPage from './Casino Page/CasinoPage';

import ContactUs from './components/ContactUs';

function Main() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
        <Route path='/TC' element={<TermsAndCondition/>} />
        <Route path='/CookiePolicy' element={<CookiePolicy/>} />

        <Route path='/Luchamigos' element={<Game1/>} />
        <Route path='/CaptainGlum' element={<Game2/>} />
        <Route path='/GerardGambit' element={<Game3/>} />
        <Route path='/RoninHonour' element={<Game4/>} />
        <Route path='/Slashimi' element={<Game5/>} />
        <Route path='/PilgrimOfDead' element={<Game6/>} />
        <Route path='/WildBandolier' element={<Game7/>} />
        <Route path='/MoonPrincessTrinity' element={<Game8/>} />
        <Route path='/PandoraBoxOfEvil' element={<Game9/>} />
        <Route path='/ColtLightning' element={<Game10/>} />
        <Route path='/LegionGold' element={<Game11/>} />
        <Route path='/LegacyOfInca' element={<Game12/>} />
        
        <Route path='/4Horsemen' element={<Game13/>} />
        <Route path='/IrrishTreasures' element={<Game14/>} />
        <Route path='/GoWild' element={<Game15/>} />
        <Route path='/GoldOfMaya' element={<Game16/>} />
        <Route path='/CrazyMonkeyMobile' element={<Game17/>} />
        <Route path='/BookOfRebirth' element={<Game18/>} />

        <Route path='/CasinoPage' element={<CasinoPage/>} />

        <Route path='/ContactUs' element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
