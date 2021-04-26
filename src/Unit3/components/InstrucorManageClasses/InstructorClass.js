import { useState } from 'react';
import EditClass from './EditClass'

export default function InstructorClass(props) {
    const { c } = props //c is class
    const [isEditing, setIsEditing] = useState(false)

    return (
      <>
        <div className='class-container'>
            <h3>{c.name}</h3>
            <p>Type: {c.type}</p>
            <p>Class Start Time: {c.startTime}</p>
            <p>Duration: probably a calculation {c.duration}</p>
            <p>Where: {c.location}</p>
            <button onClick={() => setIsEditing(true)}>edit</button>
            <button>delete</button>
        </div>
        <div>
            {isEditing && <EditClass c={c} setIsEditing={setIsEditing}/>}
        </div>
      </>
    )
}