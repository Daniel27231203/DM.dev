import React from "react";
import scss from "./HomePage.module.scss";
import Welcome from "./HomeSections/Welcome";
import Projects from "./HomeSections/Projects";
import Skils from "./HomeSections/Skils";
import Contacts from "./HomeSections/Contacts";
const HomePage = () => {
  return (
    <>
      <Welcome />
      <Skils />
      <Projects />
      <Contacts />
    </>
  );
};

export default HomePage;
