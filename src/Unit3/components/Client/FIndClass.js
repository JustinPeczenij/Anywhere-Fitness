
import { deprecationHandler } from 'moment';
import { useEffect, useState } from 'react'

const initialFormValues = {
    time : "",
    date : "",
    duration : "",
    type : "",
    intensity :"",
    location : "",
}


export default function FindClass(props){
  
  const [ formValues, setFormValues ] = useState(initialFormValues);
  
  const timeFilter = async() => {
      const filteredClasses = props.classes.filter(c => c.starttime === (formValues.time))
      await props.setClasses(filteredClasses)
  }
   const handleChanges = (evt) => {
       setFormValues({
           ...formValues, 
           [evt.target.name] : evt.target.value
       })
       timeFilter()
       console.log(props.classes)
   }



  return (
    <form>
        <label htmlFor = "time"> Time: </label>
        <input 
        name = "time"
        type = "text"
        value = {formValues.time}
        onChange = {handleChanges}
        />
        <label htmlFor = "date"> Date: </label>
        <input 
        name = "date"
        type = "text"
        value = {formValues.date}
        onChange = {handleChanges}
        />
        <label htmlFor = "duration"> Duration: </label>
        <input 
        name = "duration"
        type = "text"
        value = {formValues.duration}
        onChange = {handleChanges}
        />
        <label htmlFor = "type"> Class Type: </label>
        <input 
        name = "type"
        type = "text"
        value = {formValues.type}
        onChange = {handleChanges}
        />
        <label htmlFor = "intensity"> Intensity: </label>
        <input 
        name = "intensity"
        type = "text"
        value = {formValues.intensity}
        onChange = {handleChanges}
        />
        <label htmlFor = "location"> Location: </label>
        <input 
        name = "location"
        type = "text"
        value = {formValues.location}
        onChange = {handleChanges}
        />
    </form>
  )
}