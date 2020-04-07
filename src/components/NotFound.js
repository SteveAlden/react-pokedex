import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import FadeIn from 'react-fade-in';

const NotFoundPage = () => {
  return (
    <Container style={{ paddingTop: '150px', color: 'white' }} align='center'>
      <FadeIn delay={100} transitionDuration={700}>
        <img
          width='80%'
          alt=''
          // src='https://res.cloudinary.com/alden/cloud/image/upload/v1586094764/404-not-found.png'
          src='https://res.cloudinary.com/aldencloud/image/upload/v1586094290/404_notfound.png'
          // src='https://res.cloudinary.com/aldencloud/image/upload/v1585543806/404_notfound_black.png'
        />
        <h1>Uh-oh!</h1>
        <h4>You look lost on your journey!</h4>
        <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>
          {'🡨'} Go back home
        </Link>
      </FadeIn>
    </Container>
  );
};
export default NotFoundPage;
