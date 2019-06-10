import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListFriends from './ListFriends';
import { Row } from 'reactstrap';

export default class App extends Component {
 constructor() {
  super();
  this.state = {
   friends: [],
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

 render() {
  return (
   <div className="App">
    <h1>Friends</h1>
    <Row className="displayFlex">
     {this.state.friends.map(friend => {
      return <ListFriends key={friend.id} friend={friend} />;
     })}
    </Row>
   </div>
  );
 }
}
