import React from "react";
import { Card } from "react-bootstrap";
const UserCard = ({ details }) => {
  return (
    <div>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>{details.id}</Card.Header>
        <Card.Body>
          <Card.Title> {details.name} </Card.Title>
          <Card.Text>
            <span>{details.username}</span>
            <br />
            <span> {details.phone}</span>
            <br />
            <span>{details.email}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
