import React, { Component } from 'react';
import Pokemon from './Pokemon';
// import Container from '@material-ui/core/Container';
import { CardDeck, Container } from 'react-bootstrap';
import Coverflow from 'react-coverflow';

class PokeList extends Component {
  render() {
    // this.setState({ po: pokemon });
    let pokemon;
    if (this.props?.pokemons) {
      pokemon = this.props.pokemons;
      // const pokemon = this.props.pokemons;
      console.log('Pokelist');
      console.log(pokemon);
    }

    return (
      <>
        <Container style={{ maxWidth: '100%', marginTop: '20px' }}>
          <Coverflow
            displayQuantityOfSide={3}
            // navigation
            width='100%'
            height='80%'
            infiniteScroll
            enableHeading
            active={0}
            media={{
              '@media (max-width: 900px)': {
                width: '100%',
                height: '80vh'
              },
              '@media (min-width: 900px)': {
                width: '100%',
                height: '80vh'
              }
            }}
          >
            {pokemon?.map(p => (
              <Pokemon poke={p} />
            ))}
          </Coverflow>
        </Container>
      </>
    );
    // return pokemon?.map(poke => <Pokemon pokemon={poke} />);
  }
}

export default PokeList;
