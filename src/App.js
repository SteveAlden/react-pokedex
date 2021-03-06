import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import PokeList from './containers/PokeList';
import DisplayPokemon from './containers/DisplayPokemon';
import NotFoundPage from './containers/NotFound';
class App extends Component {
  state = {
    pokemons: [],
    pokemonData: {},
  };
  componentDidMount() {
    const N = 151;
    const arr = Array.from(Array(N), (_, index) => index + 1);
    this.setState({ pokemons: arr });
    axios
      .get(
        'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
      )
      .then((res) => this.setState({ pokemonData: res.data }));
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path='/home'
              render={(props) => (
                <>
                  <div style={{ marginTop: '120px' }}>
                    <PokeList
                      pokemonData={this.state.pokemonData}
                      pokemons={this.state.pokemons}
                    />
                  </div>
                </>
              )}
            />
            <Route
              path={`/pokemon/:id`}
              render={(props) => <DisplayPokemon {...props} />}
            ></Route>
            <Redirect exact from='/' to='/home' />
            <Route path='*' exact={true} component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
