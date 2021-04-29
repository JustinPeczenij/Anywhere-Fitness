import { Route, Link, Switch } from 'react-router-dom';
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
    return (<>
          {/* <Switch>
            <Route path='/dashboard/client/search'>
              <FindClass />
            </Route>
            <Route path='/dashboard/client'>
              <ClientClasses />
            </Route>
    
          </Switch> */}
        </>
      )
    // }
  }