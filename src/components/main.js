import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Main extends Component {
  constructor(){
    super()
    this.state = {
      data: {}
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    const endpoint = "https://api.github.com/graphql";
    const options = ""
    // "Authorization: bearer token"
    // var data = fetch(endpoint, options)
  }

  render() {
    return (
      <div>
      <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      </div>
    );
  }
}

export default Main;