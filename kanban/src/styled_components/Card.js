import React from "react";
import styled from "styled-components";
import Ribbon from "./Ribbon";
import { CircleButton, CircleImg } from "./Circle";
import { Link } from "react-router-dom";
import defaultImg from "../images/user_image.png";
import Container from "./Container";

const MilestoneBox = styled.div`
  text-align: left;
  overflow: hidden;
  direction: ltr;
  width: 100%;
`;

const Information = styled.span`
  font-size: 10px;
  color: gray !important;
`;

const Gray = styled.span`
  color: gray !important;
  &:active,
  &:link,
  &:visited,
  &:hover {
    color: gray !important;
  }
`;

const PriorityBadge = styled.span`
  background-color: ${(props) =>
    props.color ? props.color : "#6c757d"} !important;
`;

const Footer = styled.div`
  font-size: 14px;
  color: gray;
`;

function Card(props) {
  let {
    assignee,
    dueDate,
    webUrl,
    mileStone,
    priority,
    project,
    reference,
    story,
    title,
    userNotesCount,
  } = props.issue;

  mileStone = mileStone != null ? mileStone.title : " ";

  const getPriorityBox = (priority) => {
    let badge = (
      <span className="badge badge-secondary text-secondary p-2"></span>
    );

    if (priority != null) {
      badge = (
        <PriorityBadge
          className="badge badge-danger p-2"
          color={priority.color}
        >
          {priority.title.slice(-2)}
        </PriorityBadge>
      );
    }

    return (
      <div className="col text-right d-flex justify-content-end">
        <h6 className="align-self-center">{badge}</h6>
      </div>
    );
  };

  const getStoryRibbon = (story) => {
    if (story != null) {
      return (
        <div className="pr-3">
          <Ribbon>{story.title}</Ribbon>
        </div>
      );
    }
    return "";
  };

  const getDueDateBox = (dueDate) => {
    if (dueDate != null) {
      return (
        <Information>
          <i className="far fa-calendar-alt"></i> {dueDate}
        </Information>
      );
    }
    return "";
  };

  title = title != null ? title : "No title";

  const getOtherLabelsBox = (project, reference) => {
    project = project != null ? project.name : "";
    reference = reference != null ? reference : "";
    if (project !== "" || reference !== "") {
      return (
        <Information>
          {project} {reference}
        </Information>
      );
    }
    return "";
  };

  const getNotesCounterBox = (userNotesCount) => {
    userNotesCount = userNotesCount != null ? userNotesCount : 0;
    return (
      <div className="col text-left d-flex align-items-center">
        <i className="far fa-comments"></i>
        <Information className="ml-1">{userNotesCount}</Information>
      </div>
    );
  };

  const getGitlabLogoBox = (webUrl) => {
    webUrl = webUrl != null ? webUrl : "/";
    const openTab = (webUrl) => {
      window.open(webUrl);
    };

    return (
      <div className="col text-center d-flex align-items-center justify-content-center">
        <Link onClick={() => openTab(webUrl)}>
          <Gray>
            <i className="fab fa-gitlab"></i>
          </Gray>
        </Link>
      </div>
    );
  };

  const getAssigneeBox = (assignee, defaultImg) => {
    const addDefaultSrc = (ev) => {
      ev.target.src =
        "https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png";
    };

    let avatarSrc =
      assignee.avatarUrl.indexOf("https") !== -1
        ? assignee.avatarUrl
        : `${process.env["REACT_APP_GITLAB_SERVER"]}${assignee.avatarUrl}`;

    let assigneeCircle = "";
    if (assignee != null) {
      assigneeCircle = (
        <CircleButton>
          <CircleImg
            onError={addDefaultSrc}
            src={avatarSrc}
            alt={assignee.name}
          />
        </CircleButton>
      );
    }
    return <div className="text-center pb-1 pt-1 pr-2">{assigneeCircle}</div>;
  };

  return (
    <React.Fragment>
      <Container className="card">
        <div className="card-header p-0 text-left d-flex justify-content-end align-items-center">
          <MilestoneBox className="p-2">{mileStone}</MilestoneBox>
          {getAssigneeBox(assignee, defaultImg)}
        </div>

        <div className="body">
          {getStoryRibbon(story)}

          <div className="pl-2 pr-2">
            {getDueDateBox(dueDate)}
            <h6 className="mt-1 mb-1">{title}</h6>
            {getOtherLabelsBox(project, reference)}

            <Footer className="row mt-1">
              {getNotesCounterBox(userNotesCount)}
              {getGitlabLogoBox(webUrl)}
              {getPriorityBox(priority)}
            </Footer>
          </div>
        </div>
        <div></div>
      </Container>
    </React.Fragment>
  );
}

export default Card;
