import React from "react";

const PageHeader = ({ titleText }) => {
  return (
    <div className="row">
      <div className="col-12 mt-5">
        <h1>{titleText} </h1>
      </div>
    </div>
  );
};

export default PageHeader;
