import styled from "styled-components";

interface SectionProps {
  backgroundColor: string;
}

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-center;
  background-color: ${(props: SectionProps) => props.backgroundColor};
  padding: 3em;
`;

export const CenteredSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: SectionProps) => props.backgroundColor};
`;
