import React, { Component } from 'react';
import Pokemon from './Pokemon';
// import Container from '@material-ui/core/Container';
import { useMediaQuery } from 'react-responsive';
import { CardDeck, Container } from 'react-bootstrap';
import Coverflow from 'react-coverflow';

// const isDesktop = useMediaQuery({ minWidth: 600 });

class PokeList extends Component {
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
        <Container style={{ maxWidth: '100%', marginTop: '50px' }}>
          <Coverflow
            displayQuantityOfSide={3}
            // navigation
            // width='100%'
            // height='80%'
            infiniteScroll
            // enableHeading
            active={0}
            // currentFigureScale={1}
            // otherFigureScale={0.5}
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
