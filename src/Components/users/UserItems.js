import React from "react";

const UserItems = ({user}) => {
  const {avatar_url, login, html_url} = user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          className="round-img"
          style={{ width: "60px" }}
          alt=""
        />
        <h3>{login}</h3>
        <a href={html_url} className="btn btn-primary btn-sm">
          More
        </a>
      </div>
    );
};

export default UserItems;