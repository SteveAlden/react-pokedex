import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Media, Image } from 'react-bootstrap';
import Chip from '@material-ui/core/Chip';
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
      // boxShadow: '0px 5px 15px 5px #FF5A5A'
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
      padding: '5px',
      borderRadius: '50%',
      margin: '5px',
      width: '100px',
      height: '100px',
      // border: '5px solid #ddd',
      backgroundColor: 'rgb(35, 35, 35)',
      border: '5px solid rgb(20, 20, 20)'
    };
  };
  createEvolutionImage = imgId => {
    return (
      <Link style={{ textDecoration: 'none' }} to={`/pokemon/${imgId}`}>
        <img
          // width={this.state.evWidth}
          style={this.getStyle()}
          // width='100%'
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onTouchStart={this.onMouseOver}
          onTouchEnd={this.onMouseOut}
          // className='mr-3'
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
