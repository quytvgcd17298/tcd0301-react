import React from 'react'
import UserItems from './UserItems'

const Users = (props) => {
  if(props.showLoading) {
    return (
    <div>
      <h2>Fetching data ...</h2>
    </div>
   );
  }
        return (
            <div style={userStyle}>
                {props.usersData.map((user) => (
                <UserItems key={user.id} user = {user}></UserItems>))
                }
            </div>
        )
}
const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "1rem",
  };

export default Users;