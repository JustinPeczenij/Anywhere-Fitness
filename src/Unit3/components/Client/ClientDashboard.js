import { Route, Link, Switch } from 'react-router-dom';
import  ClientClasses  from './ClientClasses';
import  FindClass  from './FindClass';

import { useEffect } from 'react';
import 'intro.js/introjs.css';
import introJs from 'intro.js';

  
  export default function ClientDash(props){
    const checkForOnboarding = () => {
        if(window.localStorage.getItem('id_first')){
            return
        } else introJs().setOptions({
            steps: [
                {intro: "Welcome the Anywhere Fitness! Here you can browse and search for classes, and hopefully make a reservation."},
                {element: document.querySelector('.create-class-btn'), intro: 'Create a class for prospects to see.'},
            ]
        }).start()
    } 
    useEffect(() => {
        checkForOnboarding()
    }, [])
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

