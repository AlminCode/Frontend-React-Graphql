import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/UserList.css';

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    this.fetchMembers();
  }

  sortByDesc = () => {
    this.setState(members => {
      this.state.members.sort((a, b) => (b.issues.totalCount - a.issues.totalCount))
    });
  }

  fetchMembers = async () => {
    const endpoint = "https://api.github.com/graphql";
    const query = `
    query {
    organization(login: "eversport") {
      members(first: 50) {
        nodes {
          name
          issues(last: 100, labels: ["to develop"], states:OPEN) {
            totalCount
          }
          avatarUrl
          login
          }
        }
      }
    }
    `;
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
      this.setState({members: result.data.organization.members.nodes})
    }
    this.sortByDesc()
    console.log(this.state.members)
  };

  render() {
    return (
        <table align="center">
        <thead>
          <tr>
            <th>Number</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Login</th>
            <th>Issue Count</th>
          </tr>
        </thead>
        <tbody>
        {this.state.members.map((member, i) =>
          <tr key={i}>
            <td>{i+1}</td>
            <td><img className="avatar" src={member.avatarUrl}/> </td>
            <td>{member.name}</td>
            <td>{member.login}</td>
            <td>{member.issues.totalCount}</td>
          </tr>
      )}
      </tbody>
      </table>
    );
  }
}

export default UserList;
