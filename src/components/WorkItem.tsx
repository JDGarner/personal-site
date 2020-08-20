import React from "react";
import styled from "styled-components";

const gallipoliImage = require("../assets/gallipoli.png").default;
const wordMonkeyImage = require("../assets/wordmonkey.png").default;

const images = {
  wordmonkey: wordMonkeyImage,
  gallipoli: gallipoliImage,
};

export interface Props {
  id: string;
  imageName: string;
}

const Image = styled.img`
  /* height: 12em; */
  width: 12em;
`;

const WorkItem = ({ id, imageName }: Props) => {
  return <Image src={wordMonkeyImage} />;
  // return <Image src={images[id]} />;
};

export default WorkItem;
