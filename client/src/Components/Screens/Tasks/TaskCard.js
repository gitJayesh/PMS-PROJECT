import React, { useState } from "react";

// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Tasks from "./Tasks";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function TaskCard({ task }) {
  const [modalStyle, setModalStyle] = useState("none");

  const { taskname, taskdescription, duedate, status } = task;
  return (
    // <Col>
    <Row>
      <Card>
        <Card.Title>
          <Card.Header>{taskname}</Card.Header>
        </Card.Title>
        <Card.Body className="d-flex justify-content-between">
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>{taskdescription}</Card.Text>

          <Tasks key={task} task={task} />

          {/* </div> */}
        </Card.Body>
      </Card>
    </Row>
    // </Col>
  );
}

export default TaskCard;
