import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

const GitHubCalendarComponent = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md="auto">
          <h4 className="text-center">My GitHub Contributions</h4>
          <GitHubCalendar username="your-github-username" />
        </Col>
      </Row>
    </Container>
  );
};

export default GitHubCalendarComponent;
