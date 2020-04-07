import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import styled from 'styled-components/macro';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import Evolutions from '../helpers/Evolutions';
import Stats from '../helpers/Stats';
import NotFoundPage from '../../components/NotFound';
import { Weakness, PokemonType } from '../helpers/Chip';
import FadeIn from 'react-fade-in';
import { Name, Description, Info } from '../helpers/Description';

const Image = styled.img`
  margin: auto;
  width: 50%;
  display: block;
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
    };
  }

  render() {
    let pokemonDisplay;
    // destructure pokemon from git api
    if (this.state?.pokemonData) {
      let { pokemon } = this.state.pokemonData;
      pokemonDisplay = pokemon?.find(
        (poke) => poke.id == this.props.match.params.id
      );
    }
    // destructure description from species
    let flavourText;
    if (this.state?.speciesDescription) {
      let { flavor_text_entries } = this.state?.speciesDescription;
      flavourText = flavor_text_entries?.find(
        (text) =>
          (text?.language?.name === 'en') &
          (text?.version?.name === 'omega-ruby')
      );
    }

    if (
      isNaN(this.props.match.params.id) |
      (this.props.match.params.id > 151) |
      (this.props.match.params.id < 1)
    ) {
      return <NotFoundPage />;
    }
    return (
      <Layout>
        <Container
          style={{
            marginTop: '10vh',
            color: this.state.textColor,
          }}
        >
          <FadeIn delay={100} transitionDuration={700}>
            <Image
              alt=''
              src={`https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-${this.props.match.params.id}.png`}
            />
            <Name name={pokemonDisplay?.name} id={this.props.match.params.id} />
            <PokemonType type={pokemonDisplay?.type} />
            <Info
              height={pokemonDisplay?.height}
              id={pokemonDisplay?.id}
              weight={pokemonDisplay?.weight}
            />
            <Description flavourText={flavourText?.flavor_text} />
            <Stats stats={this.state?.pokeApiData?.stats} />
            <Weakness weaknesses={pokemonDisplay?.weaknesses} />
            <Evolutions
              pokeDisplay={pokemonDisplay}
              imageId={this.props.match.params.id}
            />
          </FadeIn>
        </Container>
      </Layout>
    );
  }

  shouldComponentUpdate(nextProps) {
    let newProp = nextProps.match.params.id;
    let thisProp = this.props.match.params.id;
    return thisProp === newProp || this.updateComponent(newProp);
  }
  updateComponent = (newId) => {
    let pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/${newId}`;
    axios.get(pokeApiUrl).then((responses) => {
      const responseTwo = responses.data;
      let { species } = responseTwo;
      this.setState({ pokeApiData: responseTwo });
      axios
        .get(species.url)
        .then((res) => this.setState({ speciesDescription: res.data }));
    });
  };
  componentDidMount() {
    let pokeGitUrl =
      'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
    axios
      .get(pokeGitUrl)
      .then((res) => this.setState({ pokemonData: res.data }));
    this.updateComponent(this.props.match.params.id);
  }
}

export default DisplayPokemon;
