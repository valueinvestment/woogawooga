import Image from "next/image";
import React from "react";
import styled, { css } from "styled-components";
import ButtonBase from "./Button/ButtonBase";

const StyledComponents = () => {
  return (
    <MyContainer>
      <MyCustomBtn />
    </MyContainer>
  );
};

export default StyledComponents;

const MyCustomBtn = () => (
  <ButtonBase darkBtn={false}>
    <div>
      <Image src="/assets/test.svg" width="50px" height="50px" alt="alt"></Image>
      Custom Btn Button
    </div>
  </ButtonBase>
);

// Creating Simple button with props, checkout button component in elements folder for more advanced stuff about button
type buttonProps = {
  active?: boolean; // making this props optional
  darkBtn: boolean;
};

const Button = styled.button<buttonProps>`
  background-color: ${({ darkBtn }) => (darkBtn ? "black" : "cyan")}; // i am destructing here, instead of using as prop.darkBtn
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;

  &:hover {
    background: rebeccapurple;
  }

  /* if you want to place multiple lines of css, you can import {css}  */
  ${({ active }) =>
    active &&
    css`
      border: 2px solid gold;
      background-color: darkcyan;
      color: white;
    `}
`;

type Props = {
  children: any;
};

const MyContainer: React.FC<Props> = ({ children }) => (
  <Container>
    <div className="content">
      <ul>
        <li>First list</li>
        <li>second list</li>
        <li>third list</li>
        <li>fourth list</li>
      </ul>
      {children}
    </div>
  </Container>
);

const Container = styled.div`
  width: 80%;

  .content {
    padding: 2rem;

    ul {
      margin-bottom: 5rem;
      li {
        &:not(:last-child) {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
`;
