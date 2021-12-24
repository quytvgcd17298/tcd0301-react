import React, { Component } from "react";

class UserItems extends Component {
  render() {
    return (
      <div className="card text-center">
        <img
          src={this.props.user.avatar_url}
          className="round-img"
          style={{ width: "60px" }}
          alt=""
        />
        <h3>{this.props.user.login}</h3>
        <a href={this.props.user.html_url} className="btn btn-primary btn-sm">
          More
        </a>
      </div>
    );
  }
}

export default UserItems;