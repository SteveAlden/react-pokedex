import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <Container fluid style={{ marginTop: '2vh' }}>
          <span>
            <p className='copyright' align='center'>
              &copy; {new Date().getFullYear()} S Steve Alden, all rights
              reserved. Made with {/* ❤❤️ 💗*/}
              <img
                // width='20px'
                height='18px'
                alt='LOVE'
                src='https://res.cloudinary.com/aldencloud/image/upload/v1585305047/Heart/red-heart.png'
              />
            </p>
          </span>
        </Container>
      </footer>
    );
  }
}

export default Footer;
