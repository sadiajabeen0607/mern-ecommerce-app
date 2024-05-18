import React from "react";
import "./aboutSection.css";
import { Avatar, Button, Typography } from "@material-ui/core";
import { Instagram, YouTube } from "@material-ui/icons";
import { useSelector } from "react-redux";
import MetaData from "../MetaData";
import Loader from "../Loader/Loader";

const About = () => {
  const { user, loading } = useSelector((state) => state.user);
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/";
  };
  console.log(user, 12);
  return (
    <>
      <MetaData title="About Me" />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
              <Typography component="h1">About Us</Typography>
              <div>
                <div>
                  <Avatar
                    style={{
                      width: "10vmax",
                      height: "10vmax",
                      margin: "2vmax 0",
                    }}
                    src={user.avatar.url}
                    alt={user.name}
                  />
                  <Typography>{user.name}</Typography>
                  <Button onClick={visitInstagram} color="primary">
                    Visit Instagram
                  </Button>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate maxime deleniti voluptates eius asperiores
                    consequuntur odio sapiente placeat error iure doloremque,
                    molestias, excepturi eum nulla distinctio dolorem nam, nobis
                    accusantium?
                  </span>
                </div>
                <div className="aboutSectionContainer2">
                  <Typography component="h2">Our Brands</Typography>
                  <a href="https://www.youtube.com/" target="blank">
                    <YouTube className="youtubeSvg" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <Instagram className="instagramSvg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default About;
