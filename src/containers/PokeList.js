import React from 'react';
import Layout from '../layouts/Layout';
import FadeIn from 'react-fade-in';
import Pokemon from '../components/Pokemon';
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
          columnWidth={194}
          gutterWidth={8}
          gutterHeight={15}
          enableSSR={true}
          height=''
        >
          {pokemon?.map((p) => (
            <Pokemon key={p} poke={p} pokemonData={props.pokemonData} />
          ))}
        </StackGrid>
      </FadeIn>
    </Layout>
  );
};

export default PokeList;
