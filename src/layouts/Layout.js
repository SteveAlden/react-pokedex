import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
// export default Layout;
