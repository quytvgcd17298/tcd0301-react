import React from "react";
import { Link } from "react-router-dom";

const UserItems = ({user}) => {
  const {avatar_url, login} = user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          className="round-img"
          style={{ width: "60px" }}
          alt=""
        />
        <h3>{login}</h3>
        <Link 
        to = {`/user/${login}`}
        className="btn btn-primary btn-sm">
          More
        </Link>
      </div>
    );
};

export default UserItems;