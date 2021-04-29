import { useEffect, useState } from 'react'

import ClientClassCard from './ClientClassCard'
// import Register from './Register'
import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { baseURL } from '../../utils/baseURL';



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
  },
]

export default function FindClass(props){
  const [results, setResults] = useState(example)
  const [myClassIDS, setMyClassIDS] = useState([])
  const [errors, setErrors] = useState()

  useEffect(() => {

    axiosWithAuth()
      .get(`${baseURL}/classes/classes`)
      .then( res => {
        setMyClassIDS(res.data.map( obj => obj.id))
      })
      .catch( err => {
      })
  },[])

  function setNewClasses(results){
    const today = new Date().toISOString().split('T')[0].split('-').join('');
    setResults(results.filter( obj => !myClassIDS.includes(obj.id) && obj.starttime.split('T')[0].split('-').join('') > today))

    
  }

  return (
    <div style={{display: 'flex'}} >
      <div style={{marginLeft: '40px', flexGrow: 1}}>
        {/* {results.map( (lesson, i) => <ClientClassCard key={lesson.id} class={lesson} color={i%2} Component={Register}/>)} */}
      </div>
    </div>
  )
}