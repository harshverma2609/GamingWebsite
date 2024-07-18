
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Game15() {
  return (
    <div>
      <Header />
      <h2 id="gameHeading">Go Wild</h2>
      <div class="game-iframe">
        <iframe
          src="https://games.gamzix.com/game.php?gid=1005&host=a1.gamzix.com&port=8090&client=desktop&lang=en&home=http%3A%2F%2Fgamzix.com%2F&sid=zlyaeugbiz"
          height="500"
          width="100%"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Game15;
