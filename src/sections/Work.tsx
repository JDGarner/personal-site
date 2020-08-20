import React from "react";
import { Section } from "../components/layout/Section";
import { backgroundColorOffWhite } from "../styling/palette";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import workItems from "../data/workItems";
import WorkItem from "../components/WorkItem";

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
