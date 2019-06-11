import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

export default class ListFriends extends Component {
 constructor() {
  super();
  this.state = {};
 }

 handleDelete = e => {
  this.props.handleDelete(this.props.friend.id);
 };

 render() {
  return (
   <Col className="cardWrapper">
    <Card body>
     <CardTitle>{this.props.friend.name}</CardTitle>
     <CardText>{this.props.friend.age}</CardText>
     <CardText>{this.props.friend.email}</CardText>
     <div className="displayFlex">
      <Button
       onClick={this.handleDelete}
       className="btn btn-danger btn-sm btnCard"
      >
       Delete
      </Button>
      <Button className="btn btn-info btn-sm btnCard">Update</Button>
     </div>
    </Card>
   </Col>
  );
 }
}
