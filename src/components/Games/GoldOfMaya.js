
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Game16() {
  return (
    <div>
      <Header />
      <h2 id="gameHeading">Gold Of Maya</h2>
      <div class="game-iframe">
        <iframe
          src="https://games.gamzix.com/game.php?gid=1006&host=a1.gamzix.com&port=8090&client=desktop&lang=en&home=closePopup&sid=zlyaeugbiz"
          height="500"
          width="100%"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Game16;
