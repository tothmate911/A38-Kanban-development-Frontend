import React, { useContext } from "react";
import { LabelContext } from "../context/LabelContext";
import Loading from "../styled_components/Loading";
import KanbanTable from "../layout/KanbanTable";
import Filters from "../styled_components/Filters";

function Main() {
  let content = <Loading />;
  const { statuses, statusesAreLoading } = useContext(LabelContext);

  let projects = ["Project1", "Project2", "Project6"];
  let milestone = ["X"];

  if (!statusesAreLoading && statuses) {
    content = (
      <React.Fragment>
        <Filters projects={projects} milestone={milestone}></Filters>
        <KanbanTable statuses={statuses} />
      </React.Fragment>
    );
  }

  return content;
}

export default Main;
