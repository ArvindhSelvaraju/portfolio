import React from "react";
export const ProjectList = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-2xl">Projects</h1>
      <div className="project-list">
        <a
          className="project"
          href="https://social-media-app-9b7a0.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          Blog App
        </a>
        <a className="project" href="" target="_blank" rel="noreferrer">
          Portfolio
        </a>
      </div>
    </div>
  );
};
