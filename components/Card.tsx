import styled from "styled-components";
import Image from "next/image";
import {
  CardProps,
  SizeProps,
  useSearchDataContext,
} from "../context/DataContext";
import { useRouter } from "next/router";

const Container = styled.div`
  cursor: pointer;
`;

const CardContainer = styled.div<SizeProps>`
  display: flex;
  border-radius: 2rem;
  overflow: hidden;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  box-shadow: 0px 4px 4px 0px lightgray;
`;

CardContainer.defaultProps = { height: 150, width: 150 };

const TitleContainer = styled.div<SizeProps>`
  /* height: ${({ height }) => height}; */
  /* line-height: ${({ height }) => height}; */
  margin-top: 1rem;
  font-size: large;
  width: ${({ width }) => width};
  text-align: center;
`;

const Card: React.FC<CardProps> = (props) => {
  const router = useRouter();
  const defaultSize = 140;
  return (
    <Container
      onClick={() => {
        router.push("/detail/" + props.id);
      }}
    >
      <CardContainer
        width={props.width ?? defaultSize}
        height={props.height ?? defaultSize}
      >
        <Image
          src={"/assets/images/" + props.id + (props.height ? ".gif" : ".png")}
          alt=""
          height={props.height ?? defaultSize}
          width={props.width ?? defaultSize}
          objectFit="cover"
        />
      </CardContainer>

      <TitleContainer width={props.width ?? defaultSize} height="auto">
        {props.name}
      </TitleContainer>
    </Container>
  );
};

export { Card };
