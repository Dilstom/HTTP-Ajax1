import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListFriends from './ListFriends';
import AddFriend from './AddFriend';
import { Row } from 'reactstrap';

export default class App extends Component {
 constructor() {
  super();
  this.state = {
   friends: [],
   name: '',
   email: '',
   age: 0,
  };
 }

 componentDidMount() {
  axios
   .get('http://localhost:5000/friends')
   .then(res => {
    this.setState({ friends: res.data });
   })
   .catch(err => console.log(err));
 }

 handleChange = e => {
  this.setState({ [e.target.name]: e.target.value });
  //   console.log(this.state);
 };

 handleSubmit = e => {
  console.log('hi');
  const newObj = {
   name: this.state.name,
   age: this.state.age,
   email: this.state.email,
  };
  axios
   .post('http://localhost:5000/friends', newObj)
   .then(res => {
    // console.log('res', res);
    this.setState({ friends: res.data, name: '', age: 0, email: '' });
   })
   .catch(err => {
    console.log(err);
   });
 };

 handleDelete = id => {
  console.log(id);
  axios
   .delete(`http://localhost:5000/friends/${id}`)
   .then(res => {
    console.log(res);
    this.setState({ friends: res.data });
   })
   .catch(err => {
    console.log(err);
   });
 };

 render() {
  return (
   <div className="App">
    <h1>Friends</h1>
    <AddFriend
     handleChange={this.handleChange}
     friends={this.state.friends}
     handleSubmit={this.handleSubmit}
     name={this.state.name}
     age={this.state.age}
     email={this.state.email}
    />
    <Row className="displayFlex">
     {this.state.friends.map(friend => {
      return (
       <ListFriends
        key={friend.id}
        friend={friend}
        handleDelete={this.handleDelete}
       />
      );
     })}
    </Row>
   </div>
  );
 }
}
