import React from "react";
import styled from "styled-components";
import { textColorDark, textColorLight } from "../styling/palette";

type HeaderVariant = "light" | "dark";

export interface Props {
  title: string;
  variant: HeaderVariant;
}

export interface HeaderProps {
  variant: HeaderVariant;
}

const Header = styled.h2`
  color: ${(props: HeaderProps) =>
    props.variant === "light" ? textColorLight : textColorDark};
  font-size: 2.5em;
  text-align: center;
  font-weight: 700;
  padding-bottom: 2em;
`;

const SectionHeader = ({ title, variant }: Props) => {
  return <Header variant={variant}>{title.toUpperCase()}</Header>;
};

SectionHeader.defaultProps = {
  variant: "dark",
};

export default SectionHeader;
