import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FilterContext } from "../context/FilterContext";
import RenderIssues from "../styled_components/RenderIssues";

const ScrollWrapper = styled.div`
  white-space: nowrap;
  overflow-x: auto;
`;

function KanbanTable(props) {
  let { statuses } = props;
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
  let tableBody = <tr></tr>;

  const [forceUpdate, setForceUpdate] = useState(tableBody);

  let disabled = true;

  if (
    projectIds !== undefined &&
    projectIds !== null &&
    projectIds.length > 0
  ) {
    disabled = false;
  }

  const getIssues = () => {
    if (
      projectIds !== undefined &&
      projectIds !== null &&
      projectIds.length > 0 &&
      milestoneTitles &&
      storyTitles
    ) {
      console.log("llllllllllllllll");
      tableBody = (
        <React.Fragment>
          <RenderIssues statuses={statuses} />
        </React.Fragment>
      );
      setForceUpdate(tableBody);
    }
  };

  return (
    <React.Fragment>
      <ScrollWrapper>
        <div className="container-fluid pt-9 pl-3 pr-3 pb-3">
          <div className="table-responsive-sm">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th className="col"></th>
                  {statuses.map((status, index) => (
                    <th key={index} className="col">
                      {status}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{forceUpdate}</tbody>
            </table>
          </div>
        </div>
      </ScrollWrapper>
      <div className="w-100 d-flex justify-content-center">
        <button
          type="button"
          disabled={disabled}
          className="btn btn-info"
          onClick={() => getIssues()}
        >
          Get issues
        </button>
      </div>
    </React.Fragment>
  );
}

export default KanbanTable;
