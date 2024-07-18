
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Game13() {
  return (
    <div>
      <Header />
      <h2 id="gameHeading">4 Horsemen II</h2>
      <div class="game-iframe">
        <iframe
          src="https://spinomenal.com/4horsemen2/"
          height="500"
          width="100%"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Game13;
