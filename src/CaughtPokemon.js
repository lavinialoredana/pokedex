import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [totalCaught, setTotalCaught] = useState(0);

  function incrementTotal() {
    setTotalCaught(totalCaught + 1);
  }

  return (
    <div>
      <button onClick = {incrementTotal}> Increment!</button>
      <p> Caught {totalCaught} Pokemons on {props.date} </p>
    </div>
  );
};

export default CaughtPokemon;



// comments:
// line 4 - Create a new state variable called totalCaught and initialise it to 0
// line 6 - When you create the totalCaught state, you should also set the function that will update this state
// line 12 - Add a button to the component with an onClick handler that calls a function called incrementTotal