import React from "react";
import styled from "styled-components";
import Centered from "./layout/Centered";

export interface Props {
  imgSrc: string;
  imageName: string;
}

const Image = styled.img`
  /* height: 12em; */
  width: 18em;
`;

const WorkItem = ({ imgSrc, imageName }: Props) => {
  return (
    <Centered>
      <Image src={imgSrc} />
    </Centered>
  );
};

export default WorkItem;
