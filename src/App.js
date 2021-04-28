import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './Unit3/utils/PrivateRoute'
import InstructorManageClasses from './Unit3/components/InstrucorManageClasses/InstructorManageClasses';
//Unit 2 Component Imports:
import Header from './Unit2/Header'
import Home from './Unit2/HomeSectional'
import Login from './Unit2/LoginSectional'
import Signup from './Unit2/SignupSectional'


function App() {
  return (
    <div className="App">
      <header className="App-header">    
          {
            //Header Component:
          }      
          <Header />

          {
            //Header Signup, Login Page Links:
          }
          <Switch>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/login'>
              <Login />
            </Route> 
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
          
      </header>
      <Switch>
        <PrivateRoute path='/manage' component={InstructorManageClasses} />
        <Route exact path='/' component={Login}/> 
      </Switch>
    </div>
  );
}

export default App;
