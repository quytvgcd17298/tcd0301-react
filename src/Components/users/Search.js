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
          return;
        }
        this.props.searchUsers(this.state.text)
        this.setState({
          text: "",
        });
      };

    clearBtn = (event) => {
        event.preventDefault();
        this.props.clearHandle();
    }

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
                {this.props.usersData.length > 0 ? (
                <button onClick={this.clearBtn} className="btn btn-light btn-block">
                  Clear
                </button>
            ) : (
            ""
            )}
                </form>
            </div>
        );
    }
}
export default Search;