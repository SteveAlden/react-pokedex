import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';

class Pokemon extends Component {
  state = {
    transform: 'scale(1.0)',
    boxShadow: 'none',
  };

  render() {
    const pokemonNum = this.props?.poke;
    // const pokemonData = this.props?.pokemonData;

    // let { pokemon } = pokemonData || {};
    // let pokemonDisplay;
    // pokemonDisplay = pokemon?.find((poke) => poke.id == pokemonNum);
    return (
      <Link style={{ textDecoration: 'none' }} to={`/pokemon/${pokemonNum}`}>
        <div style={this.getStyle()}>
          <Image
            cloudName='aldencloud'
            publicId={`pokemontrimtop/poke-${pokemonNum}.png`}
            width='100%'
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
            onTouchStart={this.onMouseOver}
            onTouchEnd={this.onMouseOut}
          />
          {/* <div>{pokemonDisplay?.name}</div> */}
        </div>
        {/* <div> */}
        {/* <img
          alt=''
          // src={`https://res.cloudinary.com/aldencloud/image/upload/v1584876599/pokemonpng/poke-${pokemon}.png`}
          src={`https://res.cloudinary.com/aldencloud/image/upload/v1585040966/pokemontrim/poke-${pokemon}.png`}
          // src={`https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemon/poke-${pokemon}.png`}
          // src={`https://ik.imagekit.io/alden/poke/tr:w-0.3/${pokemon}.png`}
          // src={`${process.env.PUBLIC_URL}/assets/pokemonImages/${pokemon}.png`}
          style={this.getStyle()}
          width='100%'
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onTouchStart={this.onMouseOver}
          onTouchEnd={this.onMouseOut}
        /> */}
        {/* hello there
          <br />
          yoyo
          <br /> */}
        {/* </div> */}
      </Link>
    );
  }
  onMouseOver = () => {
    this.setState({
      transform: 'scale(1.05)',
      boxShadow: '0px 5px 15px 5px rgba(87,255,196,0.5)',
    });
  };
  onMouseOut = () => {
    this.setState({
      transform: 'scale(1.0)',
      boxShadow: 'none',
    });
  };
  getStyle = () => {
    return {
      paddingTop: '40px',
      background: 'rgb(36,36,36)',
      boxShadow: this.state.boxShadow,
      transition: 'transform .2s',
      transform: this.state.transform,
      borderRadius: '20px',
    };
  };
}

export default Pokemon;
