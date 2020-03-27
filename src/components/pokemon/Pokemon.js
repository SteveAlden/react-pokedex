import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';

class Pokemon extends Component {
  render() {
    // console.log(this.props.pokemon);
    const pokemon = this.props.poke;
    console.log(pokemon);
    // import pokeImg from `./pokedex/${pokemon}.png`;
    return (
      <>
        <img
          // src={`https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemon/poke-${pokemon}.png`}
          src={`https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemonpng/poke-${pokemon}.png`}
          // style={{
          //   // textAlign: 'center',
          //   // marginTop: '5%',
          //   marginLeft: '50%',
          //   transform: 'translate(-50%,-75%)',
          //   marginBottom: '-50%'
          // }}

          width='100%'
          // style={{ boxShadow: '1px 1px 15px #888888' }}
          // height={100}
          // className='text-center mr-3'
          // thumbnail
        />
      </>
    );
  }
}

export default Pokemon;
