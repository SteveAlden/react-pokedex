import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Evolutions extends Component {
  state = {
    evWidth: '30%',
    transform: 'scale(1.0)',
    boxShadow: 'none'
  };
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
      transition: 'transform .2s',
      transform: this.state.transform,
      padding: '5px',
      borderRadius: '50%',
      margin: '5px',
      width: '100px',
      height: '100px',
      backgroundColor: 'rgb(35, 35, 35)',
      border: '5px solid rgb(20, 20, 20)'
    };
  };
  createEvolutionImage = imgId => {
    return (
      <Link style={{ textDecoration: 'none' }} to={`/pokemon/${imgId}`}>
        <img
          style={this.getStyle()}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onTouchStart={this.onMouseOver}
          onTouchEnd={this.onMouseOut}
          src={`https://res.cloudinary.com/aldencloud/image/upload/v1584876602/pokemonpng/poke-${imgId}.png`}
          alt='Generic placeholder'
        />
      </Link>
    );
  };

  render() {
    return this.createEvolutionImage(this.props.imageid);
  }
}
export default Evolutions;
