import React from 'react';
import ReactLoading from 'react-loading';
import FadeIn from 'react-fade-in';
const Loading = () => {
  return (
    <div align='center' style={{ marginTop: '20%' }}>
      <FadeIn>
        <ReactLoading
          // type={'bubbles'}
          type={'bars'}
          color={'white'}
        />
      </FadeIn>
    </div>
  );
};
export default Loading;
