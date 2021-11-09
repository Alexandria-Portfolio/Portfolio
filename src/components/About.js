import React, { useContext } from "react";
import { Button, Collapse, CardBody, Card } from "reactstrap";
import TypeIt from "typeit-react";

//images
import profile from "../imgs/Alex.jpeg";

//context
import { AboutContext } from "../context/AboutContext";

const About = () => {
  const { aboutOpen } = useContext(AboutContext);

  return (
    <div id="about">
      <h1 className="homeTitle">Alexandria Duell</h1>
      <Collapse isOpen={aboutOpen}>
        <Card>
          <CardBody>
            <img src={profile} alt="profile" />
            <p className="aboutP">
              I'm a Data Scientist located in Apex, NC. I enjoy new projects
              that challenge me as well as updating older projects by
              incorporating newer technologies and methodologies.
            </p>
          </CardBody>
        </Card>
      </Collapse>
      <Button
        className="aboutBtn"
        href="https://github.com/duellal"
        target="blank"
      >
        Github
      </Button>
      <Button
        className="aboutBtn"
        href="https://www.linkedin.com/in/alexandria-duell/"
        target="blank"
      >
        LinkedIn
      </Button>
      <Button
        className="aboutBtn"
        href="https://docs.google.com/document/d/e/2PACX-1vQXqcpBmogmYxzdWDyFVSgJa9IWZpmJMYPfiG9U3OSBHfXR9edoZeswjbBEvVWuG31Gfemmy11Dbo8Z/pub"
        target="blank"
      >
        Resume
      </Button>
      <Button
        className="aboutBtn"
        href={`mailto:alexandriaduell@gmail.com?subject=${encodeURIComponent(
          "Inquiry from Portfolio Site",
        )}`}
      >
        Email
      </Button>
      <TypeIt
        id="type"
        element={"h3"}
        options={{
          loop: false,
          waitUntilVisible: true,
          cursor: false,
        }}
        getBeforeInit={(instance) => {
          instance
            .type("Data Analyst")
            .pause(750)
            .delete(19)
            .pause(500)
            .type("Data Scientist")
            .pause(750)
            .delete(18)
            .pause(500)
            .type("Data Engineer")
            .pause(10000);
          return instance;
        }}
      />
    </div>
  );
};

export default About;
