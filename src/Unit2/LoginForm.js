import React from 'react'
export default function LoginForm(props) {
    const { loginValues, loginUpdate, loginSubmit } = props
    //Functions Establishing Input Interactivity:
    const onChange = event => {
        const { name, value } = event.target
        loginUpdate(name, value)
    }
    const onSubmit = event => {
        event.preventDefault()
        loginSubmit()
    }
    return (
        <div className='login-form'>
            <form className='login-form-section' onSubmit={onSubmit}>
                <label>Role:
                    <select value={loginValues.role} name='role' onChange={onChange} placeholder='--select--'>
                        <option value=''>--Select Position--</option>
                        <option value='instructor'>Instructor</option>
                        <option value='client'>Client</option>
                    </select>
                </label>
                <h4>*User type should reveal auth code input if instructor selected*</h4>
                <label>Username:
                    <input
                        type='text'
                        onChange={onChange}
                        value={loginValues.username}
                        name='username'
                        maxLength='20'
                    />
                </label>
                <label>Password:
                    <input
                        type='text'
                        onChange={onChange}
                        value={loginValues.password}
                        name='password'
                    />
                </label>
                <div className='submitbtn'>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}