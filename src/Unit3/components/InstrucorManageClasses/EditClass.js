import { useState } from 'react';

export default function EditClass(props) {
    const { c, setIsEditing, setClasses } = props;
    const [formValues, setFormValues] = useState({
        name: c.name,
        type: c.type,
        startTime: c.startTime,
        duration: c.duration,
        intensityLevel: c.intensityLevel,
        location: c.location,
        noRegistered: c.noRegistered,
        maxClassSize: c.maxClassSize,
        id: c.id
    })

    const handleChanges = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const saveChanges = (e) => {
        e.preventDefault();

        //put request to where changes are made to classes
        //set changes global state (classes) so we can see in app.

        setIsEditing(false)
    }

    const deleteClass = () => {
        //axios delete 
        //promise should set classes to new array
    }

    return (<>
            <form onSubmit={saveChanges}>
                <label htmlFor='name'>Name </label>
                <input
                    name='name'
                    type='text'
                    value={formValues.name}
                    onChange={handleChanges}
                />
                <label htmlFor='type'>Type </label>
                <input
                    name='type'
                    type='text'
                    value={formValues.type}
                    onChange={handleChanges}
                />
                <label htmlFor='startTime'>Start Time </label>
                <input
                    name='startTime'
                    type='text'
                    value={formValues.startTime}
                    onChange={handleChanges}
                />
                <label htmlFor='duration'>Duration </label>
                <input
                    name='duration'
                    type='text'
                    value={formValues.duration}
                    onChange={handleChanges}
                />
                <label htmlFor='intensityLevel'>Intensity Level </label>
                <input
                    name='intensityLevel'
                    type='text'
                    value={formValues.intensityLevel}
                    onChange={handleChanges}
                />
                <label htmlFor='maxClassSize'>Max Class Size </label>
                <input
                    name='maxClassSize'
                    type='text'
                    value={formValues.maxClassSize}
                    onChange={handleChanges}
                />
                <button type='submit'>Save Changes</button>
                <button type='button'>delete</button>
                <button type='button' onClick={() => setIsEditing(false)}>Cancel Changes</button>
            </form>
        </>
        )
}