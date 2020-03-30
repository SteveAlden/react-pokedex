import React, { Component } from 'react';
import Pokemon from './Pokemon';
import StackGrid, { transitions } from 'react-stack-grid';
const { scaleDown } = transitions;

class PokeList extends Component {
  state = {
    displayNo: 1
  };

  render() {
    let pokemon;
    if (this.props?.pokemons) {
      pokemon = this.props.pokemons;
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
          duration={200}
        >
          {pokemon?.map(p => (
            <Pokemon poke={p} />
          ))}
        </StackGrid>
      </>
    );
  }
}

export default PokeList;
