import { Route, Link, Switch } from 'react-router-dom';
import  ClientClasses  from './ClientClasses';
import  FindClass  from './FindClass';


const example = [
    {
        date: "Apr 30th 2021",
        duration: 45,
        intensitylevel: "BEGINNER",
        location: "Allentown,  PA",
        maxsize: 45,
        name: "Justin K Peczenij",
        numregisteredattendees: 0,
        starttime: "6:30 pm",
        type: "Yoga",
    },
    {
        date: "Apr 30th 2021",
        duration: 45,
        intensitylevel: "BEGINNER",
        location: "Allentown,  PA",
        maxsize: 45,
        name: "Justin K Peczenij",
        numregisteredattendees: 0,
        starttime: "6:30 pm",
        type: "Yoga",
        }
    
  ]
  
  export default function ClientDash(props){
    return (<div style={{
      margin: '0 auto',
      maxWidth: '1100px',
      width: '90%',
    }}>
      This is ClientDash<br/>
      <div style={{display: 'flex', justifyContent: 'space-around', margin: '5px 0'}}>
        
        <Link to='/dashboard/client' pressed={window.location.pathname === '/dashboard/client'}>My Classes</Link>
      </div>
      <Switch>
        <Route path='/dashboard/client/search'>
          <FindClass />
        </Route>
        <Route path='/dashboard/client'>
          <ClientClasses />
        </Route>
    </Switch>
    </div>
  )
}