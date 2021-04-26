/*4. Authenticated `Instructor` can create update and delete a `class`. At a minimum, each `class` must have the following properties:

- `Name`
- `Type`
- `Start time`
- `Duration`
- `Intensity level`
- `Location`
- `Current number of registered attendees`
- `Max class size`*/
import { useEffect, useState } from 'react';
import InstructorClass from './InstructorClass';
import CreateClass from './CreateClass'

export default function InstructorManageClasses(props) {
    const [isCreating, setIsCreating] = useState(false)
    const { classes, setClasses } = props

    useEffect(()=> {
        //GET REQUEST for classes specific instructors classes
        //set classes to state
    })
    
    return (
        <div className='manage-class-container'>
            <h2>Class Management</h2>
            {
            isCreating
            ? <CreateClass setIsCreating={setIsCreating} /> 
            : <button onClick={()=> setIsCreating(true)}>Create a Class</button>
            }
            <div>
                { //c is class
                classes.map(c => <InstructorClass key={c.location} c={c} setClasses={setClasses}/>)
                }
            </div>
        </div>
    )
}