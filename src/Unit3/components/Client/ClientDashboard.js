import { useEffect, useState } from 'react';
import 'intro.js/introjs.css';
import introJs from 'intro.js';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { baseURL } from '../../utils/baseURL';
import ClientClassCard from './ClientClassCard';

  
export default function ClientDash(props){
  const [classes, setClasses] = useState([])

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
      axiosWithAuth().get(`${baseURL}/classes/classes`)
        .then(res => {
          console.log(res)
          setClasses(res.data)
      })
        .catch(err => console.log({err}))
  }, [])
  return (
      <>
      {classes && classes.map(c => <ClientClassCard c={c}/>)}
      </>
  )
}