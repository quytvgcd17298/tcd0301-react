import React, { Component } from 'react'
import UserItems from './UserItems'

export default class Users extends Component {
    usersData = [
        {
            login: "mojombo",
            id: 1,
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
            html_url: "https://github.com/mojombo",
          },
          {
            login: "defunkt",
            id: 2,
            avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
            html_url: "https://github.com/mojombo",
          },
          {
            login: "pjhyett",
            id: 3,
            avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
            html_url: "https://github.com/mojombo",
          },
          {
            login: "pjhyett",
            id: 4,
            avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
            html_url: "https://github.com/mojombo",
          },
          {
            login: "pjhyett",
            id: 5,
            avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
            html_url: "https://github.com/mojombo",
          },
        ]
    render() {
        return (
            <div style={userStyle}>
                {this.usersData.map((user) => (
                <UserItems key={user.id} user = {user}></UserItems>))
                }
            </div>
        )
    }
}
const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "1rem",
  };