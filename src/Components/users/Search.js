import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: "",
    };

    onChange = (event) => {
        this.setState({ text: event.target.value });
    };

    onClick = (event) => {
        event.preventDefault();
        if (this.state.text.trim() === "") {
          alert("Cannot be empty");
        }
        this.props.searchUsers(this.state.text)
        this.setState({
          text: "",
        });
      };
    render() {
        return (
            <div>
                <form className='container'>
                <input
                placeholder='Search by name'
                type= 'text'
                name= 'text'
                value={this.state.text}
                onChange={this.onChange}
                ></input>
                <input
                type="submit"
                className="btn btn-dark btn-block"
                onClick={this.onClick}></input>
                </form>
            </div>
        );
    }
}
export default Search;