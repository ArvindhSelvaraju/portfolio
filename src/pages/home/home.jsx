import React from "react";
import { HomeText } from "./home-text";
import { ProjectList } from "./project-list";

export const Home = () => {
  return (
    <div className="home-page">
      <HomeText />
      <ProjectList />
    </div>
  );
};
