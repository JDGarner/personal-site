import React from "react";
import styled from "styled-components";

const gallipoliImage: string = require("../assets/gallipoli.png").default;
const wordMonkeyImage: string = require("../assets/wordmonkey.png").default;

interface Images {
  [key: string]: string;
}

const images: Images = {
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
  return <Image src={images[id]} />;
};

export default WorkItem;
