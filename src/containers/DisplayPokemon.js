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
const p = [
  {
    id: 1,
    name: 'Bulbasaur',
    height: '0.71 m',
    weight: '6.9 kg',
    genus: 'Seed Pokémon',
    description:
      'Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.',
    stats: [
      {
        statName: 'speed',
        baseStat: 45,
      },
      {
        statName: 'special-defense',
        baseStat: 65,
      },
      {
        statName: 'special-attack',
        baseStat: 65,
      },
      {
        statName: 'defense',
        baseStat: 49,
      },
      {
        statName: 'attack',
        baseStat: 49,
      },
      {
        statName: 'hp',
        baseStat: 45,
      },
    ],
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Ice', 'Flying', 'Psychic'],
    postEvolution: [
      {
        num: '002',
        name: 'Ivysaur',
      },
      {
        num: '003',
        name: 'Venusaur',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 2,
    name: 'Ivysaur',
    height: '0.99 m',
    weight: '13.0 kg',
    genus: 'Seed Pokémon',
    description:
      'There is a bud on this Pokémon’s back. To support its weight,\nIvysaur’s legs and trunk grow thick and strong.\nIf it starts spending more time lying in the sunlight,\nit’s a sign that the bud will bloom into a large flower soon.',
    stats: [
      {
        statName: 'speed',
        baseStat: 60,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 80,
      },
      {
        statName: 'defense',
        baseStat: 63,
      },
      {
        statName: 'attack',
        baseStat: 62,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Ice', 'Flying', 'Psychic'],
    preEvolution: [
      {
        num: '001',
        name: 'Bulbasaur',
      },
    ],
    postEvolution: [
      {
        num: '003',
        name: 'Venusaur',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 3,
    name: 'Venusaur',
    height: '2.01 m',
    weight: '100.0 kg',
    genus: 'Seed Pokémon',
    description:
      'There is a large flower on Venusaur’s back. The flower is said\nto take on vivid colors if it gets plenty of nutrition and sunlight.\nThe flower’s aroma soothes the emotions of people.',
    stats: [
      {
        statName: 'speed',
        baseStat: 80,
      },
      {
        statName: 'special-defense',
        baseStat: 100,
      },
      {
        statName: 'special-attack',
        baseStat: 100,
      },
      {
        statName: 'defense',
        baseStat: 83,
      },
      {
        statName: 'attack',
        baseStat: 82,
      },
      {
        statName: 'hp',
        baseStat: 80,
      },
    ],
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Ice', 'Flying', 'Psychic'],
    preEvolution: [
      {
        num: '001',
        name: 'Bulbasaur',
      },
      {
        num: '002',
        name: 'Ivysaur',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 4,
    name: 'Charmander',
    height: '0.61 m',
    weight: '8.5 kg',
    genus: 'Lizard Pokémon',
    description:
      'The flame that burns at the tip of its tail is an indication\nof its emotions. The flame wavers when Charmander\nis enjoying itself. If the Pokémon becomes enraged,\nthe flame burns fiercely.',
    stats: [
      {
        statName: 'speed',
        baseStat: 65,
      },
      {
        statName: 'special-defense',
        baseStat: 50,
      },
      {
        statName: 'special-attack',
        baseStat: 60,
      },
      {
        statName: 'defense',
        baseStat: 43,
      },
      {
        statName: 'attack',
        baseStat: 52,
      },
      {
        statName: 'hp',
        baseStat: 39,
      },
    ],
    type: ['Fire'],
    weakness: ['Water', 'Ground', 'Rock'],
    postEvolution: [
      {
        num: '005',
        name: 'Charmeleon',
      },
      {
        num: '006',
        name: 'Charizard',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'mountain',
  },
  {
    id: 5,
    name: 'Charmeleon',
    height: '1.09 m',
    weight: '19.0 kg',
    genus: 'Flame Pokémon',
    description:
      'Charmeleon mercilessly destroys its foes using its sharp claws.\nIf it encounters a strong foe, it turns aggressive.\nIn this excited state, the flame at the tip of its tail flares with a\nbluish white color.',
    stats: [
      {
        statName: 'speed',
        baseStat: 80,
      },
      {
        statName: 'special-defense',
        baseStat: 65,
      },
      {
        statName: 'special-attack',
        baseStat: 80,
      },
      {
        statName: 'defense',
        baseStat: 58,
      },
      {
        statName: 'attack',
        baseStat: 64,
      },
      {
        statName: 'hp',
        baseStat: 58,
      },
    ],
    type: ['Fire'],
    weakness: ['Water', 'Ground', 'Rock'],
    preEvolution: [
      {
        num: '004',
        name: 'Charmander',
      },
    ],
    postEvolution: [
      {
        num: '006',
        name: 'Charizard',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'mountain',
  },
  {
    id: 6,
    name: 'Charizard',
    height: '1.70 m',
    weight: '90.5 kg',
    genus: 'Flame Pokémon',
    description:
      'Charizard flies around the sky in search of powerful opponents.\nIt breathes fire of such great heat that it melts anything.\nHowever, it never turns its fiery breath on any opponent\nweaker than itself.',
    stats: [
      {
        statName: 'speed',
        baseStat: 100,
      },
      {
        statName: 'special-defense',
        baseStat: 85,
      },
      {
        statName: 'special-attack',
        baseStat: 109,
      },
      {
        statName: 'defense',
        baseStat: 78,
      },
      {
        statName: 'attack',
        baseStat: 84,
      },
      {
        statName: 'hp',
        baseStat: 78,
      },
    ],
    type: ['Fire', 'Flying'],
    weakness: ['Water', 'Electric', 'Rock'],
    preEvolution: [
      {
        num: '004',
        name: 'Charmander',
      },
      {
        num: '005',
        name: 'Charmeleon',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'mountain',
  },
  {
    id: 7,
    name: 'Squirtle',
    height: '0.51 m',
    weight: '9.0 kg',
    genus: 'Tiny Turtle Pokémon',
    description:
      'Squirtle’s shell is not merely used for protection.\nThe shell’s rounded shape and the grooves on its surface\nhelp minimize resistance in water, enabling this Pokémon\nto swim at high speeds.',
    stats: [
      {
        statName: 'speed',
        baseStat: 43,
      },
      {
        statName: 'special-defense',
        baseStat: 64,
      },
      {
        statName: 'special-attack',
        baseStat: 50,
      },
      {
        statName: 'defense',
        baseStat: 65,
      },
      {
        statName: 'attack',
        baseStat: 48,
      },
      {
        statName: 'hp',
        baseStat: 44,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    postEvolution: [
      {
        num: '008',
        name: 'Wartortle',
      },
      {
        num: '009',
        name: 'Blastoise',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'waters-edge',
  },
  {
    id: 8,
    name: 'Wartortle',
    height: '0.99 m',
    weight: '22.5 kg',
    genus: 'Turtle Pokémon',
    description:
      'Its tail is large and covered with a rich, thick fur. The tail\nbecomes increasingly deeper in color as Wartortle ages.\nThe scratches on its shell are evidence of this Pokémon’s\ntoughness as a battler.',
    stats: [
      {
        statName: 'speed',
        baseStat: 58,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 65,
      },
      {
        statName: 'defense',
        baseStat: 80,
      },
      {
        statName: 'attack',
        baseStat: 63,
      },
      {
        statName: 'hp',
        baseStat: 59,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    preEvolution: [
      {
        num: '007',
        name: 'Squirtle',
      },
    ],
    postEvolution: [
      {
        num: '009',
        name: 'Blastoise',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'waters-edge',
  },
  {
    id: 9,
    name: 'Blastoise',
    height: '1.60 m',
    weight: '85.5 kg',
    genus: 'Shellfish Pokémon',
    description:
      'Blastoise has water spouts that protrude from its shell.\nThe water spouts are very accurate. They can shoot bullets of\nwater with enough accuracy to strike empty cans from a\ndistance of over 160 feet.',
    stats: [
      {
        statName: 'speed',
        baseStat: 78,
      },
      {
        statName: 'special-defense',
        baseStat: 105,
      },
      {
        statName: 'special-attack',
        baseStat: 85,
      },
      {
        statName: 'defense',
        baseStat: 100,
      },
      {
        statName: 'attack',
        baseStat: 83,
      },
      {
        statName: 'hp',
        baseStat: 79,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    preEvolution: [
      {
        num: '007',
        name: 'Squirtle',
      },
      {
        num: '008',
        name: 'Wartortle',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'waters-edge',
  },
  {
    id: 10,
    name: 'Caterpie',
    height: '0.30 m',
    weight: '2.9 kg',
    genus: 'Worm Pokémon',
    description:
      'Caterpie has a voracious appetite. It can devour leaves bigger\nthan its body right before your eyes. From its antenna, this\nPokémon releases a terrifically strong odor.',
    stats: [
      {
        statName: 'speed',
        baseStat: 45,
      },
      {
        statName: 'special-defense',
        baseStat: 20,
      },
      {
        statName: 'special-attack',
        baseStat: 20,
      },
      {
        statName: 'defense',
        baseStat: 35,
      },
      {
        statName: 'attack',
        baseStat: 30,
      },
      {
        statName: 'hp',
        baseStat: 45,
      },
    ],
    type: ['Bug'],
    weakness: ['Fire', 'Flying', 'Rock'],
    postEvolution: [
      {
        num: '011',
        name: 'Metapod',
      },
      {
        num: '012',
        name: 'Butterfree',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'forest',
  },
  {
    id: 11,
    name: 'Metapod',
    height: '0.71 m',
    weight: '9.9 kg',
    genus: 'Cocoon Pokémon',
    description:
      'The shell covering this Pokémon’s body is as hard as an\niron slab. Metapod does not move very much. It stays still\nbecause it is preparing its soft innards for evolution inside\nthe hard shell.',
    stats: [
      {
        statName: 'speed',
        baseStat: 30,
      },
      {
        statName: 'special-defense',
        baseStat: 25,
      },
      {
        statName: 'special-attack',
        baseStat: 25,
      },
      {
        statName: 'defense',
        baseStat: 55,
      },
      {
        statName: 'attack',
        baseStat: 20,
      },
      {
        statName: 'hp',
        baseStat: 50,
      },
    ],
    type: ['Bug'],
    weakness: ['Fire', 'Flying', 'Rock'],
    preEvolution: [
      {
        num: '010',
        name: 'Caterpie',
      },
    ],
    postEvolution: [
      {
        num: '012',
        name: 'Butterfree',
      },
    ],
    baseHappiness: 70,
    captureRate: 120,
    habitat: 'forest',
  },
  {
    id: 12,
    name: 'Butterfree',
    height: '1.09 m',
    weight: '32.0 kg',
    genus: 'Butterfly Pokémon',
    description:
      'Butterfree has a superior ability to search for delicious honey\nfrom flowers. It can even search out, extract, and carry honey\nfrom flowers that are blooming over six miles from its nest.',
    stats: [
      {
        statName: 'speed',
        baseStat: 70,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 90,
      },
      {
        statName: 'defense',
        baseStat: 50,
      },
      {
        statName: 'attack',
        baseStat: 45,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Bug', 'Flying'],
    weakness: ['Fire', 'Electric', 'Ice', 'Flying', 'Rock'],
    preEvolution: [
      {
        num: '010',
        name: 'Caterpie',
      },
      {
        num: '011',
        name: 'Metapod',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'forest',
  },
  {
    id: 13,
    name: 'Weedle',
    height: '0.30 m',
    weight: '3.2 kg',
    genus: 'Hairy Bug Pokémon',
    description:
      'Weedle has an extremely acute sense of smell. It is capable of\ndistinguishing its favorite kinds of leaves from those it dislikes\njust by sniffing with its big red proboscis (nose).',
    stats: [
      {
        statName: 'speed',
        baseStat: 50,
      },
      {
        statName: 'special-defense',
        baseStat: 20,
      },
      {
        statName: 'special-attack',
        baseStat: 20,
      },
      {
        statName: 'defense',
        baseStat: 30,
      },
      {
        statName: 'attack',
        baseStat: 35,
      },
      {
        statName: 'hp',
        baseStat: 40,
      },
    ],
    type: ['Bug', 'Poison'],
    weakness: ['Fire', 'Flying', 'Psychic', 'Rock'],
    postEvolution: [
      {
        num: '014',
        name: 'Kakuna',
      },
      {
        num: '015',
        name: 'Beedrill',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'forest',
  },
  {
    id: 14,
    name: 'Kakuna',
    height: '0.61 m',
    weight: '10.0 kg',
    genus: 'Cocoon Pokémon',
    description:
      'Kakuna remains virtually immobile as it clings to a tree.\nHowever, on the inside, it is extremely busy as it prepares for\nits coming evolution. This is evident from how hot the shell\nbecomes to the touch.',
    stats: [
      {
        statName: 'speed',
        baseStat: 35,
      },
      {
        statName: 'special-defense',
        baseStat: 25,
      },
      {
        statName: 'special-attack',
        baseStat: 25,
      },
      {
        statName: 'defense',
        baseStat: 50,
      },
      {
        statName: 'attack',
        baseStat: 25,
      },
      {
        statName: 'hp',
        baseStat: 45,
      },
    ],
    type: ['Bug', 'Poison'],
    weakness: ['Fire', 'Flying', 'Psychic', 'Rock'],
    preEvolution: [
      {
        num: '013',
        name: 'Weedle',
      },
    ],
    postEvolution: [
      {
        num: '015',
        name: 'Beedrill',
      },
    ],
    baseHappiness: 70,
    captureRate: 120,
    habitat: 'forest',
  },
  {
    id: 15,
    name: 'Beedrill',
    height: '0.99 m',
    weight: '29.5 kg',
    genus: 'Poison Bee Pokémon',
    description:
      'Beedrill is extremely territorial. No one should ever approach\nits nest—this is for their own safety. If angered, they will attack\nin a furious swarm.',
    stats: [
      {
        statName: 'speed',
        baseStat: 75,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 45,
      },
      {
        statName: 'defense',
        baseStat: 40,
      },
      {
        statName: 'attack',
        baseStat: 90,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Bug', 'Poison'],
    weakness: ['Fire', 'Flying', 'Psychic', 'Rock'],
    preEvolution: [
      {
        num: '013',
        name: 'Weedle',
      },
      {
        num: '014',
        name: 'Kakuna',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'forest',
  },
  {
    id: 16,
    name: 'Pidgey',
    height: '0.30 m',
    weight: '1.8 kg',
    genus: 'Tiny Bird Pokémon',
    description:
      'Pidgey has an extremely sharp sense of direction. It is capable\nof unerringly returning home to its nest, however far it may be\nremoved from its familiar surroundings.',
    stats: [
      {
        statName: 'speed',
        baseStat: 56,
      },
      {
        statName: 'special-defense',
        baseStat: 35,
      },
      {
        statName: 'special-attack',
        baseStat: 35,
      },
      {
        statName: 'defense',
        baseStat: 40,
      },
      {
        statName: 'attack',
        baseStat: 45,
      },
      {
        statName: 'hp',
        baseStat: 40,
      },
    ],
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Rock'],
    postEvolution: [
      {
        num: '017',
        name: 'Pidgeotto',
      },
      {
        num: '018',
        name: 'Pidgeot',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'forest',
  },
  {
    id: 17,
    name: 'Pidgeotto',
    height: '1.09 m',
    weight: '30.0 kg',
    genus: 'Bird Pokémon',
    description:
      'Pidgeotto claims a large area as its own territory.\nThis Pokémon flies around, patrolling its living space.\nIf its territory is violated, it shows no mercy in thoroughly\npunishing the foe with its sharp claws.',
    stats: [
      {
        statName: 'speed',
        baseStat: 71,
      },
      {
        statName: 'special-defense',
        baseStat: 50,
      },
      {
        statName: 'special-attack',
        baseStat: 50,
      },
      {
        statName: 'defense',
        baseStat: 55,
      },
      {
        statName: 'attack',
        baseStat: 60,
      },
      {
        statName: 'hp',
        baseStat: 63,
      },
    ],
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Rock'],
    preEvolution: [
      {
        num: '016',
        name: 'Pidgey',
      },
    ],
    postEvolution: [
      {
        num: '018',
        name: 'Pidgeot',
      },
    ],
    baseHappiness: 70,
    captureRate: 120,
    habitat: 'forest',
  },
  {
    id: 18,
    name: 'Pidgeot',
    height: '1.50 m',
    weight: '39.5 kg',
    genus: 'Bird Pokémon',
    description:
      'This Pokémon has a dazzling plumage of beautifully\nglossy feathers. Many Trainers are captivated by the\nstriking beauty of the feathers on its head, compelling\nthem to choose Pidgeot as their Pokémon.',
    stats: [
      {
        statName: 'speed',
        baseStat: 101,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 70,
      },
      {
        statName: 'defense',
        baseStat: 75,
      },
      {
        statName: 'attack',
        baseStat: 80,
      },
      {
        statName: 'hp',
        baseStat: 83,
      },
    ],
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Rock'],
    preEvolution: [
      {
        num: '016',
        name: 'Pidgey',
      },
      {
        num: '017',
        name: 'Pidgeotto',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'forest',
  },
  {
    id: 19,
    name: 'Rattata',
    height: '0.30 m',
    weight: '3.5 kg',
    genus: 'Mouse Pokémon',
    description:
      'Rattata is cautious in the extreme. Even while it is asleep,\nit constantly listens by moving its ears around. It is not picky\nabout where it lives—it will make its nest anywhere.',
    stats: [
      {
        statName: 'speed',
        baseStat: 72,
      },
      {
        statName: 'special-defense',
        baseStat: 35,
      },
      {
        statName: 'special-attack',
        baseStat: 25,
      },
      {
        statName: 'defense',
        baseStat: 35,
      },
      {
        statName: 'attack',
        baseStat: 56,
      },
      {
        statName: 'hp',
        baseStat: 30,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    postEvolution: [
      {
        num: '020',
        name: 'Raticate',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'grassland',
  },
  {
    id: 20,
    name: 'Raticate',
    height: '0.71 m',
    weight: '18.5 kg',
    genus: 'Mouse Pokémon',
    description:
      'Raticate’s sturdy fangs grow steadily. To keep them ground\ndown, it gnaws on rocks and logs. It may even chew on the\nwalls of houses.',
    stats: [
      {
        statName: 'speed',
        baseStat: 97,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 50,
      },
      {
        statName: 'defense',
        baseStat: 60,
      },
      {
        statName: 'attack',
        baseStat: 81,
      },
      {
        statName: 'hp',
        baseStat: 55,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    preEvolution: [
      {
        num: '019',
        name: 'Rattata',
      },
    ],
    baseHappiness: 70,
    captureRate: 127,
    habitat: 'grassland',
  },
  {
    id: 21,
    name: 'Spearow',
    height: '0.30 m',
    weight: '2.0 kg',
    genus: 'Tiny Bird Pokémon',
    description:
      'Spearow has a very loud cry that can be heard over\nhalf a mile away. If its high, keening cry is heard echoing all\naround, it is a sign that they are warning each other of danger.',
    stats: [
      {
        statName: 'speed',
        baseStat: 70,
      },
      {
        statName: 'special-defense',
        baseStat: 31,
      },
      {
        statName: 'special-attack',
        baseStat: 31,
      },
      {
        statName: 'defense',
        baseStat: 30,
      },
      {
        statName: 'attack',
        baseStat: 60,
      },
      {
        statName: 'hp',
        baseStat: 40,
      },
    ],
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Rock'],
    postEvolution: [
      {
        num: '022',
        name: 'Fearow',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'rough-terrain',
  },
  {
    id: 22,
    name: 'Fearow',
    height: '1.19 m',
    weight: '38.0 kg',
    genus: 'Beak Pokémon',
    description:
      'Fearow is recognized by its long neck and elongated beak.\nThey are conveniently shaped for catching prey in soil\nor water. It deftly moves its long and skinny beak to\npluck prey.',
    stats: [
      {
        statName: 'speed',
        baseStat: 100,
      },
      {
        statName: 'special-defense',
        baseStat: 61,
      },
      {
        statName: 'special-attack',
        baseStat: 61,
      },
      {
        statName: 'defense',
        baseStat: 65,
      },
      {
        statName: 'attack',
        baseStat: 90,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Rock'],
    preEvolution: [
      {
        num: '021',
        name: 'Spearow',
      },
    ],
    baseHappiness: 70,
    captureRate: 90,
    habitat: 'rough-terrain',
  },
  {
    id: 23,
    name: 'Ekans',
    height: '2.01 m',
    weight: '6.9 kg',
    genus: 'Snake Pokémon',
    description:
      'Ekans curls itself up in a spiral while it rests. Assuming this\nposition allows it to quickly respond to a threat from any\ndirection with a glare from its upraised head.',
    stats: [
      {
        statName: 'speed',
        baseStat: 55,
      },
      {
        statName: 'special-defense',
        baseStat: 54,
      },
      {
        statName: 'special-attack',
        baseStat: 40,
      },
      {
        statName: 'defense',
        baseStat: 44,
      },
      {
        statName: 'attack',
        baseStat: 60,
      },
      {
        statName: 'hp',
        baseStat: 35,
      },
    ],
    type: ['Poison'],
    weakness: ['Ground', 'Psychic'],
    postEvolution: [
      {
        num: '024',
        name: 'Arbok',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'grassland',
  },
  {
    id: 24,
    name: 'Arbok',
    height: '3.51 m',
    weight: '65.0 kg',
    genus: 'Cobra Pokémon',
    description:
      'This Pokémon is terrifically strong in order to constrict things\nwith its body. It can even flatten steel oil drums.\nOnce Arbok wraps its body around its foe, escaping its\ncrunching embrace is impossible.',
    stats: [
      {
        statName: 'speed',
        baseStat: 80,
      },
      {
        statName: 'special-defense',
        baseStat: 79,
      },
      {
        statName: 'special-attack',
        baseStat: 65,
      },
      {
        statName: 'defense',
        baseStat: 69,
      },
      {
        statName: 'attack',
        baseStat: 95,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Poison'],
    weakness: ['Ground', 'Psychic'],
    preEvolution: [
      {
        num: '023',
        name: 'Ekans',
      },
    ],
    baseHappiness: 70,
    captureRate: 90,
    habitat: 'grassland',
  },
  {
    id: 25,
    name: 'Pikachu',
    height: '0.41 m',
    weight: '6.0 kg',
    genus: 'Mouse Pokémon',
    description:
      'Whenever Pikachu comes across something new,\nit blasts it with a jolt of electricity. If you come across a\nblackened berry, it’s evidence that this Pokémon mistook the\nintensity of its charge.',
    stats: [
      {
        statName: 'speed',
        baseStat: 90,
      },
      {
        statName: 'special-defense',
        baseStat: 50,
      },
      {
        statName: 'special-attack',
        baseStat: 50,
      },
      {
        statName: 'defense',
        baseStat: 40,
      },
      {
        statName: 'attack',
        baseStat: 55,
      },
      {
        statName: 'hp',
        baseStat: 35,
      },
    ],
    type: ['Electric'],
    weakness: ['Ground'],
    postEvolution: [
      {
        num: '026',
        name: 'Raichu',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'forest',
  },
  {
    id: 26,
    name: 'Raichu',
    height: '0.79 m',
    weight: '30.0 kg',
    genus: 'Mouse Pokémon',
    description:
      'If the electrical sacs become excessively charged,\nRaichu plants its tail in the ground and discharges.\nScorched patches of ground will be found near this\nPokémon’s nest.',
    stats: [
      {
        statName: 'speed',
        baseStat: 110,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 90,
      },
      {
        statName: 'defense',
        baseStat: 55,
      },
      {
        statName: 'attack',
        baseStat: 90,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Electric'],
    weakness: ['Ground'],
    preEvolution: [
      {
        num: '025',
        name: 'Pikachu',
      },
    ],
    baseHappiness: 70,
    captureRate: 75,
    habitat: 'forest',
  },
  {
    id: 27,
    name: 'Sandshrew',
    height: '0.61 m',
    weight: '12.0 kg',
    genus: 'Mouse Pokémon',
    description:
      'Sandshrew’s body is configured to absorb water without waste,\nenabling it to survive in an arid desert. This Pokémon curls up\nto protect itself from its enemies.',
    stats: [
      {
        statName: 'speed',
        baseStat: 40,
      },
      {
        statName: 'special-defense',
        baseStat: 30,
      },
      {
        statName: 'special-attack',
        baseStat: 20,
      },
      {
        statName: 'defense',
        baseStat: 85,
      },
      {
        statName: 'attack',
        baseStat: 75,
      },
      {
        statName: 'hp',
        baseStat: 50,
      },
    ],
    type: ['Ground'],
    weakness: ['Water', 'Grass', 'Ice'],
    postEvolution: [
      {
        num: '028',
        name: 'Sandslash',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'rough-terrain',
  },
  {
    id: 28,
    name: 'Sandslash',
    height: '0.99 m',
    weight: '29.5 kg',
    genus: 'Mouse Pokémon',
    description:
      'Sandslash’s body is covered by tough spikes, which are\nhardened sections of its hide. Once a year, the old spikes\nfall out, to be replaced with new spikes that grow out from\nbeneath the old ones.',
    stats: [
      {
        statName: 'speed',
        baseStat: 65,
      },
      {
        statName: 'special-defense',
        baseStat: 55,
      },
      {
        statName: 'special-attack',
        baseStat: 45,
      },
      {
        statName: 'defense',
        baseStat: 110,
      },
      {
        statName: 'attack',
        baseStat: 100,
      },
      {
        statName: 'hp',
        baseStat: 75,
      },
    ],
    type: ['Ground'],
    weakness: ['Water', 'Grass', 'Ice'],
    preEvolution: [
      {
        num: '027',
        name: 'Sandshrew',
      },
    ],
    baseHappiness: 70,
    captureRate: 90,
    habitat: 'rough-terrain',
  },
  {
    id: 29,
    name: 'Nidoran ♀ (Female)',
    height: '0.41 m',
    weight: '7.0 kg',
    genus: 'Poison Pin Pokémon',
    description:
      'Nidoran♀ has barbs that secrete a powerful poison.\nThey are thought to have developed as protection for\nthis small-bodied Pokémon. When enraged, it releases\na horrible toxin from its horn.',
    stats: [
      {
        statName: 'speed',
        baseStat: 41,
      },
      {
        statName: 'special-defense',
        baseStat: 40,
      },
      {
        statName: 'special-attack',
        baseStat: 40,
      },
      {
        statName: 'defense',
        baseStat: 52,
      },
      {
        statName: 'attack',
        baseStat: 47,
      },
      {
        statName: 'hp',
        baseStat: 55,
      },
    ],
    type: ['Poison'],
    weakness: ['Ground', 'Psychic'],
    postEvolution: [
      {
        num: '030',
        name: 'Nidorina',
      },
      {
        num: '031',
        name: 'Nidoqueen',
      },
    ],
    baseHappiness: 70,
    captureRate: 235,
    habitat: 'grassland',
  },
  {
    id: 30,
    name: 'Nidorina',
    height: '0.79 m',
    weight: '20.0 kg',
    genus: 'Poison Pin Pokémon',
    description:
      'When Nidorina are with their friends or family, they keep their\nbarbs tucked away to prevent hurting each other.\nThis Pokémon appears to become nervous if separated from\nthe others.',
    stats: [
      {
        statName: 'speed',
        baseStat: 56,
      },
      {
        statName: 'special-defense',
        baseStat: 55,
      },
      {
        statName: 'special-attack',
        baseStat: 55,
      },
      {
        statName: 'defense',
        baseStat: 67,
      },
      {
        statName: 'attack',
        baseStat: 62,
      },
      {
        statName: 'hp',
        baseStat: 70,
      },
    ],
    type: ['Poison'],
    weakness: ['Ground', 'Psychic'],
    preEvolution: [
      {
        num: '029',
        name: 'Nidoran(Female)',
      },
    ],
    postEvolution: [
      {
        num: '031',
        name: 'Nidoqueen',
      },
    ],
    baseHappiness: 70,
    captureRate: 120,
    habitat: 'grassland',
  },
  {
    id: 31,
    name: 'Nidoqueen',
    height: '1.30 m',
    weight: '60.0 kg',
    genus: 'Drill Pokémon',
    description:
      'Nidoqueen’s body is encased in extremely hard scales.\nIt is adept at sending foes flying with harsh tackles.\nThis Pokémon is at its strongest when it is defending its young.',
    stats: [
      {
        statName: 'speed',
        baseStat: 76,
      },
      {
        statName: 'special-defense',
        baseStat: 85,
      },
      {
        statName: 'special-attack',
        baseStat: 75,
      },
      {
        statName: 'defense',
        baseStat: 87,
      },
      {
        statName: 'attack',
        baseStat: 92,
      },
      {
        statName: 'hp',
        baseStat: 90,
      },
    ],
    type: ['Poison', 'Ground'],
    weakness: ['Water', 'Ice', 'Ground', 'Psychic'],
    preEvolution: [
      {
        num: '029',
        name: 'Nidoran(Female)',
      },
      {
        num: '030',
        name: 'Nidorina',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 32,
    name: 'Nidoran ♂ (Male)',
    height: '0.51 m',
    weight: '9.0 kg',
    genus: 'Poison Pin Pokémon',
    description:
      'Nidoran♂ has developed muscles for moving its ears. Thanks\nto them, the ears can be freely moved in any direction. Even\nthe slightest sound does not escape this Pokémon’s notice.',
    stats: [
      {
        statName: 'speed',
        baseStat: 50,
      },
      {
        statName: 'special-defense',
        baseStat: 40,
      },
      {
        statName: 'special-attack',
        baseStat: 40,
      },
      {
        statName: 'defense',
        baseStat: 40,
      },
      {
        statName: 'attack',
        baseStat: 57,
      },
      {
        statName: 'hp',
        baseStat: 46,
      },
    ],
    type: ['Poison'],
    weakness: ['Ground', 'Psychic'],
    postEvolution: [
      {
        num: '033',
        name: 'Nidorino',
      },
      {
        num: '034',
        name: 'Nidoking',
      },
    ],
    baseHappiness: 70,
    captureRate: 235,
    habitat: 'grassland',
  },
  {
    id: 33,
    name: 'Nidorino',
    height: '0.89 m',
    weight: '19.5 kg',
    genus: 'Poison Pin Pokémon',
    description:
      'Nidorino has a horn that is harder than a diamond. If it senses\na hostile presence, all the barbs on its back bristle up at once,\nand it challenges the foe with all its might.',
    stats: [
      {
        statName: 'speed',
        baseStat: 65,
      },
      {
        statName: 'special-defense',
        baseStat: 55,
      },
      {
        statName: 'special-attack',
        baseStat: 55,
      },
      {
        statName: 'defense',
        baseStat: 57,
      },
      {
        statName: 'attack',
        baseStat: 72,
      },
      {
        statName: 'hp',
        baseStat: 61,
      },
    ],
    type: ['Poison'],
    weakness: ['Ground', 'Psychic'],
    preEvolution: [
      {
        num: '032',
        name: 'Nidoran(Male)',
      },
    ],
    postEvolution: [
      {
        num: '034',
        name: 'Nidoking',
      },
    ],
    baseHappiness: 70,
    captureRate: 120,
    habitat: 'grassland',
  },
  {
    id: 34,
    name: 'Nidoking',
    height: '1.40 m',
    weight: '62.0 kg',
    genus: 'Drill Pokémon',
    description:
      'Nidoking’s thick tail packs enormously destructive power.\nWith one swing, it can topple a metal transmission tower.\nOnce this Pokémon goes on a rampage, there is no stopping it.',
    stats: [
      {
        statName: 'speed',
        baseStat: 85,
      },
      {
        statName: 'special-defense',
        baseStat: 75,
      },
      {
        statName: 'special-attack',
        baseStat: 85,
      },
      {
        statName: 'defense',
        baseStat: 77,
      },
      {
        statName: 'attack',
        baseStat: 102,
      },
      {
        statName: 'hp',
        baseStat: 81,
      },
    ],
    type: ['Poison', 'Ground'],
    weakness: ['Water', 'Ice', 'Ground', 'Psychic'],
    preEvolution: [
      {
        num: '032',
        name: 'Nidoran(Male)',
      },
      {
        num: '033',
        name: 'Nidorino',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 35,
    name: 'Clefairy',
    height: '0.61 m',
    weight: '7.5 kg',
    genus: 'Fairy Pokémon',
    description:
      'On every night of a full moon, groups of this Pokémon come\nout to play. When dawn arrives, the tired Clefairy return to their\nquiet mountain retreats and go to sleep nestled up against\neach other.',
    stats: [
      {
        statName: 'speed',
        baseStat: 35,
      },
      {
        statName: 'special-defense',
        baseStat: 65,
      },
      {
        statName: 'special-attack',
        baseStat: 60,
      },
      {
        statName: 'defense',
        baseStat: 48,
      },
      {
        statName: 'attack',
        baseStat: 45,
      },
      {
        statName: 'hp',
        baseStat: 70,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    postEvolution: [
      {
        num: '036',
        name: 'Clefable',
      },
    ],
    baseHappiness: 140,
    captureRate: 150,
    habitat: 'mountain',
  },
  {
    id: 36,
    name: 'Clefable',
    height: '1.30 m',
    weight: '40.0 kg',
    genus: 'Fairy Pokémon',
    description:
      'Clefable moves by skipping lightly as if it were flying using its\nwings. Its bouncy step lets it even walk on water. It is known\nto take strolls on lakes on quiet, moonlit nights.',
    stats: [
      {
        statName: 'speed',
        baseStat: 60,
      },
      {
        statName: 'special-defense',
        baseStat: 90,
      },
      {
        statName: 'special-attack',
        baseStat: 95,
      },
      {
        statName: 'defense',
        baseStat: 73,
      },
      {
        statName: 'attack',
        baseStat: 70,
      },
      {
        statName: 'hp',
        baseStat: 95,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    preEvolution: [
      {
        num: '035',
        name: 'Clefairy',
      },
    ],
    baseHappiness: 140,
    captureRate: 25,
    habitat: 'mountain',
  },
  {
    id: 37,
    name: 'Vulpix',
    height: '0.61 m',
    weight: '9.9 kg',
    genus: 'Fox Pokémon',
    description:
      'At the time of its birth, Vulpix has one white tail. The tail\nseparates into six if this Pokémon receives plenty of love\nfrom its Trainer. The six tails become magnificently curled.',
    stats: [
      {
        statName: 'speed',
        baseStat: 65,
      },
      {
        statName: 'special-defense',
        baseStat: 65,
      },
      {
        statName: 'special-attack',
        baseStat: 50,
      },
      {
        statName: 'defense',
        baseStat: 40,
      },
      {
        statName: 'attack',
        baseStat: 41,
      },
      {
        statName: 'hp',
        baseStat: 38,
      },
    ],
    type: ['Fire'],
    weakness: ['Water', 'Ground', 'Rock'],
    postEvolution: [
      {
        num: '038',
        name: 'Ninetales',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'grassland',
  },
  {
    id: 38,
    name: 'Ninetales',
    height: '1.09 m',
    weight: '19.9 kg',
    genus: 'Fox Pokémon',
    description:
      'Ninetales casts a sinister light from its bright red eyes to gain\ntotal control over its foe’s mind. This Pokémon is said to live\nfor a thousand years.',
    stats: [
      {
        statName: 'speed',
        baseStat: 100,
      },
      {
        statName: 'special-defense',
        baseStat: 100,
      },
      {
        statName: 'special-attack',
        baseStat: 81,
      },
      {
        statName: 'defense',
        baseStat: 75,
      },
      {
        statName: 'attack',
        baseStat: 76,
      },
      {
        statName: 'hp',
        baseStat: 73,
      },
    ],
    type: ['Fire'],
    weakness: ['Water', 'Ground', 'Rock'],
    preEvolution: [
      {
        num: '037',
        name: 'Vulpix',
      },
    ],
    baseHappiness: 70,
    captureRate: 75,
    habitat: 'grassland',
  },
  {
    id: 39,
    name: 'Jigglypuff',
    height: '0.51 m',
    weight: '5.5 kg',
    genus: 'Balloon Pokémon',
    description:
      'Jigglypuff’s vocal cords can freely adjust the wavelength of its\nvoice. This Pokémon uses this ability to sing at precisely the\nright wavelength to make its foes most drowsy.',
    stats: [
      {
        statName: 'speed',
        baseStat: 20,
      },
      {
        statName: 'special-defense',
        baseStat: 25,
      },
      {
        statName: 'special-attack',
        baseStat: 45,
      },
      {
        statName: 'defense',
        baseStat: 20,
      },
      {
        statName: 'attack',
        baseStat: 45,
      },
      {
        statName: 'hp',
        baseStat: 115,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    postEvolution: [
      {
        num: '040',
        name: 'Wigglytuff',
      },
    ],
    baseHappiness: 70,
    captureRate: 170,
    habitat: 'grassland',
  },
  {
    id: 40,
    name: 'Wigglytuff',
    height: '0.99 m',
    weight: '12.0 kg',
    genus: 'Balloon Pokémon',
    description:
      'Wigglytuff has large, saucerlike eyes. The surfaces of its eyes\nare always covered with a thin layer of tears. If any dust gets in\nthis Pokémon’s eyes, it is quickly washed away.',
    stats: [
      {
        statName: 'speed',
        baseStat: 45,
      },
      {
        statName: 'special-defense',
        baseStat: 50,
      },
      {
        statName: 'special-attack',
        baseStat: 85,
      },
      {
        statName: 'defense',
        baseStat: 45,
      },
      {
        statName: 'attack',
        baseStat: 70,
      },
      {
        statName: 'hp',
        baseStat: 140,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    preEvolution: [
      {
        num: '039',
        name: 'Jigglypuff',
      },
    ],
    baseHappiness: 70,
    captureRate: 50,
    habitat: 'grassland',
  },
  {
    id: 41,
    name: 'Zubat',
    height: '0.79 m',
    weight: '7.5 kg',
    genus: 'Bat Pokémon',
    description:
      'Zubat remains quietly unmoving in a dark spot during the bright\ndaylight hours. It does so because prolonged exposure to the\nsun causes its body to become slightly burned.',
    stats: [
      {
        statName: 'speed',
        baseStat: 55,
      },
      {
        statName: 'special-defense',
        baseStat: 40,
      },
      {
        statName: 'special-attack',
        baseStat: 30,
      },
      {
        statName: 'defense',
        baseStat: 35,
      },
      {
        statName: 'attack',
        baseStat: 45,
      },
      {
        statName: 'hp',
        baseStat: 40,
      },
    ],
    type: ['Poison', 'Flying'],
    weakness: ['Electric', 'Ice', 'Psychic', 'Rock'],
    postEvolution: [
      {
        num: '042',
        name: 'Golbat',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'cave',
  },
  {
    id: 42,
    name: 'Golbat',
    height: '1.60 m',
    weight: '55.0 kg',
    genus: 'Bat Pokémon',
    description:
      'Golbat loves to drink the blood of living things. It is particularly\nactive in the pitch black of night. This Pokémon flits around in\nthe night skies, seeking fresh blood.',
    stats: [
      {
        statName: 'speed',
        baseStat: 90,
      },
      {
        statName: 'special-defense',
        baseStat: 75,
      },
      {
        statName: 'special-attack',
        baseStat: 65,
      },
      {
        statName: 'defense',
        baseStat: 70,
      },
      {
        statName: 'attack',
        baseStat: 80,
      },
      {
        statName: 'hp',
        baseStat: 75,
      },
    ],
    type: ['Poison', 'Flying'],
    weakness: ['Electric', 'Ice', 'Psychic', 'Rock'],
    preEvolution: [
      {
        num: '041',
        name: 'Zubat',
      },
    ],
    baseHappiness: 70,
    captureRate: 90,
    habitat: 'cave',
  },
  {
    id: 43,
    name: 'Oddish',
    height: '0.51 m',
    weight: '5.4 kg',
    genus: 'Weed Pokémon',
    description:
      'During the daytime, Oddish buries itself in soil to absorb\nnutrients from the ground using its entire body.\nThe more fertile the soil, the glossier its leaves become.',
    stats: [
      {
        statName: 'speed',
        baseStat: 30,
      },
      {
        statName: 'special-defense',
        baseStat: 65,
      },
      {
        statName: 'special-attack',
        baseStat: 75,
      },
      {
        statName: 'defense',
        baseStat: 55,
      },
      {
        statName: 'attack',
        baseStat: 50,
      },
      {
        statName: 'hp',
        baseStat: 45,
      },
    ],
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Ice', 'Flying', 'Psychic'],
    postEvolution: [
      {
        num: '044',
        name: 'Gloom',
      },
      {
        num: '045',
        name: 'Vileplume',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'grassland',
  },
  {
    id: 44,
    name: 'Gloom',
    height: '0.79 m',
    weight: '8.6 kg',
    genus: 'Weed Pokémon',
    description:
      'Gloom releases a foul fragrance from the pistil of its flower.\nWhen faced with danger, the stench worsens.\nIf this Pokémon is feeling calm and secure, it does not\nrelease its usual stinky aroma.',
    stats: [
      {
        statName: 'speed',
        baseStat: 40,
      },
      {
        statName: 'special-defense',
        baseStat: 75,
      },
      {
        statName: 'special-attack',
        baseStat: 85,
      },
      {
        statName: 'defense',
        baseStat: 70,
      },
      {
        statName: 'attack',
        baseStat: 65,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Ice', 'Flying', 'Psychic'],
    preEvolution: [
      {
        num: '043',
        name: 'Oddish',
      },
    ],
    postEvolution: [
      {
        num: '045',
        name: 'Vileplume',
      },
    ],
    baseHappiness: 70,
    captureRate: 120,
    habitat: 'grassland',
  },
  {
    id: 45,
    name: 'Vileplume',
    height: '1.19 m',
    weight: '18.6 kg',
    genus: 'Flower Pokémon',
    description:
      'Vileplume’s toxic pollen triggers atrocious allergy attacks.\nThat’s why it is advisable never to approach any attractive\nflowers in a jungle, however pretty they may be.',
    stats: [
      {
        statName: 'speed',
        baseStat: 50,
      },
      {
        statName: 'special-defense',
        baseStat: 90,
      },
      {
        statName: 'special-attack',
        baseStat: 110,
      },
      {
        statName: 'defense',
        baseStat: 85,
      },
      {
        statName: 'attack',
        baseStat: 80,
      },
      {
        statName: 'hp',
        baseStat: 75,
      },
    ],
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Ice', 'Flying', 'Psychic'],
    preEvolution: [
      {
        num: '043',
        name: 'Oddish',
      },
      {
        num: '044',
        name: 'Gloom',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 46,
    name: 'Paras',
    height: '0.30 m',
    weight: '5.4 kg',
    genus: 'Mushroom Pokémon',
    description:
      'Paras has parasitic mushrooms growing on its back called\ntochukaso. They grow large by drawing nutrients from this\nBug Pokémon host. They are highly valued as a medicine\nfor extending life.',
    stats: [
      {
        statName: 'speed',
        baseStat: 25,
      },
      {
        statName: 'special-defense',
        baseStat: 55,
      },
      {
        statName: 'special-attack',
        baseStat: 45,
      },
      {
        statName: 'defense',
        baseStat: 55,
      },
      {
        statName: 'attack',
        baseStat: 70,
      },
      {
        statName: 'hp',
        baseStat: 35,
      },
    ],
    type: ['Bug', 'Grass'],
    weakness: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock'],
    postEvolution: [
      {
        num: '047',
        name: 'Parasect',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'forest',
  },
  {
    id: 47,
    name: 'Parasect',
    height: '0.99 m',
    weight: '29.5 kg',
    genus: 'Mushroom Pokémon',
    description:
      'Parasect is known to infest large trees en masse and drain\nnutrients from the lower trunk and roots. When an infested tree\ndies, they move onto another tree all at once.',
    stats: [
      {
        statName: 'speed',
        baseStat: 30,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 60,
      },
      {
        statName: 'defense',
        baseStat: 80,
      },
      {
        statName: 'attack',
        baseStat: 95,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Bug', 'Grass'],
    weakness: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock'],
    preEvolution: [
      {
        num: '046',
        name: 'Paras',
      },
    ],
    baseHappiness: 70,
    captureRate: 75,
    habitat: 'forest',
  },
  {
    id: 48,
    name: 'Venonat',
    height: '0.99 m',
    weight: '30.0 kg',
    genus: 'Insect Pokémon',
    description:
      'Venonat is said to have evolved with a coat of thin,\nstiff hair that covers its entire body for protection.\nIt possesses large eyes that never fail to spot even\nminuscule prey.',
    stats: [
      {
        statName: 'speed',
        baseStat: 45,
      },
      {
        statName: 'special-defense',
        baseStat: 55,
      },
      {
        statName: 'special-attack',
        baseStat: 40,
      },
      {
        statName: 'defense',
        baseStat: 50,
      },
      {
        statName: 'attack',
        baseStat: 55,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Bug', 'Poison'],
    weakness: ['Fire', 'Flying', 'Psychic', 'Rock'],
    postEvolution: [
      {
        num: '049',
        name: 'Venomoth',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'forest',
  },
  {
    id: 49,
    name: 'Venomoth',
    height: '1.50 m',
    weight: '12.5 kg',
    genus: 'Poison Moth Pokémon',
    description:
      'Venomoth is nocturnal—it is a Pokémon that only becomes\nactive at night. Its favorite prey are small insects that gather\naround streetlights, attracted by the light in the darkness.',
    stats: [
      {
        statName: 'speed',
        baseStat: 90,
      },
      {
        statName: 'special-defense',
        baseStat: 75,
      },
      {
        statName: 'special-attack',
        baseStat: 90,
      },
      {
        statName: 'defense',
        baseStat: 60,
      },
      {
        statName: 'attack',
        baseStat: 65,
      },
      {
        statName: 'hp',
        baseStat: 70,
      },
    ],
    type: ['Bug', 'Poison'],
    weakness: ['Fire', 'Flying', 'Psychic', 'Rock'],
    preEvolution: [
      {
        num: '048',
        name: 'Venonat',
      },
    ],
    baseHappiness: 70,
    captureRate: 75,
    habitat: 'forest',
  },
  {
    id: 50,
    name: 'Diglett',
    height: '0.20 m',
    weight: '0.8 kg',
    genus: 'Mole Pokémon',
    description:
      'Diglett are raised in most farms. The reason is simple—\nwherever this Pokémon burrows, the soil is left perfectly tilled\nfor planting crops. This soil is made ideal for growing\ndelicious vegetables.',
    stats: [
      {
        statName: 'speed',
        baseStat: 95,
      },
      {
        statName: 'special-defense',
        baseStat: 45,
      },
      {
        statName: 'special-attack',
        baseStat: 35,
      },
      {
        statName: 'defense',
        baseStat: 25,
      },
      {
        statName: 'attack',
        baseStat: 55,
      },
      {
        statName: 'hp',
        baseStat: 10,
      },
    ],
    type: ['Ground'],
    weakness: ['Water', 'Grass', 'Ice'],
    postEvolution: [
      {
        num: '051',
        name: 'Dugtrio',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'cave',
  },
  {
    id: 51,
    name: 'Dugtrio',
    height: '0.71 m',
    weight: '33.3 kg',
    genus: 'Mole Pokémon',
    description:
      'Dugtrio are actually triplets that emerged from one body.\nAs a result, each triplet thinks exactly like the other\ntwo triplets. They work cooperatively to burrow endlessly.',
    stats: [
      {
        statName: 'speed',
        baseStat: 120,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 50,
      },
      {
        statName: 'defense',
        baseStat: 50,
      },
      {
        statName: 'attack',
        baseStat: 100,
      },
      {
        statName: 'hp',
        baseStat: 35,
      },
    ],
    type: ['Ground'],
    weakness: ['Water', 'Grass', 'Ice'],
    preEvolution: [
      {
        num: '050',
        name: 'Diglett',
      },
    ],
    baseHappiness: 70,
    captureRate: 50,
    habitat: 'cave',
  },
  {
    id: 52,
    name: 'Meowth',
    height: '0.41 m',
    weight: '4.2 kg',
    genus: 'Scratch Cat Pokémon',
    description:
      'Meowth withdraws its sharp claws into its paws to slinkily sneak\nabout without making any incriminating footsteps.\nFor some reason, this Pokémon loves shiny coins that\nglitter with light.',
    stats: [
      {
        statName: 'speed',
        baseStat: 90,
      },
      {
        statName: 'special-defense',
        baseStat: 40,
      },
      {
        statName: 'special-attack',
        baseStat: 40,
      },
      {
        statName: 'defense',
        baseStat: 35,
      },
      {
        statName: 'attack',
        baseStat: 45,
      },
      {
        statName: 'hp',
        baseStat: 40,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    postEvolution: [
      {
        num: '053',
        name: 'Persian',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'urban',
  },
  {
    id: 53,
    name: 'Persian',
    height: '0.99 m',
    weight: '32.0 kg',
    genus: 'Classy Cat Pokémon',
    description:
      'Persian has six bold whiskers that give it a look of toughness.\nThe whiskers sense air movements to determine what is in the\nPokémon’s surrounding vicinity. It becomes docile if grabbed\nby the whiskers.',
    stats: [
      {
        statName: 'speed',
        baseStat: 115,
      },
      {
        statName: 'special-defense',
        baseStat: 65,
      },
      {
        statName: 'special-attack',
        baseStat: 65,
      },
      {
        statName: 'defense',
        baseStat: 60,
      },
      {
        statName: 'attack',
        baseStat: 70,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    preEvolution: [
      {
        num: '052',
        name: 'Meowth',
      },
    ],
    baseHappiness: 70,
    captureRate: 90,
    habitat: 'urban',
  },
  {
    id: 54,
    name: 'Psyduck',
    height: '0.79 m',
    weight: '19.6 kg',
    genus: 'Duck Pokémon',
    description:
      'Psyduck uses a mysterious power. When it does so, this\nPokémon generates brain waves that are supposedly only seen\nin sleepers. This discovery spurred controversy\namong scholars.',
    stats: [
      {
        statName: 'speed',
        baseStat: 55,
      },
      {
        statName: 'special-defense',
        baseStat: 50,
      },
      {
        statName: 'special-attack',
        baseStat: 65,
      },
      {
        statName: 'defense',
        baseStat: 48,
      },
      {
        statName: 'attack',
        baseStat: 52,
      },
      {
        statName: 'hp',
        baseStat: 50,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    postEvolution: [
      {
        num: '055',
        name: 'Golduck',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'waters-edge',
  },
  {
    id: 55,
    name: 'Golduck',
    height: '1.70 m',
    weight: '76.6 kg',
    genus: 'Duck Pokémon',
    description:
      'The webbed flippers on its forelegs and hind legs and the\nstreamlined body of Golduck give it frightening speed.\nThis Pokémon is definitely much faster than even the most\nathletic swimmer.',
    stats: [
      {
        statName: 'speed',
        baseStat: 85,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 95,
      },
      {
        statName: 'defense',
        baseStat: 78,
      },
      {
        statName: 'attack',
        baseStat: 82,
      },
      {
        statName: 'hp',
        baseStat: 80,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    preEvolution: [
      {
        num: '054',
        name: 'Psyduck',
      },
    ],
    baseHappiness: 70,
    captureRate: 75,
    habitat: 'waters-edge',
  },
  {
    id: 56,
    name: 'Mankey',
    height: '0.51 m',
    weight: '28.0 kg',
    genus: 'Pig Monkey Pokémon',
    description:
      'When Mankey starts shaking and its nasal breathing turns\nrough, it’s a sure sign that it is becoming angry. However,\nbecause it goes into a towering rage almost instantly,\nit is impossible for anyone to flee its wrath.',
    stats: [
      {
        statName: 'speed',
        baseStat: 70,
      },
      {
        statName: 'special-defense',
        baseStat: 45,
      },
      {
        statName: 'special-attack',
        baseStat: 35,
      },
      {
        statName: 'defense',
        baseStat: 35,
      },
      {
        statName: 'attack',
        baseStat: 80,
      },
      {
        statName: 'hp',
        baseStat: 40,
      },
    ],
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy'],
    postEvolution: [
      {
        num: '057',
        name: 'Primeape',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'mountain',
  },
  {
    id: 57,
    name: 'Primeape',
    height: '0.99 m',
    weight: '32.0 kg',
    genus: 'Pig Monkey Pokémon',
    description:
      'When Primeape becomes furious, its blood circulation is\nboosted. In turn, its muscles are made even stronger.\nHowever, it also becomes much less intelligent at the\nsame time.',
    stats: [
      {
        statName: 'speed',
        baseStat: 95,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 60,
      },
      {
        statName: 'defense',
        baseStat: 60,
      },
      {
        statName: 'attack',
        baseStat: 105,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy'],
    preEvolution: [
      {
        num: '056',
        name: 'Mankey',
      },
    ],
    baseHappiness: 70,
    captureRate: 75,
    habitat: 'mountain',
  },
  {
    id: 58,
    name: 'Growlithe',
    height: '0.71 m',
    weight: '19.0 kg',
    genus: 'Puppy Pokémon',
    description:
      'Growlithe has a superb sense of smell. Once it smells anything,\nthis Pokémon won’t forget the scent, no matter what. It uses\nits advanced olfactory sense to determine the emotions of\nother living things.',
    stats: [
      {
        statName: 'speed',
        baseStat: 60,
      },
      {
        statName: 'special-defense',
        baseStat: 50,
      },
      {
        statName: 'special-attack',
        baseStat: 70,
      },
      {
        statName: 'defense',
        baseStat: 45,
      },
      {
        statName: 'attack',
        baseStat: 70,
      },
      {
        statName: 'hp',
        baseStat: 55,
      },
    ],
    type: ['Fire'],
    weakness: ['Water', 'Ground', 'Rock'],
    postEvolution: [
      {
        num: '059',
        name: 'Arcanine',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'grassland',
  },
  {
    id: 59,
    name: 'Arcanine',
    height: '1.91 m',
    weight: '155.0 kg',
    genus: 'Legendary Pokémon',
    description:
      'Arcanine is known for its high speed. It is said to be capable of\nrunning over 6,200 miles in a single day and night.\nThe fire that blazes wildly within this Pokémon’s body is its\nsource of power.',
    stats: [
      {
        statName: 'speed',
        baseStat: 95,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 100,
      },
      {
        statName: 'defense',
        baseStat: 80,
      },
      {
        statName: 'attack',
        baseStat: 110,
      },
      {
        statName: 'hp',
        baseStat: 90,
      },
    ],
    type: ['Fire'],
    weakness: ['Water', 'Ground', 'Rock'],
    preEvolution: [
      {
        num: '058',
        name: 'Growlithe',
      },
    ],
    baseHappiness: 70,
    captureRate: 75,
    habitat: 'grassland',
  },
  {
    id: 60,
    name: 'Poliwag',
    height: '0.61 m',
    weight: '12.4 kg',
    genus: 'Tadpole Pokémon',
    description:
      'Poliwag has a very thin skin. It is possible to see the\nPokémon’s spiral innards right through the skin.\nDespite its thinness, however, the skin is also very flexible.\nEven sharp fangs bounce right off it.',
    stats: [
      {
        statName: 'speed',
        baseStat: 90,
      },
      {
        statName: 'special-defense',
        baseStat: 40,
      },
      {
        statName: 'special-attack',
        baseStat: 40,
      },
      {
        statName: 'defense',
        baseStat: 40,
      },
      {
        statName: 'attack',
        baseStat: 50,
      },
      {
        statName: 'hp',
        baseStat: 40,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    postEvolution: [
      {
        num: '061',
        name: 'Poliwhirl',
      },
      {
        num: '062',
        name: 'Poliwrath',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'waters-edge',
  },
  {
    id: 61,
    name: 'Poliwhirl',
    height: '0.99 m',
    weight: '20.0 kg',
    genus: 'Tadpole Pokémon',
    description:
      'The surface of Poliwhirl’s body is always wet and slick with\na slimy fluid. Because of this slippery covering, it can easily\nslip and slide out of the clutches of any enemy in battle.',
    stats: [
      {
        statName: 'speed',
        baseStat: 90,
      },
      {
        statName: 'special-defense',
        baseStat: 50,
      },
      {
        statName: 'special-attack',
        baseStat: 50,
      },
      {
        statName: 'defense',
        baseStat: 65,
      },
      {
        statName: 'attack',
        baseStat: 65,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    preEvolution: [
      {
        num: '060',
        name: 'Poliwag',
      },
    ],
    postEvolution: [
      {
        num: '062',
        name: 'Poliwrath',
      },
    ],
    baseHappiness: 70,
    captureRate: 120,
    habitat: 'waters-edge',
  },
  {
    id: 62,
    name: 'Poliwrath',
    height: '1.30 m',
    weight: '54.0 kg',
    genus: 'Tadpole Pokémon',
    description:
      'Poliwrath’s highly developed, brawny muscles never grow\nfatigued, however much it exercises. It is so tirelessly strong,\nthis Pokémon can swim back and forth across the ocean\nwithout effort.',
    stats: [
      {
        statName: 'speed',
        baseStat: 70,
      },
      {
        statName: 'special-defense',
        baseStat: 90,
      },
      {
        statName: 'special-attack',
        baseStat: 70,
      },
      {
        statName: 'defense',
        baseStat: 95,
      },
      {
        statName: 'attack',
        baseStat: 95,
      },
      {
        statName: 'hp',
        baseStat: 90,
      },
    ],
    type: ['Water', 'Fighting'],
    weakness: ['Electric', 'Grass', 'Flying', 'Psychic', 'Fairy'],
    preEvolution: [
      {
        num: '060',
        name: 'Poliwag',
      },
      {
        num: '061',
        name: 'Poliwhirl',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'waters-edge',
  },
  {
    id: 63,
    name: 'Abra',
    height: '0.89 m',
    weight: '19.5 kg',
    genus: 'Psi Pokémon',
    description:
      'Abra sleeps for eighteen hours a day. However, it can sense\nthe presence of foes even while it is sleeping. In such a\nsituation, this Pokémon immediately teleports to safety.',
    stats: [
      {
        statName: 'speed',
        baseStat: 90,
      },
      {
        statName: 'special-defense',
        baseStat: 55,
      },
      {
        statName: 'special-attack',
        baseStat: 105,
      },
      {
        statName: 'defense',
        baseStat: 15,
      },
      {
        statName: 'attack',
        baseStat: 20,
      },
      {
        statName: 'hp',
        baseStat: 25,
      },
    ],
    type: ['Psychic'],
    weakness: ['Bug', 'Ghost', 'Dark'],
    postEvolution: [
      {
        num: '064',
        name: 'Kadabra',
      },
      {
        num: '065',
        name: 'Alakazam',
      },
    ],
    baseHappiness: 70,
    captureRate: 200,
    habitat: 'urban',
  },
  {
    id: 64,
    name: 'Kadabra',
    height: '1.30 m',
    weight: '56.5 kg',
    genus: 'Psi Pokémon',
    description:
      'Kadabra emits a peculiar alpha wave if it develops a headache.\nOnly those people with a particularly strong psyche can hope\nto become a Trainer of this Pokémon.',
    stats: [
      {
        statName: 'speed',
        baseStat: 105,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 120,
      },
      {
        statName: 'defense',
        baseStat: 30,
      },
      {
        statName: 'attack',
        baseStat: 35,
      },
      {
        statName: 'hp',
        baseStat: 40,
      },
    ],
    type: ['Psychic'],
    weakness: ['Bug', 'Ghost', 'Dark'],
    preEvolution: [
      {
        num: '063',
        name: 'Abra',
      },
    ],
    postEvolution: [
      {
        num: '065',
        name: 'Alakazam',
      },
    ],
    baseHappiness: 70,
    captureRate: 100,
    habitat: 'urban',
  },
  {
    id: 65,
    name: 'Alakazam',
    height: '1.50 m',
    weight: '48.0 kg',
    genus: 'Psi Pokémon',
    description:
      'Alakazam’s brain continually grows, making its head far too\nheavy to support with its neck. This Pokémon holds its head up\nusing its psychokinetic power instead.',
    stats: [
      {
        statName: 'speed',
        baseStat: 120,
      },
      {
        statName: 'special-defense',
        baseStat: 95,
      },
      {
        statName: 'special-attack',
        baseStat: 135,
      },
      {
        statName: 'defense',
        baseStat: 45,
      },
      {
        statName: 'attack',
        baseStat: 50,
      },
      {
        statName: 'hp',
        baseStat: 55,
      },
    ],
    type: ['Psychic'],
    weakness: ['Bug', 'Ghost', 'Dark'],
    preEvolution: [
      {
        num: '063',
        name: 'Abra',
      },
      {
        num: '064',
        name: 'Kadabra',
      },
    ],
    baseHappiness: 70,
    captureRate: 50,
    habitat: 'urban',
  },
  {
    id: 66,
    name: 'Machop',
    height: '0.79 m',
    weight: '19.5 kg',
    genus: 'Superpower Pokémon',
    description:
      'Machop’s muscles are special—they never get sore no matter\nhow much they are used in exercise. This Pokémon has\nsufficient power to hurl a hundred adult humans.',
    stats: [
      {
        statName: 'speed',
        baseStat: 35,
      },
      {
        statName: 'special-defense',
        baseStat: 35,
      },
      {
        statName: 'special-attack',
        baseStat: 35,
      },
      {
        statName: 'defense',
        baseStat: 50,
      },
      {
        statName: 'attack',
        baseStat: 80,
      },
      {
        statName: 'hp',
        baseStat: 70,
      },
    ],
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy'],
    postEvolution: [
      {
        num: '067',
        name: 'Machoke',
      },
      {
        num: '068',
        name: 'Machamp',
      },
    ],
    baseHappiness: 70,
    captureRate: 180,
    habitat: 'mountain',
  },
  {
    id: 67,
    name: 'Machoke',
    height: '1.50 m',
    weight: '70.5 kg',
    genus: 'Superpower Pokémon',
    description:
      'Machoke’s thoroughly toned muscles possess the hardness\nof steel. This Pokémon has so much strength, it can easily\nhold aloft a sumo wrestler on just one finger.',
    stats: [
      {
        statName: 'speed',
        baseStat: 45,
      },
      {
        statName: 'special-defense',
        baseStat: 60,
      },
      {
        statName: 'special-attack',
        baseStat: 50,
      },
      {
        statName: 'defense',
        baseStat: 70,
      },
      {
        statName: 'attack',
        baseStat: 100,
      },
      {
        statName: 'hp',
        baseStat: 80,
      },
    ],
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy'],
    preEvolution: [
      {
        num: '066',
        name: 'Machop',
      },
    ],
    postEvolution: [
      {
        num: '068',
        name: 'Machamp',
      },
    ],
    baseHappiness: 70,
    captureRate: 90,
    habitat: 'mountain',
  },
  {
    id: 68,
    name: 'Machamp',
    height: '1.60 m',
    weight: '130.0 kg',
    genus: 'Superpower Pokémon',
    description:
      'Machamp has the power to hurl anything aside. However,\ntrying to do any work requiring care and dexterity causes its\narms to get tangled. This Pokémon tends to leap into action\nbefore it thinks.',
    stats: [
      {
        statName: 'speed',
        baseStat: 55,
      },
      {
        statName: 'special-defense',
        baseStat: 85,
      },
      {
        statName: 'special-attack',
        baseStat: 65,
      },
      {
        statName: 'defense',
        baseStat: 80,
      },
      {
        statName: 'attack',
        baseStat: 130,
      },
      {
        statName: 'hp',
        baseStat: 90,
      },
    ],
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy'],
    preEvolution: [
      {
        num: '066',
        name: 'Machop',
      },
      {
        num: '067',
        name: 'Machoke',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'mountain',
  },
  {
    id: 69,
    name: 'Bellsprout',
    height: '0.71 m',
    weight: '4.0 kg',
    genus: 'Flower Pokémon',
    description:
      'Bellsprout’s thin and flexible body lets it bend and sway to\navoid any attack, however strong it may be. From its mouth,\nthis Pokémon spits a corrosive fluid that melts even iron.',
    stats: [
      {
        statName: 'speed',
        baseStat: 40,
      },
      {
        statName: 'special-defense',
        baseStat: 30,
      },
      {
        statName: 'special-attack',
        baseStat: 70,
      },
      {
        statName: 'defense',
        baseStat: 35,
      },
      {
        statName: 'attack',
        baseStat: 75,
      },
      {
        statName: 'hp',
        baseStat: 50,
      },
    ],
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Ice', 'Flying', 'Psychic'],
    postEvolution: [
      {
        num: '070',
        name: 'Weepinbell',
      },
      {
        num: '071',
        name: 'Victreebel',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'forest',
  },
  {
    id: 70,
    name: 'Weepinbell',
    height: '0.99 m',
    weight: '6.4 kg',
    genus: 'Flycatcher Pokémon',
    description:
      'Weepinbell has a large hook on its rear end. At night, the\nPokémon hooks on to a tree branch and goes to sleep.\nIf it moves around in its sleep, it may wake up to find itself\non the ground.',
    stats: [
      {
        statName: 'speed',
        baseStat: 55,
      },
      {
        statName: 'special-defense',
        baseStat: 45,
      },
      {
        statName: 'special-attack',
        baseStat: 85,
      },
      {
        statName: 'defense',
        baseStat: 50,
      },
      {
        statName: 'attack',
        baseStat: 90,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Ice', 'Flying', 'Psychic'],
    preEvolution: [
      {
        num: '069',
        name: 'Bellsprout',
      },
    ],
    postEvolution: [
      {
        num: '071',
        name: 'Victreebel',
      },
    ],
    baseHappiness: 70,
    captureRate: 120,
    habitat: 'forest',
  },
  {
    id: 71,
    name: 'Victreebel',
    height: '1.70 m',
    weight: '15.5 kg',
    genus: 'Flycatcher Pokémon',
    description:
      'Victreebel has a long vine that extends from its head.\nThis vine is waved and flicked about as if it were an animal to\nattract prey. When an unsuspecting prey draws near, this\nPokémon swallows it whole.',
    stats: [
      {
        statName: 'speed',
        baseStat: 70,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 100,
      },
      {
        statName: 'defense',
        baseStat: 65,
      },
      {
        statName: 'attack',
        baseStat: 105,
      },
      {
        statName: 'hp',
        baseStat: 80,
      },
    ],
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Ice', 'Flying', 'Psychic'],
    preEvolution: [
      {
        num: '069',
        name: 'Bellsprout',
      },
      {
        num: '070',
        name: 'Weepinbell',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'forest',
  },
  {
    id: 72,
    name: 'Tentacool',
    height: '0.89 m',
    weight: '45.5 kg',
    genus: 'Jellyfish Pokémon',
    description:
      'Tentacool’s body is largely composed of water. If it is removed\nfrom the sea, it dries up like parchment. If this Pokémon\nhappens to become dehydrated, put it back into the sea.',
    stats: [
      {
        statName: 'speed',
        baseStat: 70,
      },
      {
        statName: 'special-defense',
        baseStat: 100,
      },
      {
        statName: 'special-attack',
        baseStat: 50,
      },
      {
        statName: 'defense',
        baseStat: 35,
      },
      {
        statName: 'attack',
        baseStat: 40,
      },
      {
        statName: 'hp',
        baseStat: 40,
      },
    ],
    type: ['Water', 'Poison'],
    weakness: ['Electric', 'Ground', 'Psychic'],
    postEvolution: [
      {
        num: '073',
        name: 'Tentacruel',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'sea',
  },
  {
    id: 73,
    name: 'Tentacruel',
    height: '1.60 m',
    weight: '55.0 kg',
    genus: 'Jellyfish Pokémon',
    description:
      'Tentacruel has large red orbs on its head. The orbs glow\nbefore lashing the vicinity with a harsh ultrasonic blast.\nThis Pokémon’s outburst creates rough waves around it.',
    stats: [
      {
        statName: 'speed',
        baseStat: 100,
      },
      {
        statName: 'special-defense',
        baseStat: 120,
      },
      {
        statName: 'special-attack',
        baseStat: 80,
      },
      {
        statName: 'defense',
        baseStat: 65,
      },
      {
        statName: 'attack',
        baseStat: 70,
      },
      {
        statName: 'hp',
        baseStat: 80,
      },
    ],
    type: ['Water', 'Poison'],
    weakness: ['Electric', 'Ground', 'Psychic'],
    preEvolution: [
      {
        num: '072',
        name: 'Tentacool',
      },
    ],
    baseHappiness: 70,
    captureRate: 60,
    habitat: 'sea',
  },
  {
    id: 74,
    name: 'Geodude',
    height: '0.41 m',
    weight: '20.0 kg',
    genus: 'Rock Pokémon',
    description:
      'The longer a Geodude lives, the more its edges are chipped\nand worn away, making it more rounded in appearance.\nHowever, this Pokémon’s heart will remain hard, craggy,\nand rough always.',
    stats: [
      {
        statName: 'speed',
        baseStat: 20,
      },
      {
        statName: 'special-defense',
        baseStat: 30,
      },
      {
        statName: 'special-attack',
        baseStat: 30,
      },
      {
        statName: 'defense',
        baseStat: 100,
      },
      {
        statName: 'attack',
        baseStat: 80,
      },
      {
        statName: 'hp',
        baseStat: 40,
      },
    ],
    type: ['Rock', 'Ground'],
    weakness: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'],
    postEvolution: [
      {
        num: '075',
        name: 'Graveler',
      },
      {
        num: '076',
        name: 'Golem',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'mountain',
  },
  {
    id: 75,
    name: 'Graveler',
    height: '0.99 m',
    weight: '105.0 kg',
    genus: 'Rock Pokémon',
    description:
      'Graveler grows by feeding on rocks. Apparently, it prefers to\neat rocks that are covered in moss. This Pokémon eats its way\nthrough a ton of rocks on a daily basis.',
    stats: [
      {
        statName: 'speed',
        baseStat: 35,
      },
      {
        statName: 'special-defense',
        baseStat: 45,
      },
      {
        statName: 'special-attack',
        baseStat: 45,
      },
      {
        statName: 'defense',
        baseStat: 115,
      },
      {
        statName: 'attack',
        baseStat: 95,
      },
      {
        statName: 'hp',
        baseStat: 55,
      },
    ],
    type: ['Rock', 'Ground'],
    weakness: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'],
    preEvolution: [
      {
        num: '074',
        name: 'Geodude',
      },
    ],
    postEvolution: [
      {
        num: '076',
        name: 'Golem',
      },
    ],
    baseHappiness: 70,
    captureRate: 120,
    habitat: 'mountain',
  },
  {
    id: 76,
    name: 'Golem',
    height: '1.40 m',
    weight: '300.0 kg',
    genus: 'Megaton Pokémon',
    description:
      'Golem live up on mountains. If there is a large earthquake,\nthese Pokémon will come rolling down off the mountains\nen masse to the foothills below.',
    stats: [
      {
        statName: 'speed',
        baseStat: 45,
      },
      {
        statName: 'special-defense',
        baseStat: 65,
      },
      {
        statName: 'special-attack',
        baseStat: 55,
      },
      {
        statName: 'defense',
        baseStat: 130,
      },
      {
        statName: 'attack',
        baseStat: 120,
      },
      {
        statName: 'hp',
        baseStat: 80,
      },
    ],
    type: ['Rock', 'Ground'],
    weakness: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'],
    preEvolution: [
      {
        num: '074',
        name: 'Geodude',
      },
      {
        num: '075',
        name: 'Graveler',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'mountain',
  },
  {
    id: 77,
    name: 'Ponyta',
    height: '0.99 m',
    weight: '30.0 kg',
    genus: 'Fire Horse Pokémon',
    description:
      'Ponyta is very weak at birth. It can barely stand up.\nThis Pokémon becomes stronger by stumbling and falling to\nkeep up with its parent.',
    stats: [
      {
        statName: 'speed',
        baseStat: 90,
      },
      {
        statName: 'special-defense',
        baseStat: 65,
      },
      {
        statName: 'special-attack',
        baseStat: 65,
      },
      {
        statName: 'defense',
        baseStat: 55,
      },
      {
        statName: 'attack',
        baseStat: 85,
      },
      {
        statName: 'hp',
        baseStat: 50,
      },
    ],
    type: ['Fire'],
    weakness: ['Water', 'Ground', 'Rock'],
    postEvolution: [
      {
        num: '078',
        name: 'Rapidash',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'grassland',
  },
  {
    id: 78,
    name: 'Rapidash',
    height: '1.70 m',
    weight: '95.0 kg',
    genus: 'Fire Horse Pokémon',
    description:
      'Rapidash usually can be seen casually cantering in the\nfields and plains. However, when this Pokémon turns serious,\nits fiery manes flare and blaze as it gallops its way up to\n150 mph.',
    stats: [
      {
        statName: 'speed',
        baseStat: 105,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 80,
      },
      {
        statName: 'defense',
        baseStat: 70,
      },
      {
        statName: 'attack',
        baseStat: 100,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Fire'],
    weakness: ['Water', 'Ground', 'Rock'],
    preEvolution: [
      {
        num: '077',
        name: 'Ponyta',
      },
    ],
    baseHappiness: 70,
    captureRate: 60,
    habitat: 'grassland',
  },
  {
    id: 79,
    name: 'Slowpoke',
    height: '1.19 m',
    weight: '36.0 kg',
    genus: 'Dopey Pokémon',
    description:
      'Slowpoke uses its tail to catch prey by dipping it in water at\nthe side of a river. However, this Pokémon often forgets what\nit’s doing and often spends entire days just loafing at\nwater’s edge.',
    stats: [
      {
        statName: 'speed',
        baseStat: 15,
      },
      {
        statName: 'special-defense',
        baseStat: 40,
      },
      {
        statName: 'special-attack',
        baseStat: 40,
      },
      {
        statName: 'defense',
        baseStat: 65,
      },
      {
        statName: 'attack',
        baseStat: 65,
      },
      {
        statName: 'hp',
        baseStat: 90,
      },
    ],
    type: ['Water', 'Psychic'],
    weakness: ['Electric', 'Grass', 'Bug', 'Ghost', 'Dark'],
    postEvolution: [
      {
        num: '080',
        name: 'Slowbro',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'waters-edge',
  },
  {
    id: 81,
    name: 'Magnemite',
    height: '0.30 m',
    weight: '6.0 kg',
    genus: 'Hermit Crab Pokémon',
    description:
      'Slowbro’s tail has a Shellder firmly attached with a bite.\nAs a result, the tail can’t be used for fishing anymore.\nThis causes Slowbro to grudgingly swim and catch\nprey instead.',
    stats: [
      {
        statName: 'speed',
        baseStat: 30,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 100,
      },
      {
        statName: 'defense',
        baseStat: 110,
      },
      {
        statName: 'attack',
        baseStat: 75,
      },
      {
        statName: 'hp',
        baseStat: 95,
      },
    ],
    type: ['Electric'],
    weakness: ['Fire', 'Water', 'Ground'],
    postEvolution: [
      {
        num: '082',
        name: 'Magneton',
      },
    ],
    baseHappiness: 70,
    captureRate: 75,
    habitat: 'waters-edge',
  },
  {
    id: 81,
    name: 'Magnemite',
    height: '0.30 m',
    weight: '6.0 kg',
    genus: 'Magnet Pokémon',
    description:
      'Magnemite attaches itself to power lines to feed on electricity.\nIf your house has a power outage, check your circuit breakers.\nYou may find a large number of this Pokémon clinging to the\nbreaker box.',
    stats: [
      {
        statName: 'speed',
        baseStat: 45,
      },
      {
        statName: 'special-defense',
        baseStat: 55,
      },
      {
        statName: 'special-attack',
        baseStat: 95,
      },
      {
        statName: 'defense',
        baseStat: 70,
      },
      {
        statName: 'attack',
        baseStat: 35,
      },
      {
        statName: 'hp',
        baseStat: 25,
      },
    ],
    type: ['Electric'],
    weakness: ['Fire', 'Water', 'Ground'],
    postEvolution: [
      {
        num: '082',
        name: 'Magneton',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'rough-terrain',
  },
  {
    id: 82,
    name: 'Magneton',
    height: '0.99 m',
    weight: '60.0 kg',
    genus: 'Magnet Pokémon',
    description:
      'Magneton emits a powerful magnetic force that is fatal to\nmechanical devices. As a result, large cities sound sirens\nto warn citizens of large-scale outbreaks of this Pokémon.',
    stats: [
      {
        statName: 'speed',
        baseStat: 70,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 120,
      },
      {
        statName: 'defense',
        baseStat: 95,
      },
      {
        statName: 'attack',
        baseStat: 60,
      },
      {
        statName: 'hp',
        baseStat: 50,
      },
    ],
    type: ['Electric'],
    weakness: ['Fire', 'Water', 'Ground'],
    preEvolution: [
      {
        num: '081',
        name: 'Magnemite',
      },
    ],
    baseHappiness: 70,
    captureRate: 60,
    habitat: 'rough-terrain',
  },
  {
    id: 84,
    name: 'Doduo',
    height: '1.40 m',
    weight: '39.2 kg',
    genus: 'Wild Duck Pokémon',
    description:
      'Farfetch’d is always seen with a stalk from a plant of some\nsort. Apparently, there are good stalks and bad stalks. This\nPokémon has been known to fight with others over stalks.',
    stats: [
      {
        statName: 'speed',
        baseStat: 60,
      },
      {
        statName: 'special-defense',
        baseStat: 62,
      },
      {
        statName: 'special-attack',
        baseStat: 58,
      },
      {
        statName: 'defense',
        baseStat: 55,
      },
      {
        statName: 'attack',
        baseStat: 90,
      },
      {
        statName: 'hp',
        baseStat: 52,
      },
    ],
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Rock'],
    postEvolution: [
      {
        num: '085',
        name: 'Dodrio',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 84,
    name: 'Doduo',
    height: '1.40 m',
    weight: '39.2 kg',
    genus: 'Twin Bird Pokémon',
    description:
      'Doduo’s two heads never sleep at the same time. Its two\nheads take turns sleeping, so one head can always keep\nwatch for enemies while the other one sleeps.',
    stats: [
      {
        statName: 'speed',
        baseStat: 75,
      },
      {
        statName: 'special-defense',
        baseStat: 35,
      },
      {
        statName: 'special-attack',
        baseStat: 35,
      },
      {
        statName: 'defense',
        baseStat: 45,
      },
      {
        statName: 'attack',
        baseStat: 85,
      },
      {
        statName: 'hp',
        baseStat: 35,
      },
    ],
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Rock'],
    postEvolution: [
      {
        num: '085',
        name: 'Dodrio',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'grassland',
  },
  {
    id: 85,
    name: 'Dodrio',
    height: '1.80 m',
    weight: '85.2 kg',
    genus: 'Triple Bird Pokémon',
    description:
      'Watch out if Dodrio’s three heads are looking in three separate\ndirections. It’s a sure sign that it is on its guard. Don’t go near\nthis Pokémon if it’s being wary—it may decide to peck you.',
    stats: [
      {
        statName: 'speed',
        baseStat: 110,
      },
      {
        statName: 'special-defense',
        baseStat: 60,
      },
      {
        statName: 'special-attack',
        baseStat: 60,
      },
      {
        statName: 'defense',
        baseStat: 70,
      },
      {
        statName: 'attack',
        baseStat: 110,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Normal', 'Flying'],
    weakness: ['Electric', 'Rock'],
    preEvolution: [
      {
        num: '084',
        name: 'Doduo',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 86,
    name: 'Seel',
    height: '1.09 m',
    weight: '90.0 kg',
    genus: 'Sea Lion Pokémon',
    description:
      'Seel hunts for prey in the frigid sea underneath sheets of ice.\nWhen it needs to breathe, it punches a hole through the ice\nwith the sharply protruding section of its head.',
    stats: [
      {
        statName: 'speed',
        baseStat: 45,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 45,
      },
      {
        statName: 'defense',
        baseStat: 55,
      },
      {
        statName: 'attack',
        baseStat: 45,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    postEvolution: [
      {
        num: '087',
        name: 'Dewgong',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'sea',
  },
  {
    id: 87,
    name: 'Dewgong',
    height: '1.70 m',
    weight: '120.0 kg',
    genus: 'Sea Lion Pokémon',
    description:
      'Dewgong loves to snooze on bitterly cold ice. The sight of this\nPokémon sleeping on a glacier was mistakenly thought to be a\nmermaid by a mariner long ago.',
    stats: [
      {
        statName: 'speed',
        baseStat: 70,
      },
      {
        statName: 'special-defense',
        baseStat: 95,
      },
      {
        statName: 'special-attack',
        baseStat: 70,
      },
      {
        statName: 'defense',
        baseStat: 80,
      },
      {
        statName: 'attack',
        baseStat: 70,
      },
      {
        statName: 'hp',
        baseStat: 90,
      },
    ],
    type: ['Water', 'Ice'],
    weakness: ['Electric', 'Grass', 'Fighting', 'Rock'],
    preEvolution: [
      {
        num: '086',
        name: 'Seel',
      },
    ],
    baseHappiness: 70,
    captureRate: 75,
    habitat: 'sea',
  },
  {
    id: 89,
    name: 'Muk',
    height: '1.19 m',
    weight: '30.0 kg',
    genus: 'Sludge Pokémon',
    description:
      'Grimer’s sludgy and rubbery body can be forced through any\nopening, however small it may be. This Pokémon enters sewer\npipes to drink filthy wastewater.',
    stats: [
      {
        statName: 'speed',
        baseStat: 25,
      },
      {
        statName: 'special-defense',
        baseStat: 50,
      },
      {
        statName: 'special-attack',
        baseStat: 40,
      },
      {
        statName: 'defense',
        baseStat: 50,
      },
      {
        statName: 'attack',
        baseStat: 80,
      },
      {
        statName: 'hp',
        baseStat: 80,
      },
    ],
    type: ['Poison'],
    weakness: ['Ground', 'Psychic'],
    preEvolution: [
      {
        num: '088',
        name: 'Grimer',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'urban',
  },
  {
    id: 89,
    name: 'Muk',
    height: '1.19 m',
    weight: '30.0 kg',
    genus: 'Sludge Pokémon',
    description:
      'From Muk’s body seeps a foul fluid that gives off a\nnose-bendingly horrible stench. Just one drop of this\nPokémon’s body fluid can turn a pool stagnant and rancid.',
    stats: [
      {
        statName: 'speed',
        baseStat: 50,
      },
      {
        statName: 'special-defense',
        baseStat: 100,
      },
      {
        statName: 'special-attack',
        baseStat: 65,
      },
      {
        statName: 'defense',
        baseStat: 75,
      },
      {
        statName: 'attack',
        baseStat: 105,
      },
      {
        statName: 'hp',
        baseStat: 105,
      },
    ],
    type: ['Poison'],
    weakness: ['Ground', 'Psychic'],
    preEvolution: [
      {
        num: '088',
        name: 'Grimer',
      },
    ],
    baseHappiness: 70,
    captureRate: 75,
    habitat: 'urban',
  },
  {
    id: 90,
    name: 'Shellder',
    height: '0.30 m',
    weight: '4.0 kg',
    genus: 'Bivalve Pokémon',
    description:
      'At night, this Pokémon uses its broad tongue to burrow a hole\nin the seafloor sand and then sleep in it. While it is sleeping,\nShellder closes its shell, but leaves its tongue hanging out.',
    stats: [
      {
        statName: 'speed',
        baseStat: 40,
      },
      {
        statName: 'special-defense',
        baseStat: 25,
      },
      {
        statName: 'special-attack',
        baseStat: 45,
      },
      {
        statName: 'defense',
        baseStat: 100,
      },
      {
        statName: 'attack',
        baseStat: 65,
      },
      {
        statName: 'hp',
        baseStat: 30,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    postEvolution: [
      {
        num: '091',
        name: 'Cloyster',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'sea',
  },
  {
    id: 91,
    name: 'Cloyster',
    height: '1.50 m',
    weight: '132.5 kg',
    genus: 'Bivalve Pokémon',
    description:
      'Cloyster is capable of swimming in the sea. It does so by\nswallowing water, then jetting it out toward the rear.\nThis Pokémon shoots spikes from its shell using the\nsame system.',
    stats: [
      {
        statName: 'speed',
        baseStat: 70,
      },
      {
        statName: 'special-defense',
        baseStat: 45,
      },
      {
        statName: 'special-attack',
        baseStat: 85,
      },
      {
        statName: 'defense',
        baseStat: 180,
      },
      {
        statName: 'attack',
        baseStat: 95,
      },
      {
        statName: 'hp',
        baseStat: 50,
      },
    ],
    type: ['Water', 'Ice'],
    weakness: ['Electric', 'Grass', 'Fighting', 'Rock'],
    preEvolution: [
      {
        num: '090',
        name: 'Shellder',
      },
    ],
    baseHappiness: 70,
    captureRate: 60,
    habitat: 'sea',
  },
  {
    id: 92,
    name: 'Gastly',
    height: '1.30 m',
    weight: '0.1 kg',
    genus: 'Gas Pokémon',
    description:
      'Gastly is largely composed of gaseous matter. When exposed\nto a strong wind, the gaseous body quickly dwindles away.\nGroups of this Pokémon cluster under the eaves of houses to\nescape the ravages of wind.',
    stats: [
      {
        statName: 'speed',
        baseStat: 80,
      },
      {
        statName: 'special-defense',
        baseStat: 35,
      },
      {
        statName: 'special-attack',
        baseStat: 100,
      },
      {
        statName: 'defense',
        baseStat: 30,
      },
      {
        statName: 'attack',
        baseStat: 35,
      },
      {
        statName: 'hp',
        baseStat: 30,
      },
    ],
    type: ['Ghost', 'Poison'],
    weakness: ['Ground', 'Psychic', 'Ghost', 'Dark'],
    postEvolution: [
      {
        num: '093',
        name: 'Haunter',
      },
      {
        num: '094',
        name: 'Gengar',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'cave',
  },
  {
    id: 93,
    name: 'Haunter',
    height: '1.60 m',
    weight: '0.1 kg',
    genus: 'Gas Pokémon',
    description:
      'Haunter is a dangerous Pokémon. If one beckons you while\nfloating in darkness, you must never approach it. This Pokémon\nwill try to lick you with its tongue and steal your life away.',
    stats: [
      {
        statName: 'speed',
        baseStat: 95,
      },
      {
        statName: 'special-defense',
        baseStat: 55,
      },
      {
        statName: 'special-attack',
        baseStat: 115,
      },
      {
        statName: 'defense',
        baseStat: 45,
      },
      {
        statName: 'attack',
        baseStat: 50,
      },
      {
        statName: 'hp',
        baseStat: 45,
      },
    ],
    type: ['Ghost', 'Poison'],
    weakness: ['Ground', 'Psychic', 'Ghost', 'Dark'],
    preEvolution: [
      {
        num: '092',
        name: 'Gastly',
      },
    ],
    postEvolution: [
      {
        num: '094',
        name: 'Gengar',
      },
    ],
    baseHappiness: 70,
    captureRate: 90,
    habitat: 'cave',
  },
  {
    id: 94,
    name: 'Gengar',
    height: '1.50 m',
    weight: '40.5 kg',
    genus: 'Shadow Pokémon',
    description:
      'Sometimes, on a dark night, your shadow thrown by a\nstreetlight will suddenly and startlingly overtake you.\nIt is actually a Gengar running past you, pretending to be\nyour shadow.',
    stats: [
      {
        statName: 'speed',
        baseStat: 110,
      },
      {
        statName: 'special-defense',
        baseStat: 75,
      },
      {
        statName: 'special-attack',
        baseStat: 130,
      },
      {
        statName: 'defense',
        baseStat: 60,
      },
      {
        statName: 'attack',
        baseStat: 65,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Ghost', 'Poison'],
    weakness: ['Ground', 'Psychic', 'Ghost', 'Dark'],
    preEvolution: [
      {
        num: '092',
        name: 'Gastly',
      },
      {
        num: '093',
        name: 'Haunter',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'cave',
  },
  {
    id: 95,
    name: 'Onix',
    height: '8.79 m',
    weight: '210.0 kg',
    genus: 'Rock Snake Pokémon',
    description:
      'Onix has a magnet in its brain. It acts as a compass so that this\nPokémon does not lose direction while it is tunneling.\nAs it grows older, its body becomes increasingly rounder\nand smoother.',
    stats: [
      {
        statName: 'speed',
        baseStat: 70,
      },
      {
        statName: 'special-defense',
        baseStat: 45,
      },
      {
        statName: 'special-attack',
        baseStat: 30,
      },
      {
        statName: 'defense',
        baseStat: 160,
      },
      {
        statName: 'attack',
        baseStat: 45,
      },
      {
        statName: 'hp',
        baseStat: 35,
      },
    ],
    type: ['Rock', 'Ground'],
    weakness: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'cave',
  },
  {
    id: 96,
    name: 'Drowzee',
    height: '0.99 m',
    weight: '32.4 kg',
    genus: 'Hypnosis Pokémon',
    description:
      'If your nose becomes itchy while you are sleeping, it’s a sure\nsign that one of these Pokémon is standing above your pillow\nand trying to eat your dream through your nostrils.',
    stats: [
      {
        statName: 'speed',
        baseStat: 42,
      },
      {
        statName: 'special-defense',
        baseStat: 90,
      },
      {
        statName: 'special-attack',
        baseStat: 43,
      },
      {
        statName: 'defense',
        baseStat: 45,
      },
      {
        statName: 'attack',
        baseStat: 48,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Psychic'],
    weakness: ['Bug', 'Ghost', 'Dark'],
    postEvolution: [
      {
        num: '097',
        name: 'Hypno',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'grassland',
  },
  {
    id: 97,
    name: 'Hypno',
    height: '1.60 m',
    weight: '75.6 kg',
    genus: 'Hypnosis Pokémon',
    description:
      'Hypno holds a pendulum in its hand. The arcing movement and\nglitter of the pendulum lull the foe into a deep state of\nhypnosis. While this Pokémon searches for prey, it polishes\nthe pendulum.',
    stats: [
      {
        statName: 'speed',
        baseStat: 67,
      },
      {
        statName: 'special-defense',
        baseStat: 115,
      },
      {
        statName: 'special-attack',
        baseStat: 73,
      },
      {
        statName: 'defense',
        baseStat: 70,
      },
      {
        statName: 'attack',
        baseStat: 73,
      },
      {
        statName: 'hp',
        baseStat: 85,
      },
    ],
    type: ['Psychic'],
    weakness: ['Bug', 'Ghost', 'Dark'],
    preEvolution: [
      {
        num: '096',
        name: 'Drowzee',
      },
    ],
    baseHappiness: 70,
    captureRate: 75,
    habitat: 'grassland',
  },
  {
    id: 98,
    name: 'Krabby',
    height: '0.41 m',
    weight: '6.5 kg',
    genus: 'River Crab Pokémon',
    description:
      'Krabby live on beaches, burrowed inside holes dug into the\nsand. On sandy beaches with little in the way of food, these\nPokémon can be seen squabbling with each other\nover territory.',
    stats: [
      {
        statName: 'speed',
        baseStat: 50,
      },
      {
        statName: 'special-defense',
        baseStat: 25,
      },
      {
        statName: 'special-attack',
        baseStat: 25,
      },
      {
        statName: 'defense',
        baseStat: 90,
      },
      {
        statName: 'attack',
        baseStat: 105,
      },
      {
        statName: 'hp',
        baseStat: 30,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    postEvolution: [
      {
        num: '099',
        name: 'Kingler',
      },
    ],
    baseHappiness: 70,
    captureRate: 225,
    habitat: 'waters-edge',
  },
  {
    id: 99,
    name: 'Kingler',
    height: '1.30 m',
    weight: '60.0 kg',
    genus: 'Pincer Pokémon',
    description:
      'Kingler has an enormous, oversized claw. It waves this huge\nclaw in the air to communicate with others. However, because\nthe claw is so heavy, the Pokémon quickly tires.',
    stats: [
      {
        statName: 'speed',
        baseStat: 75,
      },
      {
        statName: 'special-defense',
        baseStat: 50,
      },
      {
        statName: 'special-attack',
        baseStat: 50,
      },
      {
        statName: 'defense',
        baseStat: 115,
      },
      {
        statName: 'attack',
        baseStat: 130,
      },
      {
        statName: 'hp',
        baseStat: 55,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    preEvolution: [
      {
        num: '098',
        name: 'Krabby',
      },
    ],
    baseHappiness: 70,
    captureRate: 60,
    habitat: 'waters-edge',
  },
  {
    id: 100,
    name: 'Voltorb',
    height: '0.51 m',
    weight: '10.4 kg',
    genus: 'Ball Pokémon',
    description:
      'Voltorb was first sighted at a company that manufactures\nPoké Balls. The link between that sighting and the fact\nthat this Pokémon looks very similar to a Poké Ball remains\na mystery.',
    stats: [
      {
        statName: 'speed',
        baseStat: 100,
      },
      {
        statName: 'special-defense',
        baseStat: 55,
      },
      {
        statName: 'special-attack',
        baseStat: 55,
      },
      {
        statName: 'defense',
        baseStat: 50,
      },
      {
        statName: 'attack',
        baseStat: 30,
      },
      {
        statName: 'hp',
        baseStat: 40,
      },
    ],
    type: ['Electric'],
    weakness: ['Ground'],
    postEvolution: [
      {
        num: '101',
        name: 'Electrode',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'urban',
  },
  {
    id: 101,
    name: 'Electrode',
    height: '1.19 m',
    weight: '66.6 kg',
    genus: 'Ball Pokémon',
    description:
      'Electrode eats electricity in the atmosphere. On days when\nlightning strikes, you can see this Pokémon exploding all over\nthe place from eating too much electricity.',
    stats: [
      {
        statName: 'speed',
        baseStat: 150,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 80,
      },
      {
        statName: 'defense',
        baseStat: 70,
      },
      {
        statName: 'attack',
        baseStat: 50,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Electric'],
    weakness: ['Ground'],
    preEvolution: [
      {
        num: '100',
        name: 'Voltorb',
      },
    ],
    baseHappiness: 70,
    captureRate: 60,
    habitat: 'urban',
  },
  {
    id: 102,
    name: 'Exeggcute',
    height: '0.41 m',
    weight: '2.5 kg',
    genus: 'Egg Pokémon',
    description:
      'This Pokémon consists of six eggs that form a closely knit\ncluster. The six eggs attract each other and spin around.\nWhen cracks increasingly appear on the eggs, Exeggcute is\nclose to evolution.',
    stats: [
      {
        statName: 'speed',
        baseStat: 40,
      },
      {
        statName: 'special-defense',
        baseStat: 45,
      },
      {
        statName: 'special-attack',
        baseStat: 60,
      },
      {
        statName: 'defense',
        baseStat: 80,
      },
      {
        statName: 'attack',
        baseStat: 40,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Grass', 'Psychic'],
    weakness: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Ghost', 'Dark'],
    postEvolution: [
      {
        num: '103',
        name: 'Exeggutor',
      },
    ],
    baseHappiness: 70,
    captureRate: 90,
    habitat: 'forest',
  },
  {
    id: 103,
    name: 'Exeggutor',
    height: '2.01 m',
    weight: '120.0 kg',
    genus: 'Coconut Pokémon',
    description:
      'Exeggutor originally came from the tropics. Its heads\nsteadily grow larger from exposure to strong sunlight.\nIt is said that when the heads fall off, they group together\nto form Exeggcute.',
    stats: [
      {
        statName: 'speed',
        baseStat: 55,
      },
      {
        statName: 'special-defense',
        baseStat: 75,
      },
      {
        statName: 'special-attack',
        baseStat: 125,
      },
      {
        statName: 'defense',
        baseStat: 85,
      },
      {
        statName: 'attack',
        baseStat: 95,
      },
      {
        statName: 'hp',
        baseStat: 95,
      },
    ],
    type: ['Grass', 'Psychic'],
    weakness: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Ghost', 'Dark'],
    preEvolution: [
      {
        num: '102',
        name: 'Exeggcute',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'forest',
  },
  {
    id: 104,
    name: 'Cubone',
    height: '0.41 m',
    weight: '6.5 kg',
    genus: 'Lonely Pokémon',
    description:
      'Cubone pines for the mother it will never see again.\nSeeing a likeness of its mother in the full moon, it cries.\nThe stains on the skull the Pokémon wears are made by the\ntears it sheds.',
    stats: [
      {
        statName: 'speed',
        baseStat: 35,
      },
      {
        statName: 'special-defense',
        baseStat: 50,
      },
      {
        statName: 'special-attack',
        baseStat: 40,
      },
      {
        statName: 'defense',
        baseStat: 95,
      },
      {
        statName: 'attack',
        baseStat: 50,
      },
      {
        statName: 'hp',
        baseStat: 50,
      },
    ],
    type: ['Ground'],
    weakness: ['Water', 'Grass', 'Ice'],
    postEvolution: [
      {
        num: '105',
        name: 'Marowak',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'mountain',
  },
  {
    id: 105,
    name: 'Marowak',
    height: '0.99 m',
    weight: '45.0 kg',
    genus: 'Bone Keeper Pokémon',
    description:
      'Marowak is the evolved form of a Cubone that has overcome\nits sadness at the loss of its mother and grown tough.\nThis Pokémon’s tempered and hardened spirit is not\neasily broken.',
    stats: [
      {
        statName: 'speed',
        baseStat: 45,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 50,
      },
      {
        statName: 'defense',
        baseStat: 110,
      },
      {
        statName: 'attack',
        baseStat: 80,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Ground'],
    weakness: ['Water', 'Grass', 'Ice'],
    preEvolution: [
      {
        num: '104',
        name: 'Cubone',
      },
    ],
    baseHappiness: 70,
    captureRate: 75,
    habitat: 'mountain',
  },
  {
    id: 106,
    name: 'Hitmonlee',
    height: '1.50 m',
    weight: '49.8 kg',
    genus: 'Kicking Pokémon',
    description:
      'Hitmonlee’s legs freely contract and stretch. Using these\nspringlike legs, it bowls over foes with devastating kicks.\nAfter battle, it rubs down its legs and loosens the muscles to\novercome fatigue.',
    stats: [
      {
        statName: 'speed',
        baseStat: 87,
      },
      {
        statName: 'special-defense',
        baseStat: 110,
      },
      {
        statName: 'special-attack',
        baseStat: 35,
      },
      {
        statName: 'defense',
        baseStat: 53,
      },
      {
        statName: 'attack',
        baseStat: 120,
      },
      {
        statName: 'hp',
        baseStat: 50,
      },
    ],
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'urban',
  },
  {
    id: 107,
    name: 'Hitmonchan',
    height: '1.40 m',
    weight: '50.2 kg',
    genus: 'Punching Pokémon',
    description:
      'Hitmonchan is said to possess the spirit of a boxer who had\nbeen working toward a world championship. This Pokémon has\nan indomitable spirit and will never give up in the face\nof adversity.',
    stats: [
      {
        statName: 'speed',
        baseStat: 76,
      },
      {
        statName: 'special-defense',
        baseStat: 110,
      },
      {
        statName: 'special-attack',
        baseStat: 35,
      },
      {
        statName: 'defense',
        baseStat: 79,
      },
      {
        statName: 'attack',
        baseStat: 105,
      },
      {
        statName: 'hp',
        baseStat: 50,
      },
    ],
    type: ['Fighting'],
    weakness: ['Flying', 'Psychic', 'Fairy'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'urban',
  },
  {
    id: 108,
    name: 'Lickitung',
    height: '1.19 m',
    weight: '65.5 kg',
    genus: 'Licking Pokémon',
    description:
      'Whenever Lickitung comes across something new, it will\nunfailingly give it a lick. It does so because it memorizes things\nby texture and by taste. It is somewhat put off by sour things.',
    stats: [
      {
        statName: 'speed',
        baseStat: 30,
      },
      {
        statName: 'special-defense',
        baseStat: 75,
      },
      {
        statName: 'special-attack',
        baseStat: 60,
      },
      {
        statName: 'defense',
        baseStat: 75,
      },
      {
        statName: 'attack',
        baseStat: 55,
      },
      {
        statName: 'hp',
        baseStat: 90,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 109,
    name: 'Koffing',
    height: '0.61 m',
    weight: '1.0 kg',
    genus: 'Poison Gas Pokémon',
    description:
      'If Koffing becomes agitated, it raises the toxicity of its internal\ngases and jets them out from all over its body. This Pokémon\nmay also overinflate its round body, then explode.',
    stats: [
      {
        statName: 'speed',
        baseStat: 35,
      },
      {
        statName: 'special-defense',
        baseStat: 45,
      },
      {
        statName: 'special-attack',
        baseStat: 60,
      },
      {
        statName: 'defense',
        baseStat: 95,
      },
      {
        statName: 'attack',
        baseStat: 65,
      },
      {
        statName: 'hp',
        baseStat: 40,
      },
    ],
    type: ['Poison'],
    weakness: ['Ground', 'Psychic'],
    postEvolution: [
      {
        num: '110',
        name: 'Weezing',
      },
    ],
    baseHappiness: 70,
    captureRate: 190,
    habitat: 'urban',
  },
  {
    id: 110,
    name: 'Weezing',
    height: '1.19 m',
    weight: '9.5 kg',
    genus: 'Poison Gas Pokémon',
    description:
      'Weezing loves the gases given off by rotted kitchen garbage.\nThis Pokémon will find a dirty, unkempt house and make it its\nhome. At night, when the people in the house are asleep, it will\ngo through the trash.',
    stats: [
      {
        statName: 'speed',
        baseStat: 60,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 85,
      },
      {
        statName: 'defense',
        baseStat: 120,
      },
      {
        statName: 'attack',
        baseStat: 90,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Poison'],
    weakness: ['Ground', 'Psychic'],
    preEvolution: [
      {
        num: '109',
        name: 'Koffing',
      },
    ],
    baseHappiness: 70,
    captureRate: 60,
    habitat: 'urban',
  },
  {
    id: 111,
    name: 'Rhyhorn',
    height: '0.99 m',
    weight: '115.0 kg',
    genus: 'Spikes Pokémon',
    description:
      'Rhyhorn runs in a straight line, smashing everything in its path.\nIt is not bothered even if it rushes headlong into a block of\nsteel. This Pokémon may feel some pain from the collision the\nnext day, however.',
    stats: [
      {
        statName: 'speed',
        baseStat: 25,
      },
      {
        statName: 'special-defense',
        baseStat: 30,
      },
      {
        statName: 'special-attack',
        baseStat: 30,
      },
      {
        statName: 'defense',
        baseStat: 95,
      },
      {
        statName: 'attack',
        baseStat: 85,
      },
      {
        statName: 'hp',
        baseStat: 80,
      },
    ],
    type: ['Ground', 'Rock'],
    weakness: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'],
    postEvolution: [
      {
        num: '112',
        name: 'Rhydon',
      },
    ],
    baseHappiness: 70,
    captureRate: 120,
    habitat: 'rough-terrain',
  },
  {
    id: 112,
    name: 'Rhydon',
    height: '1.91 m',
    weight: '120.0 kg',
    genus: 'Drill Pokémon',
    description:
      'Rhydon’s horn can crush even uncut diamonds. One sweeping\nblow of its tail can topple a building. This Pokémon’s hide is\nextremely tough. Even direct cannon hits don’t leave a scratch.',
    stats: [
      {
        statName: 'speed',
        baseStat: 40,
      },
      {
        statName: 'special-defense',
        baseStat: 45,
      },
      {
        statName: 'special-attack',
        baseStat: 45,
      },
      {
        statName: 'defense',
        baseStat: 120,
      },
      {
        statName: 'attack',
        baseStat: 130,
      },
      {
        statName: 'hp',
        baseStat: 105,
      },
    ],
    type: ['Ground', 'Rock'],
    weakness: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'],
    preEvolution: [
      {
        num: '111',
        name: 'Rhyhorn',
      },
    ],
    baseHappiness: 70,
    captureRate: 60,
    habitat: 'rough-terrain',
  },
  {
    id: 113,
    name: 'Chansey',
    height: '1.09 m',
    weight: '34.6 kg',
    genus: 'Egg Pokémon',
    description:
      'Chansey lays nutritionally excellent eggs on an everyday basis.\nThe eggs are so delicious, they are easily and eagerly\ndevoured by even those people who have lost their appetite.',
    stats: [
      {
        statName: 'speed',
        baseStat: 50,
      },
      {
        statName: 'special-defense',
        baseStat: 105,
      },
      {
        statName: 'special-attack',
        baseStat: 35,
      },
      {
        statName: 'defense',
        baseStat: 5,
      },
      {
        statName: 'attack',
        baseStat: 5,
      },
      {
        statName: 'hp',
        baseStat: 250,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    baseHappiness: 140,
    captureRate: 30,
    habitat: 'urban',
  },
  {
    id: 114,
    name: 'Tangela',
    height: '0.99 m',
    weight: '35.0 kg',
    genus: 'Vine Pokémon',
    description:
      'Tangela’s vines snap off easily if they are grabbed.\nThis happens without pain, allowing it to make a quick\ngetaway. The lost vines are replaced by newly grown vines the\nvery next day.',
    stats: [
      {
        statName: 'speed',
        baseStat: 60,
      },
      {
        statName: 'special-defense',
        baseStat: 40,
      },
      {
        statName: 'special-attack',
        baseStat: 100,
      },
      {
        statName: 'defense',
        baseStat: 115,
      },
      {
        statName: 'attack',
        baseStat: 55,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Grass'],
    weakness: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 115,
    name: 'Kangaskhan',
    height: '2.21 m',
    weight: '80.0 kg',
    genus: 'Parent Pokémon',
    description:
      'If you come across a young Kangaskhan playing by itself, you\nmust never disturb it or attempt to catch it. The baby\nPokémon’s parent is sure to be in the area, and it will become\nviolently enraged at you.',
    stats: [
      {
        statName: 'speed',
        baseStat: 90,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 40,
      },
      {
        statName: 'defense',
        baseStat: 80,
      },
      {
        statName: 'attack',
        baseStat: 95,
      },
      {
        statName: 'hp',
        baseStat: 105,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 116,
    name: 'Horsea',
    height: '0.41 m',
    weight: '8.0 kg',
    genus: 'Dragon Pokémon',
    description:
      'Horsea eats small insects and moss off of rocks. If the ocean\ncurrent turns fast, this Pokémon anchors itself by wrapping its\ntail around rocks or coral to prevent being washed away.',
    stats: [
      {
        statName: 'speed',
        baseStat: 60,
      },
      {
        statName: 'special-defense',
        baseStat: 25,
      },
      {
        statName: 'special-attack',
        baseStat: 70,
      },
      {
        statName: 'defense',
        baseStat: 70,
      },
      {
        statName: 'attack',
        baseStat: 40,
      },
      {
        statName: 'hp',
        baseStat: 30,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    postEvolution: [
      {
        num: '117',
        name: 'Seadra',
      },
    ],
    baseHappiness: 70,
    captureRate: 225,
    habitat: 'sea',
  },
  {
    id: 117,
    name: 'Seadra',
    height: '1.19 m',
    weight: '25.0 kg',
    genus: 'Dragon Pokémon',
    description:
      'Seadra sleeps after wriggling itself between the branches of\ncoral. Those trying to harvest coral are occasionally stung by\nthis Pokémon’s poison barbs if they fail to notice it.',
    stats: [
      {
        statName: 'speed',
        baseStat: 85,
      },
      {
        statName: 'special-defense',
        baseStat: 45,
      },
      {
        statName: 'special-attack',
        baseStat: 95,
      },
      {
        statName: 'defense',
        baseStat: 95,
      },
      {
        statName: 'attack',
        baseStat: 65,
      },
      {
        statName: 'hp',
        baseStat: 55,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    preEvolution: [
      {
        num: '116',
        name: 'Horsea',
      },
    ],
    baseHappiness: 70,
    captureRate: 75,
    habitat: 'sea',
  },
  {
    id: 118,
    name: 'Goldeen',
    height: '0.61 m',
    weight: '15.0 kg',
    genus: 'Goldfish Pokémon',
    description:
      'Goldeen is a very beautiful Pokémon with fins that billow\nelegantly in water. However, don’t let your guard down around\nthis Pokémon—it could ram you powerfully with its horn.',
    stats: [
      {
        statName: 'speed',
        baseStat: 63,
      },
      {
        statName: 'special-defense',
        baseStat: 50,
      },
      {
        statName: 'special-attack',
        baseStat: 35,
      },
      {
        statName: 'defense',
        baseStat: 60,
      },
      {
        statName: 'attack',
        baseStat: 67,
      },
      {
        statName: 'hp',
        baseStat: 45,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    postEvolution: [
      {
        num: '119',
        name: 'Seaking',
      },
    ],
    baseHappiness: 70,
    captureRate: 225,
    habitat: 'waters-edge',
  },
  {
    id: 119,
    name: 'Seaking',
    height: '1.30 m',
    weight: '39.0 kg',
    genus: 'Goldfish Pokémon',
    description:
      'In the autumn, Seaking males can be seen performing\ncourtship dances in riverbeds to woo females. During this\nseason, this Pokémon’s body coloration is at its most beautiful.',
    stats: [
      {
        statName: 'speed',
        baseStat: 68,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 65,
      },
      {
        statName: 'defense',
        baseStat: 65,
      },
      {
        statName: 'attack',
        baseStat: 92,
      },
      {
        statName: 'hp',
        baseStat: 80,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    preEvolution: [
      {
        num: '118',
        name: 'Goldeen',
      },
    ],
    baseHappiness: 70,
    captureRate: 60,
    habitat: 'waters-edge',
  },
  {
    id: 120,
    name: 'Staryu',
    height: '0.79 m',
    weight: '34.5 kg',
    genus: 'Star Shape Pokémon',
    description:
      'Staryu’s center section has an organ called the core that\nshines bright red. If you go to a beach toward the end of\nsummer, the glowing cores of these Pokémon look like the\nstars in the sky.',
    stats: [
      {
        statName: 'speed',
        baseStat: 85,
      },
      {
        statName: 'special-defense',
        baseStat: 55,
      },
      {
        statName: 'special-attack',
        baseStat: 70,
      },
      {
        statName: 'defense',
        baseStat: 55,
      },
      {
        statName: 'attack',
        baseStat: 45,
      },
      {
        statName: 'hp',
        baseStat: 30,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    postEvolution: [
      {
        num: '121',
        name: 'Starmie',
      },
    ],
    baseHappiness: 70,
    captureRate: 225,
    habitat: 'sea',
  },
  {
    id: 121,
    name: 'Starmie',
    height: '1.09 m',
    weight: '80.0 kg',
    genus: 'Mysterious Pokémon',
    description:
      'Starmie’s center section—the core—glows brightly in seven\ncolors. Because of its luminous nature, this Pokémon has\nbeen given the nickname “the gem of the sea.”',
    stats: [
      {
        statName: 'speed',
        baseStat: 115,
      },
      {
        statName: 'special-defense',
        baseStat: 85,
      },
      {
        statName: 'special-attack',
        baseStat: 100,
      },
      {
        statName: 'defense',
        baseStat: 85,
      },
      {
        statName: 'attack',
        baseStat: 75,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Water', 'Psychic'],
    weakness: ['Electric', 'Grass', 'Bug', 'Ghost', 'Dark'],
    preEvolution: [
      {
        num: '120',
        name: 'Staryu',
      },
    ],
    baseHappiness: 70,
    captureRate: 60,
    habitat: 'sea',
  },
  {
    id: 122,
    name: 'Mr. Mime',
    height: '1.30 m',
    weight: '54.5 kg',
    genus: 'Barrier Pokémon',
    description:
      'Mr. Mime is a master of pantomime. Its gestures and motions\nconvince watchers that something unseeable actually exists.\nOnce the watchers are convinced, the unseeable thing exists\nas if it were real.',
    stats: [
      {
        statName: 'speed',
        baseStat: 90,
      },
      {
        statName: 'special-defense',
        baseStat: 120,
      },
      {
        statName: 'special-attack',
        baseStat: 100,
      },
      {
        statName: 'defense',
        baseStat: 65,
      },
      {
        statName: 'attack',
        baseStat: 45,
      },
      {
        statName: 'hp',
        baseStat: 40,
      },
    ],
    type: ['Psychic'],
    weakness: ['Bug', 'Ghost', 'Dark'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'urban',
  },
  {
    id: 123,
    name: 'Scyther',
    height: '1.50 m',
    weight: '56.0 kg',
    genus: 'Mantis Pokémon',
    description:
      'Scyther is blindingly fast. Its blazing speed enhances the\neffectiveness of the twin scythes on its forearms.\nThis Pokémon’s scythes are so effective, they can slice\nthrough thick logs in one wicked stroke.',
    stats: [
      {
        statName: 'speed',
        baseStat: 105,
      },
      {
        statName: 'special-defense',
        baseStat: 80,
      },
      {
        statName: 'special-attack',
        baseStat: 55,
      },
      {
        statName: 'defense',
        baseStat: 80,
      },
      {
        statName: 'attack',
        baseStat: 110,
      },
      {
        statName: 'hp',
        baseStat: 70,
      },
    ],
    type: ['Bug', 'Flying'],
    weakness: ['Fire', 'Electric', 'Ice', 'Flying', 'Rock'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 124,
    name: 'Jynx',
    height: '1.40 m',
    weight: '40.6 kg',
    genus: 'Human Shape Pokémon',
    description:
      'Jynx walks rhythmically, swaying and shaking its hips as if it\nwere dancing. Its motions are so bouncingly alluring, people\nseeing it are compelled to shake their hips without giving any\nthought to what they are doing.',
    stats: [
      {
        statName: 'speed',
        baseStat: 95,
      },
      {
        statName: 'special-defense',
        baseStat: 95,
      },
      {
        statName: 'special-attack',
        baseStat: 115,
      },
      {
        statName: 'defense',
        baseStat: 35,
      },
      {
        statName: 'attack',
        baseStat: 50,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Ice', 'Psychic'],
    weakness: ['Fire', 'Bug', 'Rock', 'Ghost', 'Dark', 'Steel'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'urban',
  },
  {
    id: 125,
    name: 'Electabuzz',
    height: '1.09 m',
    weight: '30.0 kg',
    genus: 'Electric Pokémon',
    description:
      'When a storm arrives, gangs of this Pokémon compete with\neach other to scale heights that are likely to be stricken by\nlightning bolts. Some towns use Electabuzz in place of\nlightning rods.',
    stats: [
      {
        statName: 'speed',
        baseStat: 105,
      },
      {
        statName: 'special-defense',
        baseStat: 85,
      },
      {
        statName: 'special-attack',
        baseStat: 95,
      },
      {
        statName: 'defense',
        baseStat: 57,
      },
      {
        statName: 'attack',
        baseStat: 83,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Electric'],
    weakness: ['Ground'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 126,
    name: 'Magmar',
    height: '1.30 m',
    weight: '44.5 kg',
    genus: 'Spitfire Pokémon',
    description:
      'In battle, Magmar blows out intensely hot flames from all\nover its body to intimidate its opponent. This Pokémon’s\nfiery bursts create heat waves that ignite grass and trees\nin its surroundings.',
    stats: [
      {
        statName: 'speed',
        baseStat: 93,
      },
      {
        statName: 'special-defense',
        baseStat: 85,
      },
      {
        statName: 'special-attack',
        baseStat: 100,
      },
      {
        statName: 'defense',
        baseStat: 57,
      },
      {
        statName: 'attack',
        baseStat: 95,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Fire'],
    weakness: ['Water', 'Ground', 'Rock'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'mountain',
  },
  {
    id: 127,
    name: 'Pinsir',
    height: '1.50 m',
    weight: '55.0 kg',
    genus: 'Stag Beetle Pokémon',
    description:
      'Pinsir is astoundingly strong. It can grip a foe weighing twice\nits weight in its horns and easily lift it. This Pokémon’s\nmovements turn sluggish in cold places.',
    stats: [
      {
        statName: 'speed',
        baseStat: 85,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 55,
      },
      {
        statName: 'defense',
        baseStat: 100,
      },
      {
        statName: 'attack',
        baseStat: 125,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Bug'],
    weakness: ['Fire', 'Flying', 'Rock'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'forest',
  },
  {
    id: 128,
    name: 'Tauros',
    height: '1.40 m',
    weight: '88.4 kg',
    genus: 'Wild Bull Pokémon',
    description:
      'This Pokémon is not satisfied unless it is rampaging at all\ntimes. If there is no opponent for Tauros to battle, it will\ncharge at thick trees and knock them down to calm itself.',
    stats: [
      {
        statName: 'speed',
        baseStat: 110,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 40,
      },
      {
        statName: 'defense',
        baseStat: 95,
      },
      {
        statName: 'attack',
        baseStat: 100,
      },
      {
        statName: 'hp',
        baseStat: 75,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'grassland',
  },
  {
    id: 129,
    name: 'Magikarp',
    height: '0.89 m',
    weight: '10.0 kg',
    genus: 'Fish Pokémon',
    description:
      'Magikarp is a pathetic excuse for a Pokémon that is only\ncapable of flopping and splashing. This behavior prompted\nscientists to undertake research into it.',
    stats: [
      {
        statName: 'speed',
        baseStat: 80,
      },
      {
        statName: 'special-defense',
        baseStat: 20,
      },
      {
        statName: 'special-attack',
        baseStat: 15,
      },
      {
        statName: 'defense',
        baseStat: 55,
      },
      {
        statName: 'attack',
        baseStat: 10,
      },
      {
        statName: 'hp',
        baseStat: 20,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    postEvolution: [
      {
        num: '130',
        name: 'Gyarados',
      },
    ],
    baseHappiness: 70,
    captureRate: 255,
    habitat: 'waters-edge',
  },
  {
    id: 130,
    name: 'Gyarados',
    height: '6.50 m',
    weight: '235.0 kg',
    genus: 'Atrocious Pokémon',
    description:
      'When Magikarp evolves into Gyarados, its brain cells undergo a\nstructural transformation. It is said that this transformation is to\nblame for this Pokémon’s wildly violent nature.',
    stats: [
      {
        statName: 'speed',
        baseStat: 81,
      },
      {
        statName: 'special-defense',
        baseStat: 100,
      },
      {
        statName: 'special-attack',
        baseStat: 60,
      },
      {
        statName: 'defense',
        baseStat: 79,
      },
      {
        statName: 'attack',
        baseStat: 125,
      },
      {
        statName: 'hp',
        baseStat: 95,
      },
    ],
    type: ['Water', 'Flying'],
    weakness: ['Electric', 'Rock'],
    preEvolution: [
      {
        num: '129',
        name: 'Magikarp',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'waters-edge',
  },
  {
    id: 131,
    name: 'Lapras',
    height: '2.49 m',
    weight: '220.0 kg',
    genus: 'Transport Pokémon',
    description:
      'People have driven Lapras almost to the point of extinction.\nIn the evenings, this Pokémon is said to sing plaintively as it\nseeks what few others of its kind still remain.',
    stats: [
      {
        statName: 'speed',
        baseStat: 60,
      },
      {
        statName: 'special-defense',
        baseStat: 95,
      },
      {
        statName: 'special-attack',
        baseStat: 85,
      },
      {
        statName: 'defense',
        baseStat: 80,
      },
      {
        statName: 'attack',
        baseStat: 85,
      },
      {
        statName: 'hp',
        baseStat: 130,
      },
    ],
    type: ['Water', 'Ice'],
    weakness: ['Electric', 'Grass', 'Fighting', 'Rock'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'sea',
  },
  {
    id: 132,
    name: 'Ditto',
    height: '0.30 m',
    weight: '4.0 kg',
    genus: 'Transform Pokémon',
    description:
      'Ditto rearranges its cell structure to transform itself into other\nshapes. However, if it tries to transform itself into something\nby relying on its memory, this Pokémon manages to get\ndetails wrong.',
    stats: [
      {
        statName: 'speed',
        baseStat: 48,
      },
      {
        statName: 'special-defense',
        baseStat: 48,
      },
      {
        statName: 'special-attack',
        baseStat: 48,
      },
      {
        statName: 'defense',
        baseStat: 48,
      },
      {
        statName: 'attack',
        baseStat: 48,
      },
      {
        statName: 'hp',
        baseStat: 48,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    baseHappiness: 70,
    captureRate: 35,
    habitat: 'urban',
  },
  {
    id: 133,
    name: 'Eevee',
    height: '0.30 m',
    weight: '6.5 kg',
    genus: 'Evolution Pokémon',
    description:
      'Eevee has an unstable genetic makeup that suddenly mutates\ndue to the environment in which it lives. Radiation from various\nstones causes this Pokémon to evolve.',
    stats: [
      {
        statName: 'speed',
        baseStat: 55,
      },
      {
        statName: 'special-defense',
        baseStat: 65,
      },
      {
        statName: 'special-attack',
        baseStat: 45,
      },
      {
        statName: 'defense',
        baseStat: 50,
      },
      {
        statName: 'attack',
        baseStat: 55,
      },
      {
        statName: 'hp',
        baseStat: 55,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    postEvolution: [
      {
        num: '134',
        name: 'Vaporeon',
      },
      {
        num: '135',
        name: 'Jolteon',
      },
      {
        num: '136',
        name: 'Flareon',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'urban',
  },
  {
    id: 134,
    name: 'Vaporeon',
    height: '0.99 m',
    weight: '29.0 kg',
    genus: 'Bubble Jet Pokémon',
    description:
      'Vaporeon underwent a spontaneous mutation and grew fins\nand gills that allow it to live underwater. This Pokémon has the\nability to freely control water.',
    stats: [
      {
        statName: 'speed',
        baseStat: 65,
      },
      {
        statName: 'special-defense',
        baseStat: 95,
      },
      {
        statName: 'special-attack',
        baseStat: 110,
      },
      {
        statName: 'defense',
        baseStat: 60,
      },
      {
        statName: 'attack',
        baseStat: 65,
      },
      {
        statName: 'hp',
        baseStat: 130,
      },
    ],
    type: ['Water'],
    weakness: ['Electric', 'Grass'],
    preEvolution: [
      {
        num: '133',
        name: 'Eevee',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'urban',
  },
  {
    id: 135,
    name: 'Jolteon',
    height: '0.79 m',
    weight: '24.5 kg',
    genus: 'Lightning Pokémon',
    description:
      'Jolteon’s cells generate a low level of electricity. This power is\namplified by the static electricity of its fur, enabling the\nPokémon to drop thunderbolts. The bristling fur is made of\nelectrically charged needles.',
    stats: [
      {
        statName: 'speed',
        baseStat: 130,
      },
      {
        statName: 'special-defense',
        baseStat: 95,
      },
      {
        statName: 'special-attack',
        baseStat: 110,
      },
      {
        statName: 'defense',
        baseStat: 60,
      },
      {
        statName: 'attack',
        baseStat: 65,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Electric'],
    weakness: ['Ground'],
    preEvolution: [
      {
        num: '133',
        name: 'Eevee',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'urban',
  },
  {
    id: 136,
    name: 'Flareon',
    height: '0.89 m',
    weight: '25.0 kg',
    genus: 'Flame Pokémon',
    description:
      'Flareon’s fluffy fur has a functional purpose—it releases heat\ninto the air so that its body does not get excessively hot.\nThis Pokémon’s body temperature can rise to a maximum of\n1,650 degrees Fahrenheit.',
    stats: [
      {
        statName: 'speed',
        baseStat: 65,
      },
      {
        statName: 'special-defense',
        baseStat: 110,
      },
      {
        statName: 'special-attack',
        baseStat: 95,
      },
      {
        statName: 'defense',
        baseStat: 60,
      },
      {
        statName: 'attack',
        baseStat: 130,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Fire'],
    weakness: ['Water', 'Ground', 'Rock'],
    preEvolution: [
      {
        num: '133',
        name: 'Eevee',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'urban',
  },
  {
    id: 137,
    name: 'Porygon',
    height: '0.79 m',
    weight: '36.5 kg',
    genus: 'Virtual Pokémon',
    description:
      'Porygon is capable of reverting itself entirely back to program\ndata and entering cyberspace. This Pokémon is copy protected\nso it cannot be duplicated by copying.',
    stats: [
      {
        statName: 'speed',
        baseStat: 40,
      },
      {
        statName: 'special-defense',
        baseStat: 75,
      },
      {
        statName: 'special-attack',
        baseStat: 85,
      },
      {
        statName: 'defense',
        baseStat: 70,
      },
      {
        statName: 'attack',
        baseStat: 60,
      },
      {
        statName: 'hp',
        baseStat: 65,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'urban',
  },
  {
    id: 138,
    name: 'Omanyte',
    height: '0.41 m',
    weight: '7.5 kg',
    genus: 'Spiral Pokémon',
    description:
      'Omanyte is one of the ancient and long-since-extinct Pokémon\nthat have been regenerated from fossils by people. If attacked\nby an enemy, it withdraws itself inside its hard shell.',
    stats: [
      {
        statName: 'speed',
        baseStat: 35,
      },
      {
        statName: 'special-defense',
        baseStat: 55,
      },
      {
        statName: 'special-attack',
        baseStat: 90,
      },
      {
        statName: 'defense',
        baseStat: 100,
      },
      {
        statName: 'attack',
        baseStat: 40,
      },
      {
        statName: 'hp',
        baseStat: 35,
      },
    ],
    type: ['Rock', 'Water'],
    weakness: ['Electric', 'Grass', 'Fighting', 'Ground'],
    postEvolution: [
      {
        num: '139',
        name: 'Omastar',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'sea',
  },
  {
    id: 139,
    name: 'Omastar',
    height: '0.99 m',
    weight: '35.0 kg',
    genus: 'Spiral Pokémon',
    description:
      'Omastar uses its tentacles to capture its prey. It is believed to\nhave become extinct because its shell grew too large and\nheavy, causing its movements to become too slow\nand ponderous.',
    stats: [
      {
        statName: 'speed',
        baseStat: 55,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 115,
      },
      {
        statName: 'defense',
        baseStat: 125,
      },
      {
        statName: 'attack',
        baseStat: 60,
      },
      {
        statName: 'hp',
        baseStat: 70,
      },
    ],
    type: ['Rock', 'Water'],
    weakness: ['Electric', 'Grass', 'Fighting', 'Ground'],
    preEvolution: [
      {
        num: '138',
        name: 'Omanyte',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'sea',
  },
  {
    id: 140,
    name: 'Kabuto',
    height: '0.51 m',
    weight: '11.5 kg',
    genus: 'Shellfish Pokémon',
    description:
      'Kabuto is a Pokémon that has been regenerated from a fossil.\nHowever, in extremely rare cases, living examples have been\ndiscovered. The Pokémon has not changed at all for\n300 million years.',
    stats: [
      {
        statName: 'speed',
        baseStat: 55,
      },
      {
        statName: 'special-defense',
        baseStat: 45,
      },
      {
        statName: 'special-attack',
        baseStat: 55,
      },
      {
        statName: 'defense',
        baseStat: 90,
      },
      {
        statName: 'attack',
        baseStat: 80,
      },
      {
        statName: 'hp',
        baseStat: 30,
      },
    ],
    type: ['Rock', 'Water'],
    weakness: ['Electric', 'Grass', 'Fighting', 'Ground'],
    postEvolution: [
      {
        num: '141',
        name: 'Kabutops',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'sea',
  },
  {
    id: 141,
    name: 'Kabutops',
    height: '1.30 m',
    weight: '40.5 kg',
    genus: 'Shellfish Pokémon',
    description:
      'Kabutops swam underwater to hunt for its prey in ancient\ntimes. The Pokémon was apparently evolving from being a\nwater dweller to living on land as evident from the beginnings\nof change in its gills and legs.',
    stats: [
      {
        statName: 'speed',
        baseStat: 80,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 65,
      },
      {
        statName: 'defense',
        baseStat: 105,
      },
      {
        statName: 'attack',
        baseStat: 115,
      },
      {
        statName: 'hp',
        baseStat: 60,
      },
    ],
    type: ['Rock', 'Water'],
    weakness: ['Electric', 'Grass', 'Fighting', 'Ground'],
    preEvolution: [
      {
        num: '140',
        name: 'Kabuto',
      },
    ],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'sea',
  },
  {
    id: 142,
    name: 'Aerodactyl',
    height: '1.80 m',
    weight: '59.0 kg',
    genus: 'Fossil Pokémon',
    description:
      'Aerodactyl is a Pokémon from the age of dinosaurs. It was\nregenerated from genetic material extracted from amber. It is\nimagined to have been the king of the skies in ancient times.',
    stats: [
      {
        statName: 'speed',
        baseStat: 130,
      },
      {
        statName: 'special-defense',
        baseStat: 75,
      },
      {
        statName: 'special-attack',
        baseStat: 60,
      },
      {
        statName: 'defense',
        baseStat: 65,
      },
      {
        statName: 'attack',
        baseStat: 105,
      },
      {
        statName: 'hp',
        baseStat: 80,
      },
    ],
    type: ['Rock', 'Flying'],
    weakness: ['Water', 'Electric', 'Ice', 'Rock', 'Steel'],
    baseHappiness: 70,
    captureRate: 45,
    habitat: 'mountain',
  },
  {
    id: 143,
    name: 'Snorlax',
    height: '2.11 m',
    weight: '460.0 kg',
    genus: 'Sleeping Pokémon',
    description:
      'Snorlax’s typical day consists of nothing more than eating and\nsleeping. It is such a docile Pokémon that there are children\nwho use its expansive belly as a place to play.',
    stats: [
      {
        statName: 'speed',
        baseStat: 30,
      },
      {
        statName: 'special-defense',
        baseStat: 110,
      },
      {
        statName: 'special-attack',
        baseStat: 65,
      },
      {
        statName: 'defense',
        baseStat: 65,
      },
      {
        statName: 'attack',
        baseStat: 110,
      },
      {
        statName: 'hp',
        baseStat: 160,
      },
    ],
    type: ['Normal'],
    weakness: ['Fighting'],
    baseHappiness: 70,
    captureRate: 25,
    habitat: 'mountain',
  },
  {
    id: 144,
    name: 'Articuno',
    height: '1.70 m',
    weight: '55.4 kg',
    genus: 'Freeze Pokémon',
    description:
      'Articuno is a legendary bird Pokémon that can control ice.\nThe flapping of its wings chills the air. As a result, it is said\nthat when this Pokémon flies, snow will fall.',
    stats: [
      {
        statName: 'speed',
        baseStat: 85,
      },
      {
        statName: 'special-defense',
        baseStat: 125,
      },
      {
        statName: 'special-attack',
        baseStat: 95,
      },
      {
        statName: 'defense',
        baseStat: 100,
      },
      {
        statName: 'attack',
        baseStat: 85,
      },
      {
        statName: 'hp',
        baseStat: 90,
      },
    ],
    type: ['Ice', 'Flying'],
    weakness: ['Fire', 'Electric', 'Rock', 'Steel'],
    baseHappiness: 35,
    captureRate: 3,
    habitat: 'rare',
  },
  {
    id: 145,
    name: 'Zapdos',
    height: '1.60 m',
    weight: '52.6 kg',
    genus: 'Electric Pokémon',
    description:
      'Zapdos is a legendary bird Pokémon that has the ability to\ncontrol electricity. It usually lives in thunderclouds.\nThe Pokémon gains power if it is stricken by lightning bolts.',
    stats: [
      {
        statName: 'speed',
        baseStat: 100,
      },
      {
        statName: 'special-defense',
        baseStat: 90,
      },
      {
        statName: 'special-attack',
        baseStat: 125,
      },
      {
        statName: 'defense',
        baseStat: 85,
      },
      {
        statName: 'attack',
        baseStat: 90,
      },
      {
        statName: 'hp',
        baseStat: 90,
      },
    ],
    type: ['Electric', 'Flying'],
    weakness: ['Ice', 'Rock'],
    baseHappiness: 35,
    captureRate: 3,
    habitat: 'rare',
  },
  {
    id: 146,
    name: 'Moltres',
    height: '2.01 m',
    weight: '60.0 kg',
    genus: 'Flame Pokémon',
    description:
      'Moltres is a legendary bird Pokémon that has the ability to\ncontrol fire. If this Pokémon is injured, it is said to dip its body\nin the molten magma of a volcano to burn and heal itself.',
    stats: [
      {
        statName: 'speed',
        baseStat: 90,
      },
      {
        statName: 'special-defense',
        baseStat: 85,
      },
      {
        statName: 'special-attack',
        baseStat: 125,
      },
      {
        statName: 'defense',
        baseStat: 90,
      },
      {
        statName: 'attack',
        baseStat: 100,
      },
      {
        statName: 'hp',
        baseStat: 90,
      },
    ],
    type: ['Fire', 'Flying'],
    weakness: ['Water', 'Electric', 'Rock'],
    baseHappiness: 35,
    captureRate: 3,
    habitat: 'rare',
  },
  {
    id: 147,
    name: 'Dratini',
    height: '1.80 m',
    weight: '3.3 kg',
    genus: 'Dragon Pokémon',
    description:
      'Dratini continually molts and sloughs off its old skin. It does so\nbecause the life energy within its body steadily builds to reach\nuncontrollable levels.',
    stats: [
      {
        statName: 'speed',
        baseStat: 50,
      },
      {
        statName: 'special-defense',
        baseStat: 50,
      },
      {
        statName: 'special-attack',
        baseStat: 50,
      },
      {
        statName: 'defense',
        baseStat: 45,
      },
      {
        statName: 'attack',
        baseStat: 64,
      },
      {
        statName: 'hp',
        baseStat: 41,
      },
    ],
    type: ['Dragon'],
    weakness: ['Ice', 'Dragon', 'Fairy'],
    postEvolution: [
      {
        num: '148',
        name: 'Dragonair',
      },
      {
        num: '149',
        name: 'Dragonite',
      },
    ],
    baseHappiness: 35,
    captureRate: 45,
    habitat: 'waters-edge',
  },
  {
    id: 148,
    name: 'Dragonair',
    height: '3.99 m',
    weight: '16.5 kg',
    genus: 'Dragon Pokémon',
    description:
      'Dragonair stores an enormous amount of energy inside its\nbody. It is said to alter weather conditions in its vicinity by\ndischarging energy from the crystals on its neck and tail.',
    stats: [
      {
        statName: 'speed',
        baseStat: 70,
      },
      {
        statName: 'special-defense',
        baseStat: 70,
      },
      {
        statName: 'special-attack',
        baseStat: 70,
      },
      {
        statName: 'defense',
        baseStat: 65,
      },
      {
        statName: 'attack',
        baseStat: 84,
      },
      {
        statName: 'hp',
        baseStat: 61,
      },
    ],
    type: ['Dragon'],
    weakness: ['Ice', 'Dragon', 'Fairy'],
    preEvolution: [
      {
        num: '147',
        name: 'Dratini',
      },
    ],
    postEvolution: [
      {
        num: '149',
        name: 'Dragonite',
      },
    ],
    baseHappiness: 35,
    captureRate: 45,
    habitat: 'waters-edge',
  },
  {
    id: 149,
    name: 'Dragonite',
    height: '2.21 m',
    weight: '210.0 kg',
    genus: 'Dragon Pokémon',
    description:
      'Dragonite is capable of circling the globe in just 16 hours.\nIt is a kindhearted Pokémon that leads lost and foundering\nships in a storm to the safety of land.',
    stats: [
      {
        statName: 'speed',
        baseStat: 80,
      },
      {
        statName: 'special-defense',
        baseStat: 100,
      },
      {
        statName: 'special-attack',
        baseStat: 100,
      },
      {
        statName: 'defense',
        baseStat: 95,
      },
      {
        statName: 'attack',
        baseStat: 134,
      },
      {
        statName: 'hp',
        baseStat: 91,
      },
    ],
    type: ['Dragon', 'Flying'],
    weakness: ['Ice', 'Rock', 'Dragon', 'Fairy'],
    preEvolution: [
      {
        num: '147',
        name: 'Dratini',
      },
      {
        num: '148',
        name: 'Dragonair',
      },
    ],
    baseHappiness: 35,
    captureRate: 45,
    habitat: 'waters-edge',
  },
  {
    id: 150,
    name: 'Mewtwo',
    height: '2.01 m',
    weight: '122.0 kg',
    genus: 'Genetic Pokémon',
    description:
      'Mewtwo is a Pokémon that was created by genetic\nmanipulation. However, even though the scientific power of\nhumans created this Pokémon’s body, they failed to endow\nMewtwo with a compassionate heart.',
    stats: [
      {
        statName: 'speed',
        baseStat: 130,
      },
      {
        statName: 'special-defense',
        baseStat: 90,
      },
      {
        statName: 'special-attack',
        baseStat: 154,
      },
      {
        statName: 'defense',
        baseStat: 90,
      },
      {
        statName: 'attack',
        baseStat: 110,
      },
      {
        statName: 'hp',
        baseStat: 106,
      },
    ],
    type: ['Psychic'],
    weakness: ['Bug', 'Ghost', 'Dark'],
    baseHappiness: 0,
    captureRate: 3,
    habitat: 'rare',
  },
  {
    id: 151,
    name: 'Mew',
    height: '0.41 m',
    weight: '4.0 kg',
    genus: 'New Species Pokémon',
    description:
      'Mew is said to possess the genetic composition of all\nPokémon. It is capable of making itself invisible at will,\nso it entirely avoids notice even if it approaches people.',
    stats: [
      {
        statName: 'speed',
        baseStat: 100,
      },
      {
        statName: 'special-defense',
        baseStat: 100,
      },
      {
        statName: 'special-attack',
        baseStat: 100,
      },
      {
        statName: 'defense',
        baseStat: 100,
      },
      {
        statName: 'attack',
        baseStat: 100,
      },
      {
        statName: 'hp',
        baseStat: 100,
      },
    ],
    type: ['Psychic'],
    weakness: ['Bug', 'Ghost', 'Dark'],
    baseHappiness: 100,
    captureRate: 45,
    habitat: 'rare',
  },
];
class DisplayPokemon extends Component {
  state = {
    pokemonNumber: this.props.match.params.id,
    pokemonGitData: {},
    pokeApiData: {},
    species: {},
  };

  render() {
    // destructure pokemon from git api
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
        (text?.language?.name === 'en') & (text?.version?.name === 'omega-ruby')
    );
    let genus = genera?.find((g) => g?.language?.name === 'en');

    let { base_happiness, capture_rate, habitat } = this.state?.species || {};
    let stata = [];
    let stat1 = pokeApiData?.stats?.map((s) =>
      stata.push({ statName: s?.stat?.name, baseStat: s?.base_stat })
    );
    let pokemonObj = {
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
    // pokemonJson = [];
    // delete pokemonJson[pokemonObj?.id];
    // pokemonJson.push({ pokemonObj });

    // console.log(JSON.stringify(pokemonObj));

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
              name={pokeApiData?.name}
              genus={genus?.genus}
              id={this.props.match.params.id}
            />
            <PokemonType type={pokemonDisplay?.type} />
            <Info
              height={pokeApiData?.height}
              id={pokeApiData?.id}
              weight={pokeApiData?.weight}
            />
            <Description flavourText={flavourText?.flavor_text} />
            <Stats stats={pokeApiData?.stats} />
            <Weakness weaknesses={pokemonDisplay?.weaknesses} />
            <Evolutions
              pokeDisplay={pokemonDisplay}
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
        // let pokemonObj = {
        //   id: pokemonDisplay?.id,
        //   name: pokemonDisplay?.name,
        //   height: pokemonDisplay?.height,
        //   weight: pokemonDisplay?.weight,
        //   genus: genus?.genus,
        //   description: flavourText?.flavor_text,
        //   stats: stata,
        //   type: pokemonDisplay?.type,
        //   weakness: pokemonDisplay?.weaknesses,
        //   preEvolution: pokemonDisplay?.prev_evolution,
        //   postEvolution: pokemonDisplay?.next_evolution,
        //   baseHappiness: base_happiness,
        //   captureRate: capture_rate || null,
        //   habitat: habitat?.name,
        // };
        pokemonJson.push({
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
        });
        // pokemonJson = [];
        console.log(JSON.stringify(pokemonJson));
        console.log(pokemonJson);
        console.log(pokemonJson.length, p.length);
      });
    });
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
