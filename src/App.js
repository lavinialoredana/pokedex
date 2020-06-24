import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  const date = new Date().toLocaleDateString();
  function logWhenClicked() {
    console.log("Clicked!");
  }

  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;
