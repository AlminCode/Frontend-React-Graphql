import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header'
import ListUsers from './components/ListUsers'
import Main2 from './components/main2'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Route exact path="/" component={ListUsers} />
          <Route exact path="/main2" component={Main2} />
        </div>
      </Router>
    );
  }
}

export default App;
