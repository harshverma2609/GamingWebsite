
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Game14() {
  return (
    <div>
      <Header />
      <h2 id="gameHeading">Irrish Treasures</h2>
      <div class="game-iframe">
        <iframe
          src="https://spinomenal.com/irish-treasures/"
          height="500"
          width="100%"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Game14;
