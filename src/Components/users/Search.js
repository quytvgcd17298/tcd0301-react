import React, { useState } from 'react'

const Search = (props) => {
    const [text, setText] = useState("");
    const {searchUsers, clearHandle, usersData} = props

    const onChange = (event) => {
        setText( event.target.value );
    };

    const onClick = (event) => {
        event.preventDefault();
        if (text.trim() === "") {
          alert("Cannot be empty");
          return;
        }
        searchUsers(text)
          setText("");
      };

    const clearBtn = (event) => {
        event.preventDefault();
        clearHandle();
    }

        return (
            <div>
                <form className='container'>
                <input
                placeholder='Search by name'
                type= 'text'
                name= 'text'
                value={text}
                onChange={onChange}
                ></input>
                <input
                type="submit"
                className="btn btn-dark btn-block"
                onClick={onClick}></input>
                {usersData.length > 0 ? (
                <button onClick={clearBtn} className="btn btn-light btn-block">
                  Clear
                </button>
            ) : (
            ""
            )}
                </form>
            </div>
        );
}
export default Search;