import './App.css';
import { Route, Switch } from 'react-router-dom';
import InstructorManageClasses from './Unit3/components/InstrucorManageClasses/InstructorManageClasses'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Anywhere Fitness 💪</h1>
      </header>
      <Switch>
        <Route path='/manage' component={InstructorManageClasses} />
      </Switch>
    </div>
  );
}

export default App;
