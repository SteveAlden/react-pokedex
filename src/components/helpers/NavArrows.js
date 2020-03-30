import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavArrowLeft extends Component {
  state = {
    evWidth: '30%',
    transform: 'scale(1.0)',
    color: '#898989'
  };
  onMouseOver = () => {
    this.setState({
      transform: 'scale(1.2)'
      // color: '#454545'
    });
  };
  onMouseOut = () => {
    this.setState({
      transform: 'scale(1.0)'
      // color: '#898989'
    });
  };

  getStyle = () => {
    return {
      boxShadow: this.state.boxShadow,
      fontSize: '56px',
      transition: 'transform .1s',
      transform: this.state.transform,
      color: this.state.color
    };
  };
  createArrowIcon = pokeId => {
    return (
      <Link style={{ textDecoration: 'none' }} to={`/pokemon/${pokeId}`}>
        <i
          class='fa fa-angle-left'
          style={this.getStyle()}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onTouchStart={this.onMouseOver}
          onTouchEnd={this.onMouseOut}
        />
      </Link>
    );
  };

  render() {
    return this.createArrowIcon(this.props.pokeId);
  }
}

class NavArrowRight extends Component {
  state = {
    evWidth: '30%',
    transform: 'scale(1.0)',
    color: '#898989'
  };
  onMouseOver = () => {
    this.setState({
      transform: 'scale(1.2)'
      // color: '#454545'
    });
  };
  onMouseOut = () => {
    this.setState({
      transform: 'scale(1.0)'
      // color: '#898989'
    });
  };

  getStyle = () => {
    return {
      boxShadow: this.state.boxShadow,
      fontSize: '56px',
      transition: 'transform .1s',
      transform: this.state.transform,
      color: this.state.color
    };
  };
  createArrowIcon = pokeId => {
    return (
      <Link style={{ textDecoration: 'none' }} to={`/pokemon/${pokeId}`}>
        <i
          class='fa fa-angle-right'
          style={this.getStyle()}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onTouchStart={this.onMouseOver}
          onTouchEnd={this.onMouseOut}
        />
      </Link>
    );
  };

  render() {
    return this.createArrowIcon(this.props.pokeId);
  }
}

export { NavArrowRight, NavArrowLeft };
