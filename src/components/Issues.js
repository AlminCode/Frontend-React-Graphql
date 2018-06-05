import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/UserList.css';

class Issues extends Component {
  constructor() {
    super();
    this.state = {
      issues: []
    };
  }

  componentDidMount() {
    this.fetchIssues();
  }

  fetchIssues = async () => {
    const endpoint = "https://api.github.com/graphql";
    const query = `
    query {
      repository(owner:"eversport", name:"react-playground") {
        issues(first: 10, states:OPEN) {
          nodes {
            id
            title
            url
            resourcePath
          }
        }
      }
    }
    `;

    // repository(owner:"eversport", name:"react-playground") {
    //   issues(first: 10) {
    //   nodes {
    //   id
    //   title
    //   url
    //   assignees(first:10) {
    //     edges {
    //       node {
    //         id
    //         name
    //       }
    //     }
    //   }
    //   }
    //   }

    
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "bearer a826c7b421576f946098b061cf8801c8103a50ac" //2f91331f0944d88b15a4c943dc066801fc2b2517
      },
      body: JSON.stringify({
        query: query
      })
    };

    var data = await fetch(endpoint, options);
    var result = await data.json()

    if (result) {
      this.setState({issues: result.data.repository.issues.nodes})
    }
    console.log(this.state.issues)
  };

  render() {
    return (
        <table align="center">
        <thead>
          <tr>
            <th>Number</th>
            <th>Issue</th>
            <th>Url to issue</th>
            <th>Assign Developer</th>
          </tr>
        </thead>
        <tbody>
        {this.state.issues.map((issue, i) =>
          <tr key={i}>
            <td>{i+1}</td>
            <td>{issue.title}</td>
            <td> <a className="github-link" href={issue.url}>Github Link</a></td>
            <td><button>Assign developer</button></td>
          </tr>
      )}
      </tbody>
      </table>
    );
  }
}

export default Issues;
