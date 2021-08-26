import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokedexList(props) {
  const pokedex = props.pokedex;
  const pokemonItems = pokedex.map(pokemon =>
    <li key={pokemon.number.toString()}>
      {pokemon.name}
    </li>
  );
  return (
    <ul>{pokemonItems}</ul>
  );
}

ReactDOM.render(
  <PokedexList pokedex={pokedex} />,
  document.querySelector('#root')
);
