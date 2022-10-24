import styled from "styled-components";
import Image from "next/image";

type Props = {
  title?: string;
  imgUrl?: string;
  width?: string;
  height?: string;
};

const CardContainer = styled.div<Props>`
  display: flex;
  border-radius: 2rem;
  overflow: hidden;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  box-shadow: 2px 10px 5px 0px lightgray;
`;

const TitleContainer = styled.div<Props>`
  /* height: ${({ height }) => height}; */
  /* line-height: ${({ height }) => height}; */
  margin-top: 1rem;
  font-size: large;
  width: ${({ width }) => width};
  text-align: center;
`;

const Card: React.FC<Props> = (props) => {
  return (
    <>
      <CardContainer width={props.width} height={props.height}>
        <Image
          src={props.imgUrl || ""}
          alt=""
          height={props.height}
          width={props.width}
          objectFit="cover"
        />
      </CardContainer>

      <TitleContainer width={props.width}>{props.title}</TitleContainer>
    </>
  );
};

export { Card };
