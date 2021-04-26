/*4. Authenticated `Instructor` can create update and delete a `class`. At a minimum, each `class` must have the following properties:

- `Name`
- `Type`
- `Start time`
- `Duration`
- `Intensity level`
- `Location`
- `Current number of registered attendees`
- `Max class size`*/
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InstructorClass from './InstructorClass';
import CreateClassPage from './CreateClassPage'

export default function InstructorManageClasses() {
    const [classes, setClasses] = useState([{
        name: 'class1',
        type: 'yoga',
        startTime: '1pm',
        duration: '2 hours',
        intensityLevel: 'intermediate',
        location:'Albany, NY',
        noRegistered: 32,
        maxClassSize: 53,
        id: 1
    },
    {
        name: 'class2',
        type: 'pilates',
        startTime: '3pm',
        duration: '8 hours',
        intensityLevel: 'beginner',
        location:'New York, NY',
        noRegistered: 21,
        maxClassSize: 30,
        id: 2
    }, ])

    useEffect(()=> {
        //GET REQUEST for classes specific instructors classes
        //set classes to state
    })
    
    return (
        <div className='manage-class-container'>
            
            <h2>Class Management</h2>
            
                <Link to='/manage/create'>
                    <button>Create a Class</button>
                </Link>
            <div>
                { //c is class
                classes.map(c => <InstructorClass key={c.location} c={c}/>)
                }
            </div>
        </div>
    )
}