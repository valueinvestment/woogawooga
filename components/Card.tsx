import styled from "styled-components";
import Image from "next/image";
import {
  CardProps,
  SizeProps,
  useSelectedDataContext,
} from "../context/DataContext";
import { useRouter } from "next/router";

const Container = styled.div`
  &:hover {
    opacity: 0.5;
  }
`;

const CardContainer = styled.div<SizeProps>`
  display: flex;
  border-radius: 2rem;
  overflow: hidden;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  box-shadow: 2px 10px 5px 0px lightgray;
`;

const TitleContainer = styled.div<SizeProps>`
  /* height: ${({ height }) => height}; */
  /* line-height: ${({ height }) => height}; */
  margin-top: 1rem;
  font-size: large;
  width: ${({ width }) => width};
  text-align: center;
`;

const Card: React.FC<CardProps> = (props) => {
  const selectedDataContext = useSelectedDataContext();
  const router = useRouter();

  return (
    <Container
      onClick={() => {
        selectedDataContext.update(props);
        router.push("/detailShow");
      }}
    >
      <CardContainer width={props.width} height={props.height}>
        <Image
          src={props.imgUrl || ""}
          alt=""
          height={props.height}
          width={props.width}
          objectFit="cover"
        />
      </CardContainer>

      <TitleContainer width={props.width} height="auto">
        {props.title}
      </TitleContainer>
    </Container>
  );
};

export { Card };
