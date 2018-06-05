import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import UserList from './components/UserList'
import Issues from './components/Issues'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header></Header>
          <Route exact path="/" component={UserList} />
          <Route exact path="/issues" component={Issues} />
        </div>
      </Router>
    );
  }
}

export default App;
