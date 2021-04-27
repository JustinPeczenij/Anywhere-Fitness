import './App.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import InstructorManageClasses from './Unit3/components/InstrucorManageClasses/InstructorManageClasses';
import CreateClass from './Unit3/components/InstrucorManageClasses/CreateClass';
import Login from './Unit2/components/Login';

function App() {
    
  const [classes, setClasses] = useState([{
        name: 'class1',
        type: 'Yoga',
        starttime: 'May 28th 2021, 2:15 am',
        duration: 120,
        intensitylevel: 'INTERMEDIATE',
        location:'Albany, NY',
        numregisteredattendees: 32,
        maxclasssize: 53,
        id: 1
    },
    {
        name: 'class2',
        type: 'Pilates',
        starttime: 'May 28th 2021, 2:15 am',
        duration: 60,
        intensitylevel: 'BEGINNER',
        location:'New York, NY',
        numregisteredattendees: 21,
        maxclasssize: 30,
        id: 2
    },
    {
      duration: 30,
      intensitylevel: "EXPERT",
      location: "Allentown,  PA",
      maxclasssize: 50,
      name: "Justin K Peczenij",
      numregisteredattendees: 0,
      starttime: "May 28th 2021, 2:15 am",
      type: "Yoga",
      id: 3
    }
  ])

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
