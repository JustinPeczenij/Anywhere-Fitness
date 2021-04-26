import './App.css';
import { Route, Switch } from 'react-router-dom';
import InstructorManageClasses from './Unit3/components/InstrucorManageClasses/InstructorManageClasses'
import CreateClassPage from './Unit3/components/InstrucorManageClasses/CreateClassPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Anywhere Fitness 💪</h1>
      </header>
      <Switch>
        <Route path='/manage/create' component={CreateClassPage} />
        <Route path='/manage' component={InstructorManageClasses} />
      </Switch>
    </div>
  );
}

export default App;
