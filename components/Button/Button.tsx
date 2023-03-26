import styled, { css } from "styled-components";
import ButtonBase from "./ButtonBase";

const LabelContainer = styled.div<buttonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.height - props.padding * 2).toString() + "px"};
`;

const Button: React.FC<buttonProps> = (props) => (
  <>
    <ButtonBase {...props} padding={props.padding.toString() + "px"}>
      <LabelContainer {...props}>{props.labelText}</LabelContainer>
    </ButtonBase>
  </>
);

type buttonProps = {
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
  labelText?: string;
  width?: number;
  height: number;
  padding: number;
  children?: any;
  onClick?: () => void;
};

export { Button };
