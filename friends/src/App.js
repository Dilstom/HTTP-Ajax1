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
   show: false,
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
  const newObj = {
   name: this.state.name,
   age: this.state.age,
   email: this.state.email,
  };
  axios
   .post('http://localhost:5000/friends', newObj)
   .then(res => {
    // console.log('res', res);
    this.setState({ friends: res.data, show: false });
   })
   .catch(err => {
    console.log(err);
   });
 };

 handleDelete = id => {
  //   console.log(id);
  axios
   .delete(`http://localhost:5000/friends/${id}`)
   .then(res => {
    // console.log(res);
    this.setState({ friends: res.data });
   })
   .catch(err => {
    console.log(err);
   });
 };

 showModal = e => {
  e.preventDefault();
  this.setState({ show: true });
 };

 handleUpdate = (obj, id) => {
  console.log('click');
  axios
   .put(`http://localhost:5000/friends/${id}`, obj)
   .then(res => {
    console.log(res.data);
    this.setState({ friends: res.data });
   })
   .catch(err => console.log(err));
 };

 handleClose = e => {
  this.setState({ show: false });
 };

 render() {
  return (
   <div className="allWrapper">
    <nav className="navbar navbar-light fixed-top bg-light justify-content-between">
     <span className="navbar-brand  mb-0 h1">Friends</span>
     <form className="form-inline">
      <button
       className="btn btn-outline-success my-2 my-sm-0"
       type="submit"
       onClick={this.showModal}
      >
       <i className="fa fa-plus mr-2" />
       Add New Friend
      </button>
     </form>
    </nav>
    <div className="App">
     {this.state.show ? (
      <AddFriend
       handleChange={this.handleChange}
       friends={this.state.friends}
       handleSubmit={this.handleSubmit}
       name={this.state.name}
       age={this.state.age}
       email={this.state.email}
       show={this.state.show}
       handleClose={this.handleClose}
      />
     ) : null}
     <h1 className="title">Your Friends</h1>
     <Row className="displayFlex">
      {this.state.friends.map(friend => {
       return (
        <ListFriends
         key={friend.id}
         friend={friend}
         handleDelete={this.handleDelete}
         handleUpdate={this.handleUpdate}
        />
       );
      })}
     </Row>
    </div>
   </div>
  );
 }
}
