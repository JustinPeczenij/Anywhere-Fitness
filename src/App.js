import './App.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import InstructorManageClasses from './Unit3/components/InstrucorManageClasses/InstructorManageClasses';
import Login from './Unit2/components/Login';
import { PrivateRoute } from './Unit3/utils/PrivateRoute'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Anywhere Fitness 💪</h1>
      </header>
      <Switch>
        <PrivateRoute path='/manage' component={InstructorManageClasses} />
        <Route exact path='/' component={Login}/> 
      </Switch>
    </div>
  );
}

export default App;
