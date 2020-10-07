import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FilterContext } from "../../context/FilterContext";

const LabelStyle = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "#17a2b8")};
  &:hover {
    filter: brightness(125%);
  }
  border: none;
  margin: 0px 6px 6px 0px !important;
  padding: 5px 10px;
  max-width: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  color: white;
  &:focus {
    outline: 0;
  }
`;

function Label(props) {
  const offBgColor = "#6c757d";
  const [
    swimlane,
    setSwimlane,
    projectIds,
    setProjectIds,
    milestoneTitles,
    setMilestoneTitles,
    storyTitles,
    setStoryTitles,
  ] = useContext(FilterContext);

  const [bgColor, setBgColor] = useState(offBgColor);

  const selectLabel = () => {
    setBgColor(props.color);
    props.addFilter();
  };

  const deselectLabel = () => {
    setBgColor(offBgColor);
    props.deleteFilter();
  };

  const handleClick = () => {
    if (props.projectId == null) {
      if (storyTitles.indexOf(props.title) < 0) {
        console.log(storyTitles.indexOf(props.title));
        selectLabel();
      } else {
        deselectLabel();
      }
    } else {
      if (projectIds.indexOf(props.projectId) < 0) {
        selectLabel();
      } else {
        deselectLabel();
      }
    }
  };
  return (
    <React.Fragment>
      <LabelStyle bg={bgColor} type="button" onClick={() => handleClick()}>
        {props.title}
      </LabelStyle>
    </React.Fragment>
  );
}

export default Label;
