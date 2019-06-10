import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddFriend extends Component {
 state = {};

 render() {
  return (
   <div>
    <h3 className="text-left">Add a new Friend</h3>
    <Form className="addFriend">
     <FormGroup>
      <Label for="exampleName">Name</Label>
      <Input
       type="text"
       name="name"
       id="exampleName"
       placeholder="Name placeholder"
       onChange={this.props.handleChange}
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
      />
     </FormGroup>
     <Button onClick={this.props.handleSubmit}>Submit</Button>
    </Form>
   </div>
  );
 }
}

export default AddFriend;
