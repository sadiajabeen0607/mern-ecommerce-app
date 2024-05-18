import React from "react";
import "./NotFound.css";
import { Error } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <Error />
      <Typography>Page Not Found</Typography>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
