import { useEffect, useState } from 'react';
import InstructorClass from './InstructorClass';
import CreateClass from './CreateClass'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { baseURL } from '../../utils/baseURL';

export default function InstructorManageClasses(props) {
    const [isCreating, setIsCreating] = useState(false)
    const [instructor, setInstructor] = useState({})
    const { classes, setClasses } = props

    //GET INSTRUCTOR'S CLASSES
    useEffect(()=> {
        axiosWithAuth().get(`${baseURL}/users/getuserinfo`)
            .then(res =>{
                setInstructor(res.data)
                setClasses(res.data.classes)
            })
            .catch(err =>console.log(err))
    }, [setClasses])
    
    //DELETE CLASS
    const deleteClass = () => {

        //axios delete 
        //promise should set classes to new array
        
    }

    return (
        <div className='manage-class-container'>
            <h2>Class Management</h2>
            {
            isCreating
            ? <CreateClass setIsCreating={setIsCreating} instructor={instructor} setClasses={setClasses} classes={classes} /> 
            : <button onClick={()=> setIsCreating(true)}>Create a Class</button>
            }
            <div>
                { //c is class
                classes && classes.map(c => <InstructorClass key={c.classid} c={c} setClasses={setClasses}/>)
                }
            </div>
        </div>
    )
}