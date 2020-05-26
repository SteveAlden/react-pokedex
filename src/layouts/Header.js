import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar
      fixed='top'
      style={{
        backdropFilter: 'blur(10px) saturate(150%)',
        backgroundColor: 'rgba(0,0,0,0.2)',
        // backgroundColor: 'rgba(20,20,20,0.2)',
      }}
    >
      <Nav.Link
        href='/home'
        style={{
          fontSize: '23px',
          textDecoration: 'none',
          color: 'white',
        }}
      >
        <img
          alt=''
          src='https://res.cloudinary.com/aldencloud/image/upload/v1585557161/ball-master.png'
          height='35'
        />
        {'   '}
        Steve's Pokédex
      </Nav.Link>
    </Navbar>
  );
};

export default Header;
