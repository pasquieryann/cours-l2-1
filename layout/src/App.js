import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User.js';

class App extends React.Component {


  render() {
    return (
      <div class="card m-5">
          <img class="card-img-top" src={data.picture.large} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{data.picture.title} {data.picture.first} {data.picture.last}</h5>
            <p class="card-text">dsq</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>);                                
  }

}

export default App;
