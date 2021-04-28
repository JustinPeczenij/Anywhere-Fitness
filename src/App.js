import './App.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import InstructorManageClasses from './Unit3/components/InstrucorManageClasses/InstructorManageClasses';
import CreateClass from './Unit3/components/InstrucorManageClasses/CreateClass';
import Login from './Unit2/components/Login';

function App() {
    
  const [classes, setClasses] = useState([])

  return (
    <div className="App">
      <header className="App-header">
          <h1>Anywhere Fitness 💪</h1>
      </header>
      <Switch>
        <Route path='/manage/create' >
          <CreateClass classes={classes} setClasses={setClasses} />
        </Route>
        <Route path='/manage'>
          <InstructorManageClasses classes={classes} setClasses={setClasses} />
        </Route>
        <Route exact path='/' component={Login}/> 
      </Switch>
    </div>
  );
}

export default App;
