
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Game11() {
  return (
    <div>
      <Header />
      <h2 id="gameHeading">LEGION GOLD</h2>
      <div class="game-iframe">
        <iframe
          src="https://asccw.playngonetwork.com/casino/ContainerLauncher?pid=2&gid=legiongold&lang=en_GB&practice=1&channel=desktop&demo=2"
          height="450"
          width="100%"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Game11;
