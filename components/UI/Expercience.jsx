import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/expercience.module.css";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <section id="experience">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.experciences__container}`}>
              <div>
                <ExperienceItem
                  title="Web Development"
                  icon="ri-computer-line"
                />
              </div>
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.expercience__title}`}>
            <SectionSubtitle subtitle="Experience" />
            <h3 className="mb-0 mt-4">Front-End Developer</h3>
            <p>Leandev / FlyAkeed (8 years)</p>
            <div>
              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Built and Maintain FlyAkeed for Business Front-End using React
                JS and React Apollo Graphql.
              </h6>
              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Built FlyAkeed Front-End Using JQuery and Bootstrap.
              </h6>
              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Build Estbyani using JQuery and Bootstrap.
              </h6>
              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Built FlyAkeed mobile web using Jquery and Bootstrap.
              </h6>
              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Built FlyAkeed Monitoring V2 using Jquery and Bootstrap.
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
