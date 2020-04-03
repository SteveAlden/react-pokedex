import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import Pokemon from './Pokemon';
import StackGrid, { transitions } from 'react-stack-grid';
const { scaleDown } = transitions;

const PokeList = props => {
  let pokemon;
  if (props?.pokemons) {
    pokemon = props.pokemons;
  }
  return (
    <FadeIn>
      <StackGrid
        columnWidth={190}
        // appear={scaleDown.appear}
        // appeared={scaleDown.appeared}
        // enter={scaleDown.enter}
        // entered={scaleDown.entered}
        // leaved={scaleDown.leaved}
        gutterWidth={15}
        gutterHeight={15}
        // appearDelay={100}
        // duration={200}
        enableSSR={true}
      >
        {pokemon?.map(p => (
          <Pokemon poke={p} />
        ))}
      </StackGrid>
    </FadeIn>
  );
};

export default PokeList;
