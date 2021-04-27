import { useEffect, useState } from 'react';
import InstructorClass from './InstructorClass';
import CreateClass from './CreateClass'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { baseURL } from '../../utils/baseURL';

export default function InstructorManageClasses(props) {
    const [isCreating, setIsCreating] = useState(false)
    const { classes, setClasses } = props

    useEffect(()=> {
        //GET REQUEST for classes specific instructors classes
        //set classes to state
        //axiosWithAuth().get/users/getuserinfo
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