import { useState } from 'react';
import EditClass from './EditClass'

export default function InstructorClass(props) {
    const { c, setClasses } = props //c is class
    const [isEditing, setIsEditing] = useState(false)

    const deleteClass = () => {
        //axios delete 
        //promise should set classes to new array
    }

    return (
      <>
        <div className='class-container'>
            <h3>{c.name}</h3>
            <p>Type: {c.type}</p>
            <p>Class Start Time: {c.startTime}</p>
            <p>Duration: probably a calculation {c.duration}</p>
            <p>Where: {c.location}</p>
            {isEditing ? null : <button onClick={() => setIsEditing(true)}>edit</button>}
        </div>
        <div>
            {isEditing && <EditClass c={c} setIsEditing={setIsEditing} setClasses={setClasses} />}
        </div>
      </>
    )
}