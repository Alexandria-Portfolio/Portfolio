import React from "react";
import { Button, NavLink } from "reactstrap";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h1 id="projects">Projects</h1>
      <div className="project">
        <NavLink href="https://alexandriaduell.medium.com/euthanization-at-the-austin-animal-center-are-they-a-no-kill-shelter-a6a00422406d"
        target="blank">
          <Button  className="animal">Analysis of Austin Animal Shelter</Button>
        </NavLink>
      </div>
      {/* <div className="project ">
        <NavLink
          href="https://conways-game-of-life-rosy.vercel.app/"
          target="blank"
          className="second"
        >
          <Button className="conway">Conway's Game of Life</Button>
        </NavLink>
      </div>
      <div className="project ">
        <NavLink href="https://github.com/jduell12/Portfolio" target="blank">
          <Button className="githubPort">Portfolio on Github</Button>
        </NavLink>
      </div> */}
    </div>
  );
};

export default Portfolio;
