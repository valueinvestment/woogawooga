import styled from "styled-components";
import Image from "next/image";
import { DetailProps, SizeProps, useSearchDataContext } from "../context/DataContext";

const Container = styled.div`
  cursor: pointer;
`;

const ImageContainer = styled.div<SizeProps>`
  display: flex;
  border-radius: 2rem;
  overflow: hidden;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  box-shadow: 0px 4px 4px 0px lightgray;
`;

ImageContainer.defaultProps = { height: 150, width: 150 };

const TitleContainer = styled.div<SizeProps>`
  /* height: ${({ height }) => height}; */
  /* line-height: ${({ height }) => height}; */
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: ${({ width }) => width};
  text-align: center;
`;

type Props = {
  id?: number;
  name?: string;
  width?: number;
  height?: number;
  src?: string;
  onClick?: () => void;
};

const Card: React.FC<Props> = (props) => {
  const defaultSize = 140;
  return (
    <Container
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
    >
      <ImageContainer width={props.width ?? defaultSize} height={props.height ?? defaultSize}>
        <Image src={(props.src ?? "/assets/images/") + props.id + (props.height ? ".gif" : ".png")} alt="" height={props.height ?? defaultSize} width={props.width ?? defaultSize} objectFit="cover" />
      </ImageContainer>

      <TitleContainer width={props.width ?? defaultSize} height="auto">
        {props.name}
      </TitleContainer>
    </Container>
  );
};

export { Card };
