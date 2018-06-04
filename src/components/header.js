import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Exercise</h1>
        <ul>
          <li><Link to="/"><button>Main</button></Link></li>
          <li> <Link to="/main2"><button>To Main2</button></Link></li>
        </ul>
      </header>
    );
  }
}

export default Header;