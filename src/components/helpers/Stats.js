import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

class Stats extends Component {
  getStatName = name => {
    switch (name) {
      case 'speed':
        return 'Speed    ';
      case 'attack':
        return 'Attack   ';
      case 'defense':
        return 'Defence  ';
      case 'special-attack':
        return 'S.Attack ';
      case 'special-defense':
        return 'S.Defence';
      case 'hp':
        return 'Hp';
    }
  };

  getDiv = s => {
    {
      let baseStat = s?.base_stat;
      return (
        <>
          <Row>
            <Col align='left' className='col-sm-1 col-md-2'>
              <h5>{this.getStatName(s?.stat?.name)}</h5>
            </Col>
            <Col className='col-sm-11 col-md-10' align='left'>
              <div
                class='progress'
                style={{ height: '15px', backgroundColor: 'rgb(25, 25, 25)' }}
              >
                {s?.base_stat}
                <div
                  class='progress-bar'
                  style={{
                    width: baseStat + '%',
                    backgroundImage:
                      'linear-gradient(to right, rgb(25, 25, 25) 0%, rgba(239,9,105,1) 100%'
                  }}
                ></div>
              </div>
            </Col>
          </Row>
          <br />
        </>
      );
    }
  };

  render() {
    let stat;
    if (this.props?.stats) {
      stat = this.props?.stats;
    }
    return <div>{stat?.map(s => this.getDiv(s))}</div>;
  }
}

export default Stats;
