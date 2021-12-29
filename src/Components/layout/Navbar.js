import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
    <div className="navbar bg-primary">
      <h1>
        <Link to="/">{props.title}</Link>
      </h1>
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
        <Link to = "/about">About</Link>
      </li>
      </ul>
    </div>
        );
      };
export default Navbar;
