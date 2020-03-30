import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <div className='center-navbar'>
      <Navbar
        fixed='top'
        style={{
          backdropFilter: 'blur(10px) saturate(150%)',
          backgroundColor: 'rgba(20,20,20,0.5)'
        }}
        variant='dark'
      >
        <Nav.Link href='/react-pokedex-carousel'>
          <Navbar.Brand>
            <h3>
              <img
                alt=''
                src='https://res.cloudinary.com/aldencloud/image/upload/v1585557161/ball-master.png'
                height='35'
                className='d-inline-block align-top'
              />
              {'   '}
              Steve's Pokédex
            </h3>
          </Navbar.Brand>
        </Nav.Link>
      </Navbar>
    </div>
  );
}

export default Header;
