import './App.css';
import { Component } from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';

class App extends Component {

  render() {
  return (
    <div>
      <Navbar/>
        <div className="container">
        <Users></Users>
        </div>
    </div>
    );
  }
}

export default App;
