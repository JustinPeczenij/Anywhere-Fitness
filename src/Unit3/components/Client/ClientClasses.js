import { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

import { baseURL } from '../../utils/baseURL';

import ClientClassCard from './ClientClassCard'


export default function ClientClasses(props){
  const [results, setResults] = useState()
  const [errors, setErrors] = useState()

  useEffect(() => {
    
    axiosWithAuth()
    .get(`${baseURL}/classes/classes`)
    .then( res => {
        console.log(res)
     setResults(res.data)
      })
      .catch( err => {
          console.log(err)
      })
  }, [])

  

  return (
    <div style={{display: 'flex'}} >
      <div style={{marginLeft: '40px', flexGrow: 1}}>{
        results && results.length > 0 ? results.map( (c, i) => <ClientClassCard key={c.id} class={c} color={i%2} />)
        : <p>You don't have any classes yet.</p>}
      </div>
    </div>
  )
}