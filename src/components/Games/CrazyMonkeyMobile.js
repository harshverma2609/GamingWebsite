
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Game17() {
  return (
    <div>
      <Header />
      <h2 id="gameHeading">Crazy Monkey Mobile</h2>
      <div class="game-iframe">
        <iframe
          src="https://free-slots.games/greenslots/crazymonkey/index.php"
          height="500"
          width="100%"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Game17;
