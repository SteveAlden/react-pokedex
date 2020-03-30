import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import Evolutions from '../helpers/Evolutions';
import { Chip } from '@material-ui/core';
import Stats from '../helpers/Stats';
import { Link } from 'react-router-dom';
import { NavArrowLeft, NavArrowRight } from '../helpers/NavArrows';

class DisplayPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonNumber: this.props.match.params.id,
      pokemonData: {},
      pokeApiData: {},
      speciesDescription: {},
      flavourText: {},
      dataLoaded: false,
      evWidth: '30%',
      textColor: '#898989',
      bodyColor: '#252525',
      mediaColor: '#363636',
      bgColor: 'rgb(25, 25, 25)',
      border: '5px solid rgb(15, 15, 15)',
      leftArrowColor: '#898989',
      rightArrowColor: '#898989',
      // transition: 'transform .2s',
      leftArrowTransform: 'scale(1.0)',
      rightArrowTransform: 'scale(1.0)'
    };
  }
  shouldComponentUpdate(nextProps) {
    let newProp = nextProps.match.params.id;
    let thisProp = this.props.match.params.id;
    if ((thisProp > 151) | (thisProp < 1)) {
      return (window.location.href = '/');
    }
    return (
      this.props.match.params.id === newProp || this.updateComponent(newProp)
    );
  }
  updateComponent = newId => {
    let pokeGitUrl =
      'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
    let pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/${newId}`;

    const pokeGitData = axios.get(pokeGitUrl);
    const pokeApiData = axios.get(pokeApiUrl);
    axios
      .all([pokeGitData, pokeApiData])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0].data;
          const responseTwo = responses[1].data;
          let { species } = responseTwo;
          this.setState({ pokemonData: responseOne });
          this.setState({ pokeApiData: responseTwo });
          axios
            .get(species.url)
            .then(res =>
              this.setState(
                { speciesDescription: res.data },
                console.log(res.data)
              )
            );

          console.log(
            // responseOne,
            // responseTwo,
            species,
            species.url,
            this.state.speciesDescription
          );
        })
      )
      .catch(errors => {
        // react on errors.
        console.error(errors);
      });
  };
  componentDidMount() {
    this.updateComponent(this.props.match.params.id);
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
  createRowCol = (col1, col2) => {
    return (
      <h5>
        <Row>
          <Col align='left'>{col1}</Col>
          <Col align='right'>{col2}</Col>
        </Row>
      </h5>
    );
  };
  getDivStyle = style => {
    switch (style) {
      case 'filled':
        return {
          borderRadius: '12px',
          paddingTop: '2vh',
          paddingBottom: '2vh',
          backgroundColor: this.state.bgColor
        };

      case 'empty':
        return {
          padding: '2vh 5vw 1vh 5vw',
          border: '5px solid rgb(25, 25, 25)',
          // backgroundColor: this.state.bgColor,
          borderRadius: '12px'
        };
      case 'stats':
        return {
          padding: '2vh 5vw 1vh 5vw',
          backgroundColor: this.state.bgColor,
          borderRadius: '12px'
        };
    }
  };

  getEvolutions = pokeDisplay => {
    let preEv = pokeDisplay?.prev_evolution;
    let nexEv = pokeDisplay?.next_evolution;
    if (preEv) {
      if (nexEv) {
        // Map previous, then current then next evolution
        return (
          <div style={this.getDivStyle('filled')}>
            <h3>Evolutions</h3>
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
          <div style={this.getDivStyle('filled')}>
            <h3>Evolutions</h3>
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
        <div style={this.getDivStyle('filled')}>
          <h3>Evolutions</h3>
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

  getHr = () => {
    return (
      <hr
        style={{
          backgroundColor: 'rgb(25, 25, 25)',
          border: '2px solid rgb(25, 25, 25)',
          width: '60%'
        }}
      />
    );
  };

  render() {
    let pokemonDisplay;
    // destructure pokemon from git api
    if (this.state?.pokemonData) {
      let { pokemon } = this.state.pokemonData;
      pokemonDisplay = pokemon?.find(
        poke => poke.id == this.props.match.params.id
      );
      // console.log(pokemonDisplay);
      // console.log(pokemon);
    } else {
      console.log('no data');
    }
    // destructure description from species
    let flavourText;
    // let flavor_text;
    if (this.state?.speciesDescription) {
      let { flavor_text_entries } = this.state?.speciesDescription;
      flavourText = flavor_text_entries?.find(
        text =>
          (text?.language?.name === 'en') &
          (text?.version?.name === 'omega-ruby')
      );
      console.log('flavourText', flavourText);
    }

    return (
      <Container
        // fluid
        style={{
          // paddingBottom: '10vh',
          marginTop: '10vh',
          // marginBottom: '20px',
          color: this.state.textColor
          // backgroundColor: this.state.bodyColor
        }}
      >
        <Row>
          <img
            width='50%'
            className='mr-auto'
            // class='align-self-center"'
            src={`https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-${this.props.match.params.id}.png`}
            alt='Generic placeholder'
            style={{ margin: 'auto' }}
          />
        </Row>

        <div style={{ margin: 'auto' }} align='center'>
          {this.getHr()}
          <Row>
            <Col>
              <NavArrowLeft pokeId={parseInt(this.props.match.params.id) - 1} />
            </Col>
            <Col>
              <h1 align='center'>{pokemonDisplay?.name}</h1>
            </Col>
            <Col>
              <NavArrowRight
                pokeId={parseInt(this.props.match.params.id) + 1}
              />
            </Col>
          </Row>
          {this.getHr()}
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
          <div style={this.getDivStyle('empty')}>
            <h5 style={{ textAlign: 'justify' }}>{flavourText?.flavor_text}</h5>
          </div>
          <br />
          <div style={this.getDivStyle('empty')}>
            {this.createRowCol('Number :', pokemonDisplay?.id)}
            {this.createRowCol('Height :', pokemonDisplay?.height)}
            {this.createRowCol('Weight :', pokemonDisplay?.weight)}
            {this.createRowCol('Spawn chance :', pokemonDisplay?.spawn_chance)}
            {this.createRowCol('Avg Spawn :', pokemonDisplay?.avg_spawns)}
            {this.createRowCol('Spawn time :', pokemonDisplay?.spawn_time)}
          </div>
          <br />
          <div
            // className='mr-auto'
            style={this.getDivStyle('stats')}
          >
            <h3>Base Stats</h3>
            <Stats stats={this.state?.pokeApiData?.stats} />
          </div>
          <br />
          <div
            // className='mr-auto'
            style={this.getDivStyle('filled')}
          >
            <h3>Weakness</h3>
            {/* {this.getStat()} */}

            {/* <ProgressBar
              now={60}
              style={{
                color: 'black',
                backgroundImage:
                  'linear-gradient(to right, rgba(42,187,239,1) 0%, rgba(239,9,105,1) 100%'
              }}
            /> */}
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
        </div>

        {/* </Card> */}
      </Container>
    );
  }
}

export default DisplayPokemon;