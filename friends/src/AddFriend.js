import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Modal } from 'react-bootstrap';

class AddFriend extends Component {
 state = {};

 render() {
  return (
   <div>
    <Modal show={this.props.show} onHide={this.props.handleClose}>
     <Modal.Header closeButton>
      <Modal.Title>Add a new Friend</Modal.Title>
     </Modal.Header>
     {/* <h3 className="text-center"></h3> */}
     <Form className="updateFriend">
      <FormGroup>
       <Label for="exampleName">Name</Label>
       <Input
        type="text"
        name="name"
        id="exampleName"
        placeholder="Name placeholder"
        onChange={this.props.handleChange}
        value={this.props.name}
       />
      </FormGroup>
      <FormGroup>
       <Label for="exampleAge">Age</Label>
       <Input
        type="number"
        name="age"
        id="exampleAge"
        placeholder="Age placeholder"
        onChange={this.props.handleChange}
        value={this.props.age}
       />
      </FormGroup>
      <FormGroup>
       <Label for="exampleEmail">Email</Label>
       <Input
        type="email"
        name="email"
        id="exampleEmail"
        placeholder="with a placeholder"
        onChange={this.props.handleChange}
        value={this.props.email}
       />
      </FormGroup>
     </Form>
     <Modal.Footer>
      <div className="col text-center">
       <Button
        onClick={this.props.handleSubmit}
        className="btn center-block btn-info"
       >
        Submit
       </Button>
       <Button variant="secondary" onClick={this.props.handleClose}>
        Close
       </Button>
      </div>
     </Modal.Footer>
    </Modal>
   </div>
  );
 }
}

export default AddFriend;
