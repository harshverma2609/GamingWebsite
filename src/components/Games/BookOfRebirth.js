
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Game18() {
  return (
    <div>
      <Header />
      <h2 id="gameHeading">Book of Rebirth</h2>
      <div class="game-iframe">
        <iframe
          src="https://spinomenal.com/book-of-rebirth/"
          height="500"
          width="100%"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Game18;
