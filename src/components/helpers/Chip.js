import React from 'react';
import { Chip } from '@material-ui/core';

const Chips = (props) => {
  return (
    <Chip
      size={props.size}
      label={props.label}
      color='primary'
      style={{ backgroundColor: getChipStyle(props.label) }}
    />
  );
};

const getChipStyle = (pokeType) => {
  switch (pokeType) {
    case 'Bug':
      return '#C3D21F';
    case 'Dark':
      return '#8E6956';
    case 'Dragon':
      return '#8774FF';
    case 'Electric':
      return '#FDE53D';
    case 'Fairy':
      return '#F9ADFF';
    case 'Fighting':
      return '#A85643';
    case 'Fire':
      return '#FA5643';
    case 'Flying':
      return '#79A4FF';
    case 'Ghost':
      return '#7873D4';
    case 'Grass':
      return '#8DD851';
    case 'Ground':
      return '#EDCC56';
    case 'Ice':
      return '#96F1FF';
    case 'Normal':
      return '#BDBDAE';
    case 'Poison':
      return '#AB5DA2';
    case 'Psychic':
      return '#F662B1';
    case 'Rock':
      return '#CDBD72';
    case 'Stell':
      return '#C4C2DB';
    case 'Water':
      return '#56AEFF';
    default:
      return null;
  }
};
const Weakness = (props) => {
  return (
    <>
      <h3>Weakness</h3>
      {props?.weaknesses?.map((t) => (
        <>
          <Chips size='small' label={t} />{' '}
        </>
      ))}
    </>
  );
};

const PokemonType = (props) => {
  return (
    <>
      {props?.type?.map((t) => (
        <>
          <Chips size='medium' label={t} />{' '}
        </>
      ))}
    </>
  );
};
export { PokemonType, Weakness };
