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

const BestPokemonFetcher = (props) => {
  const [bestPokemon, setBestPokemon] = React.useState(null);

  React.useEffect(() => {
    setBestPokemon(null);
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((response) => response.json())
      .then((data) => {
        setBestPokemon(data);
        console.log(data);
      });
  }, [props.pokemonId]);

  return bestPokemon ? (
    <BestPokemon pokemon={bestPokemon.name} abilities={bestPokemon.abilities} />
  ) : (
    "Loading.."
  );
};

function BestPokemonSelector() {
  const [pokemonId, setPokemonId] = useState(null);

  function handleBulbasaurClick() {
    setPokemonId(1);
  }
  function handleCharmanderClick() {
    setPokemonId(4);
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : null}
    </div>
  );
}

export default BestPokemonSelector;

// comments:
// line 21 - If there is some bestPokemon state (else {}), then render the BestPokemon component and pass the bestPokemon state variable as the pokemon prop (hint: <BestPokemon pokemon={bestPokemon} />).
//         -  If there is no bestPokemon state (hint: if (!bestPokemon) {}), then return null so that the component renders nothing.
