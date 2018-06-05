import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import '../css/Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-position">
          <div>
            <Link to="/"><button>User List</button></Link>
            <Link to="/issues"><button>Unassigned Issues</button></Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;