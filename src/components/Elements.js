import React from 'react';
import styled from 'styled-components/macro';
const EmptyElement = styled.div`
  background-color: none;
  text-align: center;
  margin-bottom: 1.4em;
`;
const HollowElement = styled(EmptyElement)`
  padding: 2vh 5vw 2vh 5vw;
  border-radius: 12px;
  border: 5px solid rgb(25, 25, 25);
  background-color: rgb(20, 20, 20);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
`;
const FilledElement = styled(EmptyElement)`
  padding: 2vh 5vw 2vh 5vw;
  border-radius: 12px;
  background-color: rgb(25, 25, 25);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
`;
const HrElement = styled.hr`
  color: rgb(25, 25, 25);
  border: 2.5px solid rgb(25, 25, 25);
  width: 60%;
`;

const FilledDiv = (props) => {
  return (
    <>
      <FilledElement>{props.children}</FilledElement>
    </>
  );
};

const HollowDiv = (props) => {
  return (
    <>
      <HollowElement>{props.children}</HollowElement>
    </>
  );
};

const EmptyDiv = (props) => {
  return (
    <>
      <EmptyElement>{props.children}</EmptyElement>
    </>
  );
};

const Hr = (props) => {
  return (
    <>
      <HrElement>{props.children}</HrElement>
    </>
  );
};
export { EmptyDiv, FilledDiv, HollowDiv, Hr };
