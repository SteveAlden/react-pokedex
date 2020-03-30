import React, { Component } from 'react';
import { ProgressBar, Row, Col, Container } from 'react-bootstrap';
import './stats.css';
class Stats extends Component {
  getStatName = name => {
    switch (name) {
      // case 'speed': return 'Spd';
      // case 'attack': return 'Att';
      // case 'defense': return 'Def';
      // case 'special-attack': return 'S.Att';
      // case 'special-defense': return 'S.Def';
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
            <Col
              align='left'
              // lg='auto'
              // className='col-md-auto'
              className='col-sm-1 col-md-2'
            >
              <h5>{this.getStatName(s?.stat?.name)}</h5>
            </Col>
            {/* <Col
              align='right'
              className='col-md-auto'
              // className='align-self-end'
            >
              <h5>{s?.base_stat}</h5>
            </Col> */}
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
                    // backgroundImage:
                    //   'linear-gradient(to right, rgba(42,187,239,1) 0%, rgba(239,9,105,1) 100%'
                    // backgroundImage:
                    //   'linear-gradient(to right, rgba(25,25,25,1) 0%, rgba(42,187,239,1) 42%, rgba(0,235,180,1) 100%)'
                    backgroundImage:
                      'linear-gradient(to right, rgb(25, 25, 25) 0%, rgba(239,9,105,1) 100%'
                    // backgroundImage:
                    //   'linear-gradient(to right, rgb(25, 25, 25) 0%, rgba(239,9,105,1) 100%'
                  }}
                >
                  {/* <h5>{s?.base_stat}</h5> */}
                  {/* <div class='progress-value'>
                    <span>42</span>%
                  </div> */}
                  {/* {s?.stat?.name} */}
                </div>
              </div>
            </Col>
          </Row>
          <br />
        </>
      );
    }
  };
  getNewDiv = () => {
    return (
      <Container style={{}}>
        <div class='row'>
          <div class='col-md-6'>
            <h3 class='progress-title'>HTML5</h3>

            <div class='progress'>
              <div
                class='progress-bar progress-bar-striped'
                style={{ width: '50%' }}
              ></div>
              <div class='progress-value'>
                <span>42</span>%
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  };
  render() {
    let stat;
    if (this.props?.stats) {
      stat = this.props?.stats;
    }
    // return <div>{this.getNewDiv()}</div>;
    return <div>{stat?.map(s => this.getDiv(s))}</div>;
  }
}
export default Stats;
