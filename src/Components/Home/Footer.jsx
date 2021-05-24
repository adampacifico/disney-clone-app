import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <h4>coded By: Adam Pacifico</h4>
      <span>(c) Clever Programmer</span>
    </Foot>
  );
};

const Foot = styled.footer`
  text-align: right;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  opacity: 0.8;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;

  h4{
      margin: 0;

  }
  span{
      font-size: 12px;
      padding: 5px 0;
  }
`;


export default Footer;
