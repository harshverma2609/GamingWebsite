
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Game3() {
  return (
    <div>
      <Header />
      <h2 id="gameHeading">Gerard's Gambit</h2>
      <div class="game-iframe">
        <iframe
          src="https://asccw.playngonetwork.com/casino/ContainerLauncher?pid=2&amp;gid=gerardsgambit&amp;lang=en_GB&amp;practice=1&amp;channel=desktop&amp;demo=2"
          height="450"
          width="100%"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Game3;
