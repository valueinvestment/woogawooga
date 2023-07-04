import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ImageLabelContainer = styled.div<imageLabelProps>`
  display: grid;
  grid-template-columns: ${({ imageSize }) => imageSize + "px"} auto;
`;
// height: ${({ imageSize }) => imageSize + "px"};

const LabelContainer = styled.div<imageLabelProps>`
  height: ${({ imageSize }) => imageSize + "px"};
  line-height: ${({ content, imageSize }) => (content ? "" : imageSize + "px")};
  text-align: center;
`;

const Title = styled.div<imageLabelProps>`
  font-size: ${({ content }) => (content ? "1.5rem" : "inherit")};
  height: ${({ content }) => (content ? "2.5rem" : "inherit")};
  text-align: ${({ titleAlign }) => (titleAlign ? titleAlign : "center")};
  padding: ${({ titlePadding }) => (titlePadding ? titlePadding : "0px")};
`;

const Content = styled.div<imageLabelProps>`
  display: ${({ content }) => (content ? "flex" : "none")};
  font-size: 1rem;
  font-weight: normal;
  padding: ${({ contentPadding }) => (contentPadding ? contentPadding : "0px")};
  text-align: left;
`;

const ImageLabel: React.FC<imageLabelProps> = (props) => {
  return (
    <>
      <ImageLabelContainer {...props}>
        <Image src={props.imgUrl || ""} alt="" width={props.imageSize} height={props.imageSize} />
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
  imageSize: number;
  titleAlign?: string;
  titlePadding?: string;
  contentPadding?: string;
};

export { ImageLabel };
