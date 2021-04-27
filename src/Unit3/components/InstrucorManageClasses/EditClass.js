import { useState } from 'react';

export default function EditClass(props) {
    const { c, setIsEditing, setClasses } = props;
    const [formValues, setFormValues] = useState({
        name: c.name,
        type: c.type,
        startTime: c.startTime,
        duration: c.duration,
        intensitylevel: c.intensitylevel,
        location: c.location,
        maxclasssize: c.maxclasssize,
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
        const newClass = {

        }
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

                <label htmlFor='type'>Type of Class: </label>
                <select name='type' onChange={handleChanges} value={formValues.type}>
                    <option>-- Type --</option>
                    <option value='Yoga'>Yoga</option>
                    <option value='Pilates'>Pilates</option>
                    <option value='Weight Lifting'>Weight Lifting</option>
                    <option value='Cardio'>Cardio</option>
                    <option value='Movement'>Movement</option>
                </select>

                <label htmlFor='startDate'>Start Date </label>
                <input
                    name='startDate'
                    type='text'
                    onChange={handleChanges}
                    value={formValues.startDate}
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
                <label htmlFor='intensitylevel'>Intensity Level </label>
                <input
                    name='intensitylevel'
                    type='text'
                    value={formValues.intensitylevel}
                    onChange={handleChanges}
                />
                <label htmlFor='maxclasssize'>Max Class Size </label>
                <input
                    name='maxclasssize'
                    type='text'
                    value={formValues.maxclasssize}
                    onChange={handleChanges}
                />
                <button type='submit'>Save Changes</button>
                <button type='button'>delete</button>
                <button type='button' onClick={() => setIsEditing(false)}>Cancel Changes</button>
            </form>
        </>
        )
}