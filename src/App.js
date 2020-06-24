import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";



function App() {
  const abilities = [ "Anticipation", "Adaptability", "Run-away"];
  const date = new Date().toLocaleDateString();
  function logWhenClicked() {
    console.log("Clicked!");
  }

  return (
  <div>
    <Logo appName = "Pokedex" handleClick = {logWhenClicked} />
    <BestPokemon abilities = {abilities}/>
    <CaughtPokemon date = {date}/>
    </div> 
    );
}








export default App;
