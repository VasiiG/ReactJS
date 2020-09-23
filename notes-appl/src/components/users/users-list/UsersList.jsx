import React, { useState, useEffect } from "react";
import { UserCard } from "../user-card/UserCard";
import { getAllUsers} from "../../core/api/users.api";
import { getLoggedUser} from "../../core/api/users.api";;




export function UsersList(props) {

  
  console.log(props);
  const {currentUser} = getLoggedUser();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((allUsers) => {
      console.log(allUsers);
      setUsers(allUsers.data.filter((u) => u.id !== currentUser.id));
    });
  }, []);


  return (
    <div className="users-list d-flex">
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
}