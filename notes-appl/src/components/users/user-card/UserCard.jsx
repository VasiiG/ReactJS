import React from "react";
import "./UserCard.css";
import { Link } from "react-router-dom";


export function UserCard({ user, onDelete }) {
  
  return (
    <div className="user-card">
      <div className="picture-holder"> 
      <span className='edit-icon'>
      <Link to={`/users/edit/${user.id}`}>E</Link>   
      </span>      
      <img src={user.picture} alt={user.name}></img>
      </div>
      <div className="info-holder">        
          <div className="name"><Link to={`/users/${user.id}`}>{user.name}</Link> </div>
          <div> <span className="age">Age: </span> {user.age}</div>
          <div> <span className="email">E-mail: </span> {user.email} </div>
          </div>        
    </div>
  );
}