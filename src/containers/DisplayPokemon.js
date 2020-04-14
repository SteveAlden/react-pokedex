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
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent) , to(rgba(250, 250, 250, 0.1)));
}

`;
const textColor = '#898989';
const pokemonJson = [];
class DisplayPokemon extends Component {
  state = {
    pokemonNumber: this.props.match.params.id,
    pokemonGitData: {},
    pokeApiData: {},
    species: {},
    pokemonData: {},
  };

  render() {
    let pokemonData = this.state.pokemonData;
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
              name={pokemonData?.name}
              genus={pokemonData?.genus}
              id={this.props.match.params.id}
            />
            <PokemonType type={pokemonData?.type} />
            <Info
              height={pokemonData?.height}
              id={pokemonData?.id}
              weight={pokemonData?.weight}
            />
            <Description flavourText={pokemonData?.description} />
            <Stats stats={pokemonData?.stats} />
            <Weakness weaknesses={pokemonData?.weakness} />
            <Evolutions
              preEvolution={pokemonData?.preEvolution}
              postEvolution={pokemonData?.postEvolution}
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
    let pokemonObj;
    axios.get(pokeApiUrl).then((responses) => {
      const responseTwo = responses.data;
      let { species } = responseTwo;
      this.setState({ pokeApiData: responseTwo });
      axios.get(species.url).then((res) => {
        this.setState({ species: res.data });

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
            (text?.language?.name === 'en') &
            (text?.version?.name === 'omega-ruby')
        );
        let genus = genera?.find((g) => g?.language?.name === 'en');

        let { base_happiness, capture_rate, habitat } =
          this.state?.species || {};
        let stata = [];
        let stat1 = pokeApiData?.stats?.map((s) =>
          stata.push({ statName: s?.stat?.name, baseStat: s?.base_stat })
        );
        pokemonObj = {
          id: pokemonDisplay?.id,
          name: pokemonDisplay?.name,
          height: pokemonDisplay?.height,
          weight: pokemonDisplay?.weight,
          genus: genus?.genus,
          description: flavourText?.flavor_text,
          stats: stata,
          type: pokemonDisplay?.type,
          weakness: pokemonDisplay?.weaknesses,
          preEvolution: pokemonDisplay?.prev_evolution,
          postEvolution: pokemonDisplay?.next_evolution,
          baseHappiness: base_happiness,
          captureRate: capture_rate || null,
          habitat: habitat?.name,
        };
        this.setState({ pokemonData: pokemonObj });
      });
    });
    // .then(this.setState({ pokemonData: pokemonObj }));
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
