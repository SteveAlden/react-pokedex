import React, { Component } from 'react';
// import './App.css';
import './index.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from './components/layouts/Header';
// import Jumbo from './layouts/HeaderJumbo';
import Footer from './components/layouts/Footer';
// import DisplayImages from './Images';
// import pngimg1 from './pokedex/1.png';
// import pngimg2 from './pokedex/2.png';
// import pngimg3 from './pokedex/3.png';
// import pngimg4 from './pokedex/4.png';
import Coverflow from 'react-coverflow';
import { Container } from 'react-bootstrap';
import PokeList from './components/pokemon/PokeList';
import PokeListP from './components/pokemon/PokeListP';
import DisplayPokemonBig from './components/pokemon/DisplayPokemonBig';
import DisplayPokemon from './components/pokemon/DisplayPokemon';
class App extends Component {
  state = {
    pokemons: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      149,
      150,
      151
    ],
    pokemonData: {}
  };
  componentDidMount() {
    axios
      .get(
        'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
      )
      .then(res => this.setState({ pokemonData: res.data }));
  }
  render() {
    // return (
    //   <div className='App' style={{ backgroundColor: 'black' }}>
    //     <Header />
    //     <div>
    //       <Container style={{ maxWidth: '100%', marginTop: '60px' }}>
    //         <Coverflow
    //           displayQuantityOfSide={3}
    //           // navigation
    //           width={900}
    //           height={480}
    //           infiniteScroll
    //           enableHeading
    //           media={{
    //             // '@media (max-width: 900px)': {
    //             //   // width: '600px',
    //             //   // height: '300px'
    //             // },
    //             '@media (min-width: 900px)': {
    //               width: '100%',
    //               height: '80vh'
    //             }
    //           }}
    //         >
    //           {/* <img src='https://drive.google.com/open?id=1N9sI9VbyCmbOTmB3GFBLUHjj3bcYKZNr' /> */}
    //           <img src={pngimg1} />
    //           <img src={pngimg1} />
    //           <img src={pngimg2} />
    //           <img src={pngimg3} />
    //           <img src={pngimg2} />
    //           <img src={pngimg3} />
    //           <img src={pngimg4} />
    //           {/* <DisplayImages /> */}
    //         </Coverflow>
    //       </Container>
    //     </div>
    //   </div>
    // );
    // return (
    //   <div>
    //     <Header />
    //     {/* <Jumbo /> */}
    //     <div style={{ marginTop: '85px' }}>
    //       {/* <PokeList pokemons={this.state.pokemons} /> */}
    //       <PokeListP pokemons={this.state.pokemons} />
    //     </div>
    //   </div>
    // );
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route
              exact
              path='/react-pokedex-carousel'
              render={props => (
                <>
                  <div style={{ marginTop: '120px' }}>
                    {/* <PokeList pokemons={this.state.pokemons} /> */}
                    <PokeListP pokemons={this.state.pokemons} />
                  </div>
                </>
              )}
            />
            <Route
              path={`/pokemon/:id`}
              render={props => <DisplayPokemon {...props} />}
            ></Route>
            <Redirect exact from='/' to='/react-pokedex-carousel' />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
