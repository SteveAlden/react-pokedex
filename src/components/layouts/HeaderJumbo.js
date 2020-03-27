import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
const Jumbo = () => {
  return (
    <>
      <img
        // style={{ marginTop: '50px' }}
        src={`https://res.cloudinary.com/aldencloud/image/upload/v1584894390/JumbotronPoke_2_1_dl9hlb.png`}
        width='100%'
      />
      {/* <Jumbotron fluid style={{ backgroundColor: 'rgb(25,25,25)' }}>
        <img
          // style={{ marginTop: '50px' }}
          src={`https://res.cloudinary.com/aldencloud/image/upload/v1584894390/JumbotronPoke_2_1_dl9hlb.png`}
          width='100%'
        />
      </Jumbotron> */}
    </>
  );
};

export default Jumbo;
