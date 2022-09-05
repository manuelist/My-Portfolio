import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Pangasinan - Philippines</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>manuelwilverjohn@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+639951267811</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/manuelist">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/wilver-john-manuel-44bb938a/">
                <i className="ri-linkedin-line"></i>
              </Link>
            </div>
          </Col>

          {/* <Col lg="6" md="6">
            <Form />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
