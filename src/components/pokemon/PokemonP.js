import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
class PokemonP extends Component {
  state = {
    transform: 'scale(1.0)',
    boxShadow: 'none'
  };
  // componentDidMount() {
  //   axios
  //     .get(
  //       'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
  //     )
  //     .then(res => this.setState({ image: res.data }));
  // }

  onMouseOver = () => {
    this.setState({
      transform: 'scale(1.05)',
      boxShadow: '0px 5px 15px 5px rgba(87,255,196,0.5)'
    });
  };
  onMouseOut = () => {
    this.setState({
      transform: 'scale(1.0)',
      boxShadow: 'none'
    });
  };

  getStyle = () => {
    return {
      boxShadow: this.state.boxShadow,
      // borderRadius: '7px',
      transition: 'transform .2s',
      transform: this.state.transform,
      borderRadius: '20px'
      // backgroundColor: 'rgb(25,25,25)'
    };
  };
  render() {
    // console.log(this.props.pokemon);
    const pokemon = this.props.poke;
    console.log(pokemon);
    // import pokeImg from `./pokedex/${pokemon}.png`;
    return (
      // <div>
      <Link style={{ textDecoration: 'none' }} to={`/pokemon/${pokemon}`}>
        <img
          src={`https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemon/poke-${pokemon}.png`}
          // src={`https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemontrim/poke-${pokemon}.png`}
          // src={this.image}
          style={this.getStyle()}
          width='100%'
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onTouchStart={this.onMouseOver}
          onTouchEnd={this.onMouseOut}
        />
        {/* <LazyLoadImage
          src={`https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemon/poke-${pokemon}.png`} // use normal <img> attributes as props
          width='100%'
          style={this.getStyle()}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        /> */}
      </Link>
      // </div>
    );
  }
}

export default PokemonP;
