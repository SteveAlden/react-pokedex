import React, { Component } from 'react';
import PokemonP from './PokemonP';
import StackGrid, { transitions } from 'react-stack-grid';

const { scaleDown, fadeDown, flip, helix } = transitions;

// const isDesktop = useMediaQuery({ minWidth: 600 });

class PokeListP extends Component {
  state = {
    displayNo: 1
  };

  render() {
    // this.setState({ po: pokemon });

    // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    // const isMobile = useMediaQuery({ maxWidth: 600 });
    let pokemon;
    if (this.props?.pokemons) {
      pokemon = this.props.pokemons;
      // const pokemon = this.props.pokemons;
      console.log('Pokelist');
      console.log(pokemon);
    }

    return (
      <>
        <StackGrid
          columnWidth={190}
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
          gutterWidth={15}
          gutterHeight={15}
          appearDelay={80}
          // rtl={true}
          // duration={1000}
        >
          {pokemon?.map(p => (
            <PokemonP poke={p} />
          ))}
        </StackGrid>
      </>
    );
    // return pokemon?.map(poke => <Pokemon pokemon={poke} />);
  }
}

export default PokeListP;
