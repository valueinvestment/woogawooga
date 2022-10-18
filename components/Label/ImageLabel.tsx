import { printIntrospectionSchema } from "graphql";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Label = styled.label``;

const ImageLabelContainer = styled.div<imageLabelProps>`
  display: grid;
  grid-template-columns: ${({ height }) => height} auto;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

const LabelContainer = styled.div<imageLabelProps>`
  height: ${({ height }) => height};
  line-height: ${({ height }) => height};
  text-align: center;
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
        <LabelContainer height={props.height}>{props.labelText}</LabelContainer>
      </ImageLabelContainer>
    </>
  );
};

type imageLabelProps = {
  imgUrl?: string;
  labelText?: string;
  width?: string;
  height?: string;
};

export { ImageLabel };
