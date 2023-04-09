import styled, { css } from "styled-components";

type buttonProps = {
  active?: boolean;
  darkBtn?: boolean;
  borderColor?: string;
  boxShadow?: string;
  backgroundColor?: string;
  color?: string;
  maxWidth?: number;
  children?: any;
  padding?: string;
};

const ButtonBase = styled.button<buttonProps>`
  background-color: ${({ darkBtn, backgroundColor }) =>
    darkBtn
      ? "black"
      : backgroundColor}; // i am destructing here, instead of using as prop.darkBtn
  padding: ${(props) => props.padding};
  margin: 0.5rem 0rem;
  font-size: 1.7rem;
  border: ${(props) => (props.borderColor == "transparent" ? "none" : "solid")};
  border-radius: 4rem;
  border-width: thick;
  border-color: ${(props) => props.borderColor};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  font-weight: bold;
  overflow: hidden;
  align-self: center;
  box-shadow: ${(props) => props.boxShadow};
  max-width: ${({ maxWidth }) => maxWidth + "px"};
  width: 90%;

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
