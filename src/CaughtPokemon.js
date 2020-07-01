import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function catchPokemon() {
    if (pokemonNameInput) {
      // setCaughtPokemon(caughtPokemon.concat(pokemonNameInput));
      // different way to add the value of the input field is with the spread operator
      setCaughtPokemon([...caughtPokemon, pokemonNameInput]);
      setPokemonNameInput("");
      console.log("How many Pokemons", caughtPokemon);
    }
  }

  function handleInputChange(event) {
    console.log("this is my input", event.target.value);
    setPokemonNameInput(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      ></input>
      <button onClick={catchPokemon}> Catch!</button>
      <div>
        Caught:
        <span>
          {caughtPokemon.length}
          </span>
        <ul>
          {caughtPokemon.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
          Pokemons on {props.date}
        </ul>
      </div>
    </div>
  );
};

export default CaughtPokemon;

// comments:
// line 4 - Create a new state variable called totalCaught and initialise it to 0
// line 6 - When you create the totalCaught state, you should also set the function that will update this state
// line 12 - Add a button to the component with an onClick handler that calls a function called incrementTotal
