import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import cvHelper from "../../helpers/downloadCV.helper";
import Image from "next/image";

import img01 from "../../public/images/img-01.jpg";
import img02 from "../../public/images/img-02.jpg";
import img03 from "../../public/images/img-03.jpg";
import img04 from "../../public/images/hero.jpg";

import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="skills">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="Skills" />
            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  React JS(4 years)
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  React Apollo GraphQL (4 years)
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  jQuery (4 years)
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Familiar in Typescript
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Familiar in Flutter
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Familiar in NextJS
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn" onClick={cvHelper.downloadCV}>
                <span className="text-white">Download CV</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
