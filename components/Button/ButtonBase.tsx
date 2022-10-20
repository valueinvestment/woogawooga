import styled, { css } from "styled-components";

// Creating Simple button with props, checkout button component in elements folder for more advanced stuff about button
type buttonProps = {
  active?: boolean; // making this props optional
  darkBtn?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
  children?: any;
  padding?: string;
};

const ButtonBase = styled.button<buttonProps>`
  background-color: ${({ darkBtn, backgroundColor }) =>
    darkBtn
      ? "black"
      : backgroundColor}; // i am destructing here, instead of using as prop.darkBtn
  padding: ${(props) => props.padding};
  margin: 0.5rem;
  font-size: 2rem;
  border: solid;
  border-radius: 1.5rem;
  border-color: ${(props) => props.borderColor};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  font-weight: bold;

  &:hover {
    opacity: 0.5;
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

ButtonBase.defaultProps = {
  borderColor: "#FF8EAE",
  backgroundColor: "white",
  color: "black",
};

export default ButtonBase;
