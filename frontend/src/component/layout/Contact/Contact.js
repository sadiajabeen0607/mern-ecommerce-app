import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import MetaData from "../MetaData";
import Loader from "../Loader/Loader";

const Contact = () => {
  const { user, loading } = useSelector((state) => state.user);
  return (
    <>
      <MetaData title="Contact Me" />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="contactContainer">
            <a className="mailBtn" href={user.email}>
              <Button>Contact: {user.email}</Button>
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
