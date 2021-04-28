import { useEffect, useState } from 'react';
import InstructorClass from './InstructorClass';
import CreateClass from './CreateClass'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { baseURL } from '../../utils/baseURL';
import styled from 'styled-components'

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const StyledButton = styled.button`
    width: 10%;
    height: 5%;
`;

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
        <StyledDiv>
            <h2>Class Management</h2>
            {
            isCreating
            ? <CreateClass setIsCreating={setIsCreating} instructor={instructor} setClasses={setClasses} classes={classes} /> 
            : <StyledButton onClick={()=> setIsCreating(true)}>Create a Class</StyledButton>
            }
            <div style={{display: 'flex', flexFlow: 'row wrap', width:'100%'}}>
                { //c is class
                classes && classes.map(c => <InstructorClass key={c.classid} c={c} setClasses={setClasses}/>)
                }
            </div>
        </StyledDiv>
    )
}