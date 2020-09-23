import React, { Component } from "react";
import './Register.css';
import { register } from "../../core/api/users.api";
import { Redirect, Link } from 'react-router-dom';

export class Register extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: "",
        email: "",
        password: "",
        age: "",
        isRegistered: false, 
      };}

      onInputChange = (event) =>  {
        event.persist();
        this.setState({
            [event.target.name]: event.target.value,
            errorMessage: ''
        });
      }

      onSubmit = (event) => {
        event.preventDefault();
        const { isRegistered, ...user } = this.state;
        console.log(user);
        register(user).then(() => {
            this.setState({
                isRegistered: true
            });
        })
        .catch((err) => this.setState({ errorMessage: err.message }));
    };

    render(){
        return(
            <>
            {this.state.isRegistered && <Redirect to="/login" /> }
            <div className="register-wrapper">
                <form className="register-form" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label labelFor="name">Name: </label>
                    <input type="text"  name="name" id="name"  className="form-control" onChange={this.onInputChange}></input>
                </div>

                <div className="form-group">
                    <label labelFor="age">Age: </label>
                    <input type="number"  name="age" id="age"  className="form-control" onChange={this.onInputChange}></input>
                </div>

                <div className="form-group">
                    <label labelFor="email">Email: </label>
                    <input type="email" name="email" id="email"  className="form-control" onChange={this.onInputChange}></input>
                </div>

                <div className="form-group">
                    <label labelFor="password">Password: </label>
                    <input type="password" name="password" id="password"  className="form-control" onChange={this.onInputChange}></input>
                </div>
                <button className="btn btn-primary" >Register</button>
                    <Link to="/login">Already have an account?</Link>
                </form>
            </div>
            </>
        );
    }
    }