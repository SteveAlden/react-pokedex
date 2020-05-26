import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    // <div className='center-navbar'>
    <Navbar
      fixed='top'
      style={{
        backdropFilter: 'blur(10px) saturate(150%)',
        backgroundColor: 'rgba(20,20,20,0.5)',
      }}
      variant='dark'
    >
      <Nav.Link
        href='/home'
        style={{
          fontSize: '22px',
          textDecoration: 'none',
          color: 'white',
        }}
      >
        <img
          alt=''
          src='https://res.cloudinary.com/aldencloud/image/upload/v1585557161/ball-master.png'
          height='30'
          className='d-inline-block'
        />
        {'   '}
        Steve's Pokédex
      </Nav.Link>
    </Navbar>
    // </div>
  );
};

export default Header;
