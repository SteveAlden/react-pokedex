import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import Loading from '../helpers/Loading';
import Pokemon from './Pokemon';
import StackGrid, { transitions } from 'react-stack-grid';
const { scaleDown } = transitions;

const PokeList = props => {
  // const [done, setDone] = useState(undefined);
  let pokemon;
  if (props?.pokemons) {
    pokemon = props.pokemons;
  }
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDone({ done: true });
  //   }, 1200);
  // });

  return (
    <>
      {/* {!done ? (
        <Loading />
      ) : ( */}
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
      {/* )} */}
    </>
  );
};

export default PokeList;
