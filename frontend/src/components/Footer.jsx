import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="text-center py-3">
        <Row>
          <Col>
            <p className="text-muted">
              &copy; {new Date().getFullYear()} MyShop. All rights reserved.
            </p>
            <p className="text-muted">
              Built with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              by Bhushan
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
