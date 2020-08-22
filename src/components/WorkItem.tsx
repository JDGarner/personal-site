import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../styling/device-sizes";

export interface Props {
  imgSrc: string;
}

export interface ContainerProps {
  index: number;
}

const ImageContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const WorkItem = ({ imgSrc }: Props) => {
  return (
    <ImageContainer>
      <Image src={imgSrc} />
    </ImageContainer>
  );
};

export default WorkItem;
