import React, { Component } from 'react';
import Layout from '../layouts/Layout';
import styled from 'styled-components/macro';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Evolutions from '../components/Evolutions';
import Stats from '../components/Stats';
import NotFoundPage from '../containers/NotFound';
import { Weakness, PokemonType } from '../components/Chip';
import FadeIn from 'react-fade-in';
import { Name, Description, Info } from '../components/Description';

const Image = styled.img`
  margin: auto;
  margin-bottom: 10px;
  width: 50%;
  display: block;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent) , to(rgba(250, 250, 250, 0.1)));
}

`;
const textColor = '#898989';
class DisplayPokemon extends Component {
  state = {
    pokemonNumber: this.props.match.params.id,
    pokemonGitData: {},
    pokeApiData: {},
    species: {},
  };

  render() {
    // destructure pokemon from git api
    let pokeApiData = this.state.pokeApiData;
    let { pokemon } = this.state.pokemonGitData || {};
    let pokemonDisplay;
    pokemonDisplay = pokemon?.find(
      (poke) => poke.id == this.props.match.params.id
    );
    // destructure description from species
    let { flavor_text_entries, genera } = this.state?.species || {};
    let flavourText = flavor_text_entries?.find(
      (text) =>
        (text?.language?.name === 'en') & (text?.version?.name === 'omega-ruby')
    );
    let genus = genera?.find((g) => g?.language?.name === 'en');
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
            color: textColor,
          }}
        >
          <FadeIn delay={100} transitionDuration={700}>
            <Image
              alt=''
              src={`https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-${this.props.match.params.id}.png`}
            />
            <Name
              name={pokeApiData?.name}
              genus={genus?.genus}
              id={this.props.match.params.id}
            />
            <PokemonType type={pokemonDisplay?.type} />
            <Info
              height={pokeApiData?.height}
              id={pokeApiData?.id}
              weight={pokeApiData?.weight}
            />
            <Description flavourText={flavourText?.flavor_text} />
            <Stats stats={pokeApiData?.stats} />
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
        .then((res) => this.setState({ species: res.data }));
    });
  };
  componentDidMount() {
    let pokeGitUrl =
      'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
    axios
      .get(pokeGitUrl)
      .then((res) => this.setState({ pokemonGitData: res.data }));
    this.updateComponent(this.props.match.params.id);
  }
}

export default DisplayPokemon;
