import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Media, Image } from 'react-bootstrap';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import Evolutions from '../helpers/Evolutions';
// import Skeleton from '@material-ui/lab/Skeleton';

class DisplayPokemonOld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: {},
      dataLoaded: false,
      evWidth: '30%',
      // textColor: 'rgb(54,54,54)',
      textColor: '#898989',
      bodyColor: '#252525',
      mediaColor: '#363636'
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
  getEvolutions = pokeDisplay => {
    let preEv = pokeDisplay?.prev_evolution;
    let nexEv = pokeDisplay?.next_evolution;
    if (preEv) {
      if (nexEv) {
        // Map previous, then current then next evolution
        return (
          <div>
            <h4>Evolutions</h4>
            {preEv?.map(t => (
              // this.createEvolutionImage(t?.num?.replace(/^0+/, ''))
              <Evolutions imageid={t?.num?.replace(/^0+/, '')} />
            ))}
            {/* {this.createEvolutionImage(this.props.match.params.id)} */}
            <Evolutions imageid={this.props.match.params.id} />
            {nexEv?.map(t => (
              // this.createEvolutionImage(t?.num?.replace(/^0+/, ''))
              <Evolutions imageid={t?.num?.replace(/^0+/, '')} />
            ))}
          </div>
        );
      } else {
        // map all previous evolutions and display current
        return (
          <div>
            <h4>Evolutions</h4>
            {preEv?.map(t => (
              // this.createEvolutionImage(t?.num?.replace(/^0+/, ''))
              <Evolutions imageid={t?.num?.replace(/^0+/, '')} />
            ))}
            {/* {this.createEvolutionImage(this.props.match.params.id)} */}
            <Evolutions imageid={this.props.match.params.id} />
          </div>
        );
      }
    } else if (nexEv) {
      // display current and map all next evolutions
      return (
        <div>
          <h4>Evolutions</h4>
          {/* {this.createEvolutionImage(this.props.match.params.id)} */}
          <Evolutions imageid={this.props.match.params.id} />
          {nexEv?.map(t => (
            // this.createEvolutionImage(t?.num?.replace(/^0+/, ''))
            <Evolutions imageid={t?.num?.replace(/^0+/, '')} />
          ))}
        </div>
      );
    }
  };
  render() {
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
      <Container
        style={{
          margineTop: '100px',
          paddingTop: '100px',
          margineBottom: '20px',
          color: this.state.textColor,
          backgroundColor: this.state.bodyColor
        }}
      >
        <Media>
          <img
            width='50%'
            // className='mr-auto'
            src={`https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-${this.props.match.params.id}.png`}
            alt='Generic placeholder'
            style={{ backgroundColor: this.state.mediaColor }}
          />
          <Media.Body style={{ paddingLeft: '20px' }}>
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
            <br />
            <h5>Height: {pokemonDisplay?.height}</h5>
            <h5>Weight: {pokemonDisplay?.weight}</h5>
            <h5>
              The spawn chance of this pokémon is {pokemonDisplay?.spawn_chance}{' '}
              and the number of average spawns is {pokemonDisplay?.avg_spawns}{' '}
              and it usually spawns at {pokemonDisplay?.spawn_time}.
            </h5>
            <br />
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
            <br />
            {this.getEvolutions(pokemonDisplay)}
          </Media.Body>
        </Media>
        {/* </Card> */}
      </Container>
    );
  }
}

export default DisplayPokemonOld;
