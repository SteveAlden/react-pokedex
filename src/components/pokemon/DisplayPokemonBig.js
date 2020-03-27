import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Media, Image } from 'react-bootstrap';
import Chip from '@material-ui/core/Chip';
// import Skeleton from '@material-ui/lab/Skeleton';

class DisplayPokemonBig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: {},
      dataLoaded: false
    };
  }
  componentDidMount() {
    axios
      .get(
        'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
      )
      .then(res => this.setState({ pokemonData: res.data }));
  }

  getChipStyle = pokeType => {
    switch (pokeType) {
      case 'Bug':
        return '#C3D21F';

      case 'Dark':
        return '#8E6956';

      case 'Dragon':
        return '#8774FF';

      case 'Electric':
        return '#FDE53D';

      case 'Fairy':
        return '#F9ADFF';

      case 'Fighting':
        return '#A85643';

      case 'Fire':
        return '#FA5643';

      case 'Flying':
        return '#79A4FF';

      case 'Ghost':
        return '#7873D4';

      case 'Grass':
        return '#8DD851';

      case 'Ground':
        return '#EDCC56';

      case 'Ice':
        return '#96F1FF';

      case 'Normal':
        return '#BDBDAE';

      case 'Poison':
        return '#AB5DA2';

      case 'Psychic':
        return '#F662B1';

      case 'Rock':
        return '#CDBD72';

      case 'Stell':
        return '#C4C2DB';

      case 'Water':
        return '#56AEFF';
    }
  };
  render() {
    const flying = 'rgb()';
    let pokemon;
    let pokemonDisplay;
    if (this.state?.pokemonData) {
      let { pokemon } = this.state.pokemonData;
      pokemonDisplay = pokemon?.find(
        poke => poke.id == this.props.match.params.id
      );
      console.log(pokemonDisplay);
      console.log(pokemon);
    } else {
      console.log('no data');
    }
    return (
      <Container style={{ paddingTop: '150px' }}>
        <Media>
          <img
            width={350}
            height={350}
            className='mr-3'
            src={`https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-${this.props.match.params.id}.png`}
            alt='Generic placeholder'
          />
          <Media.Body>
            <h1>{pokemonDisplay?.name}</h1>
            <div>
              {pokemonDisplay?.type?.map(t => (
                <>
                  <Chip
                    // size='small'
                    label={t}
                    color='primary'
                    style={{ backgroundColor: this.getChipStyle(t) }}
                  />{' '}
                </>
              ))}
            </div>

            {/* <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p> */}
            {/* <p>Height: {pokemonDisplay?.height}</p>
            <p>Weight: {pokemonDisplay?.weight}</p>
            <p>Candy: {pokemonDisplay?.candy}</p>
            <p>Spawn Chance: {pokemonDisplay?.spawn_chance}</p>
            <p>Average Spawn: {pokemonDisplay?.avg_spawns}</p>
            <p>Spawn Time: {pokemonDisplay?.spawn_time}</p> */}
            <h5>
              The spawn chance of this pokémon is {pokemonDisplay?.spawn_chance}{' '}
              and the number of average spawns is {pokemonDisplay?.avg_spawns}{' '}
              and the usual spawn is at {pokemonDisplay?.spawn_time}.
            </h5>
            <h4>Weakness</h4>
            <div>
              {pokemonDisplay?.weaknesses?.map(t => (
                <>
                  <Chip
                    size='small'
                    label={t}
                    color='primary'
                    style={{ backgroundColor: this.getChipStyle(t) }}
                  />{' '}
                </>
              ))}
            </div>
          </Media.Body>
        </Media>
        {/* <Card>
          <p>{pokemon}</p>
          <img
            // style={{ marginTop: '50px' }}
            src={`https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-${this.props.match.params.id}.png`}
            width='100%'
          />
        </Card> */}
      </Container>
    );
  }
}

export default DisplayPokemonBig;
