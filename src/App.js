import './App.css';
import { Component } from 'react';
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
 
class App extends Component {
  state = {
    usersData: [],
    title: "TCD0301-React",
    showLoading: false,
    user:{}
  };

  searchUsers = async (text) => {
    this.setState({showLoading: true})
    const response = await axios
    .get(`https://api.github.com/search/users?q=${text}`)
      console.log(response.data.items)
      this.setState({
      usersData: response.data.items,
      showLoading: false
      });
    };
  
    clearHandle = () => {
      this.setState({
        usersData: [],
      })
    }

    getUser = async (login) => {
      const response = await axios
      .get(`https://api.github.com/users/${login}`);
      this.setState({
        user: response.data
      })
      console.log(response.data)
    }

  render() {
  return (
    <Router>
    <div>
      <Navbar title = {this.state.title}/>
      <div className="container">
      <Switch>
        <Route
        exact
        path="/"
        render={() => (
          <Fragment>
            <Search 
              searchUsers = {this.searchUsers}
              clearHandle = {this.clearHandle}
              usersData = {this.state.usersData}>
            </Search>
            <Users 
              showLoading = {this.state.showLoading}
              usersData = {this.state.usersData}>
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
          user = {this.state.user}
          getUser = {this.getUser}
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
}

export default App;
