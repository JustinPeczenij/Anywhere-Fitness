import { useState } from 'react';
import EditClass from './EditClass';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 1%;
  padding:1%;
  border: 2px solid black;
  width: 20%;
`;

export default function InstructorClass(props) {
    const { c, setClasses } = props //c is class
    const [isEditing, setIsEditing] = useState(false)

    return (
      <StyledDiv>
        <div className='class-container' >
            <h3>{c.name}</h3>
            <p>Type: {c.type}</p>
            <p>Duration: {c.duration} minutes</p>
            <p>Where: {c.location}</p>
            <p>When: {c.starttime}</p>
            {isEditing ? null : <button onClick={() => setIsEditing(true)}>edit</button>}
        </div>
        <div>
            {isEditing && <EditClass c={c} setIsEditing={setIsEditing} setClasses={setClasses} />}
        </div>
      </StyledDiv>
    )
}