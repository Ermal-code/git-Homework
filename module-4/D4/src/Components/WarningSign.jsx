import React from "react";
import { Alert } from "react-bootstrap";

const WarningSign = (props) => (
  <Alert className="text-center" variant="danger">
    {props.text}
  </Alert>
);

export default WarningSign;
