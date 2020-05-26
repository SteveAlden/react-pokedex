import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar
      fixed='top'
      style={{
        backdropFilter: 'blur(10px) saturate(150%)',
        backgroundColor: 'rgba(20,20,20,0.2)',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.4)',
      }}
    >
      <Nav.Link
        href='/home'
        style={{
          textDecoration: 'none',
          color: 'white',
          padding: '8px 0px 0px 10px',
        }}
      >
        <h3>
          <img
            alt=''
            src='https://res.cloudinary.com/aldencloud/image/upload/v1585557161/ball-master.png'
            height='35'
          />
          {'   '}
          Steve's Pokédex
        </h3>
      </Nav.Link>
    </Navbar>
  );
};

export default Header;
