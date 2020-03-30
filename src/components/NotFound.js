import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// import PageNotFound from '../assets/images/PageNotFound';
class NotFoundPage extends React.Component {
  render() {
    return (
      <Container style={{ paddingTop: '150px' }} align='center'>
        <Link
          to='/react-pokedex-carousel'
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <img
            width='80%'
            src='https://res.cloudinary.com/aldencloud/image/upload/v1585543806/404_notfound.png'
          />
          <h1>Uh-oh!</h1>
          <h3>You look lost on your journey!</h3>
        </Link>
      </Container>
    );
  }
}
export default NotFoundPage;
