import styled from 'styled-components';

const example = [
    {
    date: "Apr 30th 2021",
    duration: 45,
    intensitylevel: "BEGINNER",
    location: "Allentown,  PA",
    maxsize: 45,
    name: "Justin K Peczenij",
    numregisteredattendees: 0,
    starttime: "6:30 pm",
    type: "Yoga",
    },
   {
    date: "Apr 30th 2021",
    duration: 45,
    intensitylevel: "BEGINNER",
    location: "Allentown,  PA",
    maxsize: 45,
    name: "Justin K Peczenij",
    numregisteredattendees: 0,
    starttime: "6:30 pm",
    type: "Yoga",    
   },
  
]

export default function ClientClassCard(props){
  const {c} = props

  return (
    <DivMain color={props.color}>
      <DivContent>
        <h3>{c.name}</h3>
        <p><b>{c.type}</b></p>
        <p>Intensity Level: {c.intensitylevel}</p>
        <p>Instructor: {c.instructor.username}</p>
        <p>Spots Available: {c.maxsize - c.numregisteredattendees}</p>
        <p>Where: {c.location}</p>
        <p>Duration: {c.duration} minutes</p>
        <p>When: {c.date} @ {c.starttime}</p>

      </DivContent>
    </DivMain>
  )
}
const DivMain = styled.div`
  display: flex;
  padding: 10px;
  width: 80%;
  * {
    margin: 0;
    font-size: initial;
  }
  p {
    margin-top: 0.5em;
  }
  
  h6 span {
    color: #0D58DA;
    color: #3d84ff;
  }
  
  h6 span:hover {
    cursor: pointer;
  }
`

const DivContent = styled.div`
  flex-grow: 1;
  border: 1px solid black;
`