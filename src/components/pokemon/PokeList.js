import React from 'react';
import Layout from '../layouts/Layout';
import FadeIn from 'react-fade-in';
import Pokemon from './Pokemon';
import StackGrid from 'react-stack-grid';

const PokeList = (props) => {
  let pokemon;
  if (props?.pokemons) {
    pokemon = props.pokemons;
  }
  return (
    <Layout>
      <FadeIn>
        <StackGrid
          columnWidth={190}
          gutterWidth={15}
          gutterHeight={15}
          enableSSR={true}
        >
          {pokemon?.map((p) => (
            <Pokemon poke={p} />
          ))}
        </StackGrid>
      </FadeIn>
    </Layout>
  );
};

export default PokeList;
