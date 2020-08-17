import React from "react";
import styled from "styled-components";

export interface Props {
  title: string;
}

const Item = styled.div`
  
`;

const WorkItem = ({ imageName }: Props) => {
  return <Item><img src={logo} /></Item>;
};

export default WorkItem;
