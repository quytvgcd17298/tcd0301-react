import './App.css';
import { useState } from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';
import axios from 'axios';
import Search from './Components/users/Search';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';
import {Switch} from "react-router-dom";
import User from './Components/users/User';
 
const App = () => {

  const [usersData, setUsersData] = useState([""]);
  const [showLoading, setShowLoading] = useState(false);
  const [user, setUser] = useState({});
  const [title, setTitle] = useState("TCD0301-React");

  const searchUsers = async (text) => {
    setShowLoading(true);
    const response = await axios
    .get(`https://api.github.com/search/users?q=${text}`)
      console.log(response.data.items);
      setUsersData(response.data.items);
      setShowLoading(false);
    };
  
    const clearHandle = () => {     
        setUsersData([]);
    }

    const getUser = async (login) => {
      const response = await axios
      .get(`https://api.github.com/users/${login}`);
        console.log(response.data)
        setUser(response.data)
          }

  return (
    <Router>
    <div>
      <Navbar title = {title}/>
      <div className="container">
      <Switch>
        <Route
        exact
        path="/"
        render={() => (
          <Fragment>
            <Search 
              searchUsers = {searchUsers}
              clearHandle = {clearHandle}
              usersData = {usersData}>
            </Search>
            <Users 
              showLoading = {showLoading}
              usersData = {usersData}>
            </Users>
          </Fragment>
        )}
        ></Route>
        <Route
        exact path ="/About" component ={About}
        ></Route>
        <Route
        exact path= "/user/:login"
        render={(props) => (
          <User
          {...props}
          user = {user}
          getUser = {getUser}
          ></User>
        )}
        ></Route>
        <Route
        path = "/" component={NotFound}
        ></Route>
        </Switch>
        </div>
    </div>
    </Router>
    );
}

export default App;
