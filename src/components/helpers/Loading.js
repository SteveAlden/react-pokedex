import React from 'react';
import ReactLoading from 'react-loading';
import FadeIn from 'react-fade-in';
export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ done: true });
    }, 3000);
  }
  render() {
    return (
      <div align='center' style={{ marginTop: '20%' }}>
        <FadeIn>
          <ReactLoading
            // type={'bubbles'}
            type={'bars'}
            color={'white'}
            //  width={'5%'}
          />
        </FadeIn>
      </div>
    );
  }
}
