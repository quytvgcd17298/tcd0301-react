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
    setLoading: false
  };

  searchUsers = async (text) => {
    const response = await axios
    .get(`https://api.github.com/search/users?q=${text}`)
      console.log(response.data.items)
      this.setState({
      usersData: response.data.items,
      });
    };
  
  render() {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <Search searchUsers = {this.searchUsers}></Search>
      {this.state.searchText}
        <Users usersData = {this.state.usersData}></Users>
        </div>
    </div>
    );
  }
}

export default App;
