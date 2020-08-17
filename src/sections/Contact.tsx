import React from "react";
import { Section } from "../components/layout/Section";
import { backgroundColorDark } from "../styling/palette";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";

interface Props {}

const Contact: React.FC = ({}: Props) => {
  return (
    <Section backgroundColor={backgroundColorDark}>
      <SectionHeader title="Contact" variant="light" />
    </Section>
  );
};

export default Contact;
