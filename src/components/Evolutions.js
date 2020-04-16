import React from 'react';
import Evolution from './Evolution';
import { FilledDiv } from './Elements';

const Evolutions = (props) => {
  let preEv = props?.preEvolution;
  let nexEv = props?.postEvolution;

  if (preEv) {
    if (nexEv) {
      // Map previous, then current then next evolution
      return (
        <FilledDiv>
          <h3>Evolutions</h3>
          {preEv?.map((t) => (
            <Evolution imageid={t?.num?.replace(/^0+/, '')} />
          ))}
          <Evolution imageid={props.imageId} />
          {nexEv?.map((t) => (
            <Evolution imageid={t?.num?.replace(/^0+/, '')} />
          ))}
        </FilledDiv>
      );
    } else {
      // map all previous evolutions and display current
      return (
        <FilledDiv>
          <h3>Evolutions</h3>
          {preEv?.map((t) => (
            <Evolution imageid={t?.num?.replace(/^0+/, '')} />
          ))}
          <Evolution imageid={props.imageId} />
        </FilledDiv>
      );
    }
  } else if (nexEv) {
    // display current and map all next evolutions
    return (
      <FilledDiv>
        <h3>Evolutions</h3>
        <Evolution imageid={props.imageId} />
        {nexEv?.map((t) => (
          <Evolution imageid={t?.num?.replace(/^0+/, '')} />
        ))}
      </FilledDiv>
    );
  } else {
    return null;
  }
};

export default Evolutions;
