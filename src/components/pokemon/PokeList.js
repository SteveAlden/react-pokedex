import React from 'react';
import Pokemon from './Pokemon';
import StackGrid, { transitions } from 'react-stack-grid';
const { scaleDown } = transitions;

const PokeList = props => {
  let pokemon;
  if (props?.pokemons) {
    pokemon = props.pokemons;
  }

  return (
    <StackGrid
      columnWidth={180}
      appear={scaleDown.appear}
      appeared={scaleDown.appeared}
      enter={scaleDown.enter}
      entered={scaleDown.entered}
      leaved={scaleDown.leaved}
      gutterWidth={15}
      gutterHeight={15}
      appearDelay={80}
      duration={200}
    >
      {pokemon?.map(p => (
        <Pokemon poke={p} />
      ))}
    </StackGrid>
  );
};

export default PokeList;
