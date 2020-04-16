import React from 'react';
import { EmptyDiv, HollowDiv, Hr } from './Elements';
import { Row, Col } from 'react-bootstrap';
import { NavArrowLeft, NavArrowRight } from './NavArrows';
const Description = (props) => {
  return (
    <HollowDiv>
      <h5 style={{ textAlign: 'justify' }}>{props.flavourText}</h5>
    </HollowDiv>
  );
};

const Info = (props) => {
  const createCol = (ele1, ele2) => {
    return (
      <Col>
        <h5>{ele1}</h5>
        {ele2}
      </Col>
    );
  };
  return (
    <HollowDiv>
      <Row>
        {createCol(props?.height, 'Height')}
        {createCol(props?.id, 'Number')}
        {createCol(props?.weight, 'Weight')}
      </Row>
    </HollowDiv>
  );
};
const Name = (props) => {
  return (
    <EmptyDiv>
      {/* <Hr /> */}
      <br />
      <Row>
        <Col>
          <NavArrowLeft pokeId={parseInt(props?.id) - 1} />
        </Col>
        <Col>
          <h1 align='center' style={{ marginTop: '-6px' }}>
            {props?.name?.toUpperCase()}
          </h1>
          <h6 style={{ marginTop: '-10px', marginBottom: '-5px' }}>
            {props?.genus}
          </h6>
        </Col>
        <Col>
          <NavArrowRight pokeId={parseInt(props?.id) + 1} />
        </Col>
      </Row>
      {/* <Hr /> */}
    </EmptyDiv>
  );
};

export { Name, Info, Description };
