import { useState } from 'react';

export default function CreateClassPage(props) {
    const [formValues, setFormValues] = useState({
        name: '',
        type: '',
        startTime: '',
        duration: '',
        intensityLevel: '',
        location: '',
        maxClassSize: '',
    })

    const handleChanges = (e) => {
        setFormValues({
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form>
                <legend>Create a Class</legend>
                <label htmlFor='name'>Class Name: </label>
                <input
                    name='name'
                    type='text'
                    onChange={handleChanges}
                    value={formValues.name}
                />
                <button type='submit'>Create a Class</button>
            </form>
            <button onClick={()=> props.history.push('/manage')}>Cancel</button>
        </>
    )
}