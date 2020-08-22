import React from "react";
import { Section } from "../components/layout/Section";
import { backgroundColorOffWhite } from "../styling/palette";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import workItems from "../data/workItems";
import WorkItem from "../components/WorkItem";
import { tablet } from "../styling/device-sizes";

const gallipoliImage: string = require("../assets/gallipoli.png").default;
const wordMonkeyImage: string = require("../assets/wordmonkey.png").default;
const fxCorporateImage: string = require("../assets/fxcorporate.png").default;
const scbImage: string = require("../assets/scb.png").default;

interface Images {
  [key: string]: string;
}

const images: Images = {
  wordmonkey: wordMonkeyImage,
  gallipoli: gallipoliImage,
  fxcorporate: fxCorporateImage,
  scb: scbImage,
};

interface Props {}

const WorkItemList = styled.div`
  width: 100%;
  padding: 0 5%;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  justify-content: center;
`;

const Work: React.FC = ({}: Props) => {
  return (
    <Section backgroundColor={backgroundColorOffWhite}>
      <SectionHeader title="Work" />
      <WorkItemList>
        {workItems.map((item) => {
          return (
            <WorkItem
              key={`workitem-${item.id}`}
              imgSrc={images[item.id]}
              {...item}
            />
          );
        })}
      </WorkItemList>
    </Section>
  );
};

export default Work;
