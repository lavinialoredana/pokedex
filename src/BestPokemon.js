import React, { useState } from "react";

const BestPokemon = (props) => {
  return (
    <div>
      <p> My favourite Pokemon is {props.pokemon} </p>
      <ul>
        {props.abilities.map((obj, index) => {
          return <li key={index}> {obj.ability.name}</li>;
        })}
      </ul>
    </div>
  );
};

const BestPokemonFetcher = () => {
  const [bestPokemon, setBestPokemon] = React.useState(null);

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((response) => response.json())
      .then((data) => {
        setBestPokemon(data);
        console.log(data);
      });
  }, []);

  return bestPokemon ? (
    <BestPokemon pokemon={bestPokemon.name} abilities={bestPokemon.abilities} />
  ) : null;
};

export default BestPokemonFetcher;

// comments:
// line 21 - If there is some bestPokemon state (else {}), then render the BestPokemon component and pass the bestPokemon state variable as the pokemon prop (hint: <BestPokemon pokemon={bestPokemon} />).
//         -  If there is no bestPokemon state (hint: if (!bestPokemon) {}), then return null so that the component renders nothing.
