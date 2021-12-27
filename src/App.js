import './App.css';
import { Component } from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';
import axios from 'axios';
import Search from './Components/users/Search';

class App extends Component {
  state = {
    usersData: [],
    title: "TCD0301-React",
    showLoading: false
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

  render() {
  return (
    <div>
      <Navbar title = {this.state.title}/>
      <div className="container">
      <Search 
      searchUsers = {this.searchUsers}
      clearHandle = {this.clearHandle}
      usersData = {this.state.usersData}
      ></Search>
        <Users 
        showLoading = {this.state.showLoading}
        usersData = {this.state.usersData}></Users>
        </div>
    </div>
    );
  }
}

export default App;
