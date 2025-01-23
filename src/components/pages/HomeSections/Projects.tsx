import { FC } from "react";
import scss from "./Projects.module.scss";

const Projects: FC = () => {
  return (
    <section id="projects" className={scss.Projects}>
      <div className="container">
        <div className={scss.content}>Projects</div>
      </div>
    </section>
  );
};

export default Projects;
