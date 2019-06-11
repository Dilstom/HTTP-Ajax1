import React, { Component } from 'react';
import {
 Card,
 Button,
 CardTitle,
 CardText,
 Col,
 Form,
 FormGroup,
 Label,
 Input,
} from 'reactstrap';
import { Modal } from 'react-bootstrap';

export default class ListFriends extends Component {
 constructor() {
  super();
  this.state = {
   show: false,
   name: '',
   age: null,
   email: '',
  };
 }

 componentDidMount() {
  this.setState({
   name: this.props.friend.name,
   age: this.props.friend.age,
   email: this.props.friend.email,
  });
 }

 handleDelete = e => {
  this.props.handleDelete(this.props.friend.id);
 };

 showModal = e => {
  this.setState({ show: true });
 };

 handleClose = e => {
  this.setState({ show: false });
 };

 handleChange = e => {
  this.setState({ [e.target.name]: e.target.value });
  //   console.log(this.state);
 };

 handleUpdate = e => {
  const newObj = {
   name: this.state.name,
   age: this.state.age,
   email: this.state.email,
  };
  this.props.handleUpdate(newObj, this.props.friend.id);
  this.setState({ show: false });
 };

 render() {
  //   console.log('modal: ', this.state.showModal);
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
      <Button className="btn btn-info btn-sm btnCard" onClick={this.showModal}>
       Update
      </Button>
      <Modal show={this.state.show} onHide={this.handleClose}>
       <Modal.Header closeButton>
        <Modal.Title>Update Info</Modal.Title>
       </Modal.Header>
       <Form className="updateFriend">
        <FormGroup>
         <Label for="exampleName">Name</Label>
         <Input
          type="text"
          name="name"
          id="exampleName"
          placeholder={this.props.friend.name}
          onChange={this.handleChange}
          value={this.state.name}
         />
        </FormGroup>
        <FormGroup>
         <Label for="exampleAge">Age</Label>
         <Input
          type="number"
          name="age"
          id="exampleAge"
          placeholder={this.props.friend.age}
          onChange={this.handleChange}
          value={this.state.age}
         />
        </FormGroup>
        <FormGroup>
         <Label for="exampleEmail">Email</Label>
         <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder={this.props.friend.email}
          onChange={this.handleChange}
          value={this.state.email}
         />
        </FormGroup>
       </Form>
       <Modal.Footer>
        <div className="col text-center">
         <Button
          onClick={this.handleUpdate}
          className="btn center-block btn-info"
         >
          Update
         </Button>
         <Button variant="secondary" onClick={this.handleClose}>
          Close
         </Button>
        </div>
       </Modal.Footer>
      </Modal>
     </div>
    </Card>
   </Col>
  );
 }
}
