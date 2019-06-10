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
    <Button>Go somewhere</Button>
   </Card>
  </Col>
 );
};

export default ListFriends;
