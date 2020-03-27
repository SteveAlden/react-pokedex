import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='center-navbar'>
      {/* <Navbar bg='dark' variant='dark'> */}
      <Navbar
        fixed='top'
        style={{
          backdropFilter: 'blur(10px) saturate(150%)',
          backgroundColor: 'rgba(20,20,20,0.5)'
          // paddingBottom: '15px'
          // paddingTop: '5px',
          // paddingBottom: '5px'
          // marginBottom: '100px'
          // marginBottom: '100px'
        }}
        variant='dark'
        // fixed='top'
      >
        {/* <Nav> */}
        <Nav.Link href='/react-pokedex-carousel'>
          <Navbar.Brand>
            <h3>
              <img
                alt=''
                // https://files.thetriangle.org/assets/pokemon/ball-master.png
                // https://www.pikpng.com/pngl/m/59-590020_pokeball-png-photo-clipart.png
                // https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/950cb3ae-f4e7-486e-9058-724c66bd7961/d7e57f0-a56ceb42-3c44-48d9-97dd-9b288b2c3e07.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1MGNiM2FlLWY0ZTctNDg2ZS05MDU4LTcyNGM2NmJkNzk2MVwvZDdlNTdmMC1hNTZjZWI0Mi0zYzQ0LTQ4ZDktOTdkZC05YjI4OGIyYzNlMDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6Y_fhBzzr2RnT2gX2PC7AWMNzw7BtULrxOmSQkd9BpA
                src='https://files.thetriangle.org/assets/pokemon/ball-master.png'
                // width='35'
                height='35'
                className='d-inline-block align-top'
              />
              {'   '}
              Steve's Pokédex
            </h3>
          </Navbar.Brand>
        </Nav.Link>
        {/* </Nav> */}
      </Navbar>
    </div>
  );
}
export default Header;
