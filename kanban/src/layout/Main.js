import React, { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Settings from "./Settings";

const openedStyle = {
  width: "250px",
};

const closedStyle = {
  width: 0,
};

const pushedStyle = {
  marginRight: "250px",
};

const expandedStyle = {
  marginRight: 0,
};

function Main() {
  const [opened, setOpened] = useState(false);

  // Toggle opening of the sidebar
  const toggleOpened = () => {
    setOpened((opened) => !opened);
  };

  return (
    <React.Fragment>
      <Header toggleOpened={toggleOpened} />
      <div
        id="main"
        // Apply 'pushedStyle' CSS class if the sidebar is opened,
        // and 'expandedStyle' if it is closed.
        style={opened ? pushedStyle : expandedStyle}
      >
        <Board />
      </div>
      <Settings
        // Apply 'openedStyle' CSS class if the sidebar is opened,
        // and 'closedStyle' if it is closed.
        currentStyle={opened ? openedStyle : closedStyle}
        toggleOpened={toggleOpened}
      />
    </React.Fragment>
  );
}

export default Main;