import React from "react";
import {  Switch } from "react-router-dom";
import { UsersList } from "../../users/users-list/UsersList";
import{ User } from "../../users/user/User";
import { AuthRoute } from "../../core/guards/AuthRoute";
import { UserEdit } from '../../users/user-edit/UserEdit';


export function Main() {
  return (
    <div className='main-content'>
      <Switch>
        <AuthRoute exact path='/users' component={UsersList}></AuthRoute>
        <AuthRoute exact path='/users/:id' component={User}></AuthRoute>
        <AuthRoute exact path="/recipies/edit/:id" component={UserEdit} />
      </Switch>

    </div>
  );
} 