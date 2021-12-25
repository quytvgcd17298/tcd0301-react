import './App.css';
import { Component } from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';
import axios from 'axios';

class App extends Component {
  state = {
    usersData: [],
    title: "TCD0301-React",
  };
  componentDidMount(){
    axios.get("https://api.github.com/users").then((response) => {
      console.log(response.data)
      this.setState({
      usersData: response.data
      });
    });
  };
  render() {
  return (
    <div>
      <Navbar/>
        <div className="container">
        <Users usersData = {this.state.usersData}></Users>
        </div>
    </div>
    );
  }
}

export default App;
