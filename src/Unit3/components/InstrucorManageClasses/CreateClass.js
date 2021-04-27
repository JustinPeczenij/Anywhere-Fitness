import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function CreateClassPage(props) {
    const { setClasses, setIsCreating } = props;
    const [formValues, setFormValues] = useState({
        name: '',
        type: '',
        startDate: '',
        startTime: '',
        duration: '',
        intensityLevel: '',
        location: '',
        maxClassSize: '',
    })

    const handleChanges = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const submitClass = (e) => {
        e.preventDefault();
        //post new class to new class endpoint
        //setClasses to a copy with new class appended.
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
                <label htmlFor='type'>Type of Class: </label>
                <input
                    name='type'
                    type='text'
                    onChange={handleChanges}
                    value={formValues.type}
                />
                <label htmlFor='startDate'>Start Date: </label>
                <input
                    name='startDate'
                    type='text'
                    onChange={handleChanges}
                    value={formValues.startDate}
                />
                <label htmlFor='startTime'>Start Time: </label>
                <input
                    name='startTime'
                    type='text'
                    onChange={handleChanges}
                    value={formValues.startTime}
                />
                <label htmlFor='duration'>Duration of Class: </label>
                <input
                    name='duration'
                    type='text'
                    onChange={handleChanges}
                    value={formValues.duration}
                />

                <label htmlFor='intensityLevel'>Intensity Level: </label>
                <select name='intensityLevel' onChange={handleChanges} value={formValues.intensityLevel}>
                    <option>-- Intensity --</option>
                    <option value='very-easy'>Very Easy</option>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                    <option value='very-hard'>Very Hard</option>
                </select>

                <label htmlFor='location'>Location: </label>
                <input
                    name='location'
                    type='text'
                    onChange={handleChanges}
                    value={formValues.location}
                />
                <label htmlFor='maxClassSize'>Max Class Size: </label>
                <input
                    name='maxClassSize'
                    type='text'
                    onChange={handleChanges}
                    value={formValues.maxClassSize}
                />
                <button type='submit'>Create a Class</button>
            </form>
            <button onClick={()=> setIsCreating(false)}>Cancel</button>
        </>
    )
}