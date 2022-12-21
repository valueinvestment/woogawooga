import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Label = styled.label``;

const ImageLabelContainer = styled.div<imageLabelProps>`
  display: grid;
  grid-template-columns: ${({ height }) => height + "px"} auto;
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
`;

const LabelContainer = styled.div<imageLabelProps>`
  height: ${({ height }) => height + "px"};
  line-height: ${({ content, height }) => (content ? "" : height + "px")};
  text-align: center;
`;

const Title = styled.div<imageLabelProps>`
  font-size: ${({ content }) => (content ? "1.5rem" : "inherit")};
  height: ${({ content }) => (content ? "1.5rem" : "inherit")};
`;

const Content = styled.div<imageLabelProps>`
  display: ${({ content }) => (content ? "flex" : "none")};
  font-size: 1rem;
  padding: 5px;
`;

const ImageLabel: React.FC<imageLabelProps> = (props) => {
  return (
    <>
      <ImageLabelContainer height={props.height} width={props.width}>
        <Image
          src={props.imgUrl || ""}
          alt=""
          height={props.height}
          width={props.height}
        />
        <LabelContainer {...props}>
          <Title {...props}>{props.title}</Title>
          <Content {...props}>{props.content}</Content>
        </LabelContainer>
      </ImageLabelContainer>
    </>
  );
};

type imageLabelProps = {
  imgUrl?: string;
  title?: string;
  content?: string;
  width?: number;
  height?: number;
};

export { ImageLabel };
