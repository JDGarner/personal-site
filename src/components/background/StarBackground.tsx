import React from "react";
import styled from "styled-components";
import "./starbackground.scss";

interface Props {}

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const StarBackground: React.FC = ({}: Props) => {
  return (
    <StarsContainer>
      <div className="stars-small-white"></div>
      <div className="stars-medium-white"></div>
      <div className="stars-big-white"></div>
      <div className="stars-small-yellow1"></div>
      <div className="stars-medium-yellow1"></div>
      <div className="stars-big-yellow1"></div>
      <div className="stars-small-yellow2"></div>
      <div className="stars-medium-yellow2"></div>
      <div className="stars-big-yellow2"></div>
    </StarsContainer>
  );
};

export default StarBackground;
