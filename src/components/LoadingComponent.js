import React from "react";
import { Spinner } from "reactstrap";

//
export const Loading = () => {
  return (
    <div className="row mx-auto my-auto p-5">
      <div className="col-12">
        <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="danger" />
      <Spinner color="warning" />
      <Spinner color="info" />
      <Spinner color="light" />
      <Spinner color="dark" />

        <i
          className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"
          aria-hidden="true"
        ></i>
        <p>Loading data...</p>
      </div>
    </div>
  );
};
