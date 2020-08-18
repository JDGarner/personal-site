import React from "react";
import { Section } from "../components/layout/Section";
import { backgroundColorWhite } from "../styling/palette";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import workItems from "../data/workItems";
import WorkItem from "../components/WorkItem";

interface Props {}

const Work: React.FC = ({}: Props) => {
  return (
    <Section backgroundColor={backgroundColorWhite}>
      <SectionHeader title="Work" />
      {workItems.map((item) => {
        return <WorkItem {...item} />;
      })}
    </Section>
  );
};

export default Work;
