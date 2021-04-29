import { useState, useEffect } from 'react'

import ClientClassCard from './ClientClassCard'

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
  const [errors, setErrors] = useState()

//   useEffect(() => {
//     getMyClasses()
//       .then( res => {
//         // console.log(res)
//         setResults(res.data)
//       })
//       .catch( err => {
//         // console.log(err)
//       })
//   }, [])

  

  return (
    <div style={{display: 'flex'}} >
      <div style={{marginLeft: '40px', flexGrow: 1}}>{
        results && results.length > 0 ? results.map( (lesson, i) => <ClientClassCard key={lesson.id} class={lesson} color={i%2} Component={Withdraw} update={withdraw}/>)
        : <p>You don't have any classes yet.</p>}
      </div>
    </div>
  )
}