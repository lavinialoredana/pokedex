import React from "react";

function Logo(props) {
  console.log(props)
  return (
    <header>
      <h1> Welcome to the {props.appName}</h1>
      <img 
      onClick = {props.handleClick}
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"alt = "Pokedex" />
    </header>
  );
}
export default Logo;
