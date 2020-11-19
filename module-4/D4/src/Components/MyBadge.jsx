import React from "react";
import { Badge } from "react-bootstrap";

const MyBadge = ({ text, color }) => (
  <Badge pill variant={color}>
    {text}
  </Badge>
);

export default MyBadge;
