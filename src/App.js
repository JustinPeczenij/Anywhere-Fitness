import './App.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import InstructorManageClasses from './Unit3/components/InstrucorManageClasses/InstructorManageClasses';
import CreateClass from './Unit3/components/InstrucorManageClasses/CreateClass';

function App() {
    const [classes, setClasses] = useState([{
        name: 'class1',
        type: 'yoga',
        startTime: '1pm',
        duration: '2 hours',
        intensityLevel: 'intermediate',
        location:'Albany, NY',
        noRegistered: 32,
        maxClassSize: 53,
        id: 1
    },
    {
        name: 'class2',
        type: 'pilates',
        startTime: '3pm',
        duration: '8 hours',
        intensityLevel: 'beginner',
        location:'New York, NY',
        noRegistered: 21,
        maxClassSize: 30,
        id: 2
    }, ])

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
      </Switch>
    </div>
  );
}

export default App;
