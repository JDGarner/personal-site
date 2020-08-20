import React from "react";
import { Section } from "../components/layout/Section";
import { backgroundColorWhite } from "../styling/palette";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";

interface Props {}

const ReadingList: React.FC = ({}: Props) => {
  return (
    <Section backgroundColor={backgroundColorWhite}>
      <SectionHeader title="What I'm Reading" />
    </Section>
  );
};

export default ReadingList;
