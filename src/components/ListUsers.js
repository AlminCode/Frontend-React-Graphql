import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListUsers extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const endpoint = "https://api.github.com/graphql?access_token=2f91331f0944d88b15a4c943dc066801fc2b2517";
    const query = `
    query {
    organization(login: "eversport") {
      members(first: 50) {
        nodes {
          name
          issues(last: 100, labels: ["to develop"], states:OPEN) {
            totalCount
          }
          }
         }
      }
    }
    `;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "2f91331f0944d88b15a4c943dc066801fc2b2517"
      },
      body: JSON.stringify({
        query: query
      })
    };

    var data = await fetch(endpoint, options);
    var result = await data.json()
    console.log(result);
  };

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

export default ListUsers;
