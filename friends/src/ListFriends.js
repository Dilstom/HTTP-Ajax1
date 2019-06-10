import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const ListFriends = props => {
 console.log(props);
 return (
  <Col className="cardWrapper">
   <Card body>
    <CardTitle>{props.friend.name}</CardTitle>
    <CardText>{props.friend.age}</CardText>
    <CardText>{props.friend.email}</CardText>
    <div className="displayFlex">
     <Button
      onClick={props.handleDelete(props.friend.id)}
      className="btn btn-danger btn-sm btnCard"
     >
      Delete
     </Button>
     <Button className="btn btn-info btn-sm btnCard">Update</Button>
    </div>
   </Card>
  </Col>
 );
};

export default ListFriends;
