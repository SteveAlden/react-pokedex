import React from 'react';
import Evolution from './Evolution';

const Evolutions = (props) => {
  console.log('in eve');
  console.log(props);
  let preEv = props?.pokeDisplay?.prev_evolution;
  console.log('preEv', preEv);
  let nexEv = props?.pokeDisplay?.next_evolution;
  console.log('nexEv', nexEv);
  if (preEv) {
    if (nexEv) {
      // Map previous, then current then next evolution
      return (
        <>
          <h3>Evolutions</h3>
          {preEv?.map((t) => (
            <Evolution imageid={t?.num?.replace(/^0+/, '')} />
          ))}
          <Evolution imageid={props.imageId} />
          {nexEv?.map((t) => (
            <Evolution imageid={t?.num?.replace(/^0+/, '')} />
          ))}
        </>
      );
    } else {
      // map all previous evolutions and display current
      return (
        <>
          <h3>Evolutions</h3>
          {preEv?.map((t) => (
            <Evolution imageid={t?.num?.replace(/^0+/, '')} />
          ))}

          <Evolution imageid={props.imageId} />
        </>
      );
    }
  } else if (nexEv) {
    // display current and map all next evolutions
    return (
      <>
        <h3>Evolutions</h3>
        <Evolution imageid={props.imageId} />
        {nexEv?.map((t) => (
          <Evolution imageid={t?.num?.replace(/^0+/, '')} />
        ))}
      </>
    );
  } else {
    return null;
  }
};

export default Evolutions;
