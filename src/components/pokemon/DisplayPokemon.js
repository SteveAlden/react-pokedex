import React, { Component } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Evolutions from '../helpers/Evolutions';
import Stats from '../helpers/Stats';
import { NavArrowLeft, NavArrowRight } from '../helpers/NavArrows';
import NotFoundPage from '../../components/NotFound';
import { Weakness, PokemonType } from '../helpers/Chip';
import FadeIn from 'react-fade-in';
const EmptyDiv = styled.div`
  background-color: none;
  text-align: center;
  margin-bottom: 1.4em;
`;
const HollowDiv = styled(EmptyDiv)`
  padding: 2vh 5vw 2vh 5vw;
  border-radius: 12px;
  border: 5px solid rgb(25, 25, 25);
  background-color: none;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;
const FilledDiv = styled(EmptyDiv)`
  padding: 2vh 5vw 2vh 5vw;
  border-radius: 12px;
  background-color: rgb(25, 25, 25);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;
const Hr = styled.hr`
  backgroundcolor: rgb(25, 25, 25);
  border: 2px solid rgb(25, 25, 25);
  width: 60%;
`;
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
      done: undefined
    };
  }

  shouldComponentUpdate(nextProps) {
    let newProp = nextProps.match.params.id;
    let thisProp = this.props.match.params.id;
    return thisProp === newProp || this.updateComponent(newProp);
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

          console.log(species, species.url, this.state.speciesDescription);
        })
      )
      .catch(errors => {
        // react on errors.
        console.error(errors);
      });
    setTimeout(() => {
      this.setState({ done: true });
    }, 1000);
  };

  componentDidMount() {
    this.updateComponent(this.props.match.params.id);
  }

  render() {
    let pokemonDisplay;
    // destructure pokemon from git api
    if (this.state?.pokemonData) {
      let { pokemon } = this.state.pokemonData;
      pokemonDisplay = pokemon?.find(
        poke => poke.id == this.props.match.params.id
      );
    } else {
      console.log('no data');
    }
    // destructure description from species
    let flavourText;
    if (this.state?.speciesDescription) {
      let { flavor_text_entries } = this.state?.speciesDescription;
      flavourText = flavor_text_entries?.find(
        text =>
          (text?.language?.name === 'en') &
          (text?.version?.name === 'omega-ruby')
      );
      console.log('flavourText', flavourText);
    }

    if (
      isNaN(this.props.match.params.id) |
      (this.props.match.params.id > 151) |
      (this.props.match.params.id < 1)
    ) {
      return <NotFoundPage />;
    }
    return (
      <Container
        style={{
          marginTop: '10vh',
          color: this.state.textColor
        }}
      >
        <FadeIn delay={100} transitionDuration={700}>
          <Row>
            <img
              width='50%'
              className='mr-auto'
              src={`https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-${this.props.match.params.id}.png`}
              alt='Generic placeholder'
              style={{ margin: 'auto' }}
            />
          </Row>
          <EmptyDiv>
            <Hr />
            <Row>
              <Col>
                <NavArrowLeft
                  pokeId={parseInt(this.props.match.params.id) - 1}
                />
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
            <Hr />
          </EmptyDiv>
          <EmptyDiv>
            <PokemonType type={pokemonDisplay?.type} />
          </EmptyDiv>
          <HollowDiv>
            <Row>
              <Col>
                <h5>{pokemonDisplay?.height}</h5>
                Height
              </Col>
              <Col>
                <h5> {pokemonDisplay?.id}</h5>
                Number
              </Col>
              <Col>
                <h5>{pokemonDisplay?.weight}</h5>
                Weight
              </Col>
            </Row>
          </HollowDiv>
          <HollowDiv>
            <h5 style={{ textAlign: 'justify' }}>{flavourText?.flavor_text}</h5>
          </HollowDiv>
          <FilledDiv>
            <Stats stats={this.state?.pokeApiData?.stats} />
          </FilledDiv>
          <FilledDiv>
            <Weakness weaknesses={pokemonDisplay?.weaknesses} />
          </FilledDiv>
          <FilledDiv>
            <Evolutions
              pokeDisplay={pokemonDisplay}
              imageId={this.props.match.params.id}
            />
          </FilledDiv>
        </FadeIn>
      </Container>
    );
  }
}

export default DisplayPokemon;
