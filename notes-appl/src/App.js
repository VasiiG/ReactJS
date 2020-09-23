import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import { Switch } from 'react-router-dom';
import { Login } from './components/auth/login/Login';
import { AuthRoute } from './components/core/guards/AuthRoute.jsx';
import { NonAuthRoute } from './components/core/guards/NonAuthRoute';
import { Register } from './components/auth/register/Register';

function App() {
  return (
    <div className="App">   
      <Switch>
        <NonAuthRoute exact path="/login" component={Login} />
        <NonAuthRoute exact path="/register" component={Register} />
        <AuthRoute path="/" component={Layout} />  
      </Switch>
    </div>
  );
}

export default App;
