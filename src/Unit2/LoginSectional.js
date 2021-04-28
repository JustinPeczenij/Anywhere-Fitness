import React, { useState } from 'react';

import LoginForm from './LoginForm'

const initialFormValues = {
  password: '',
  primaryemail: '',
  username: '',
}

export default function Login() {
  const [formValues, setFormValues] = useState(initialFormValues)


  //Functions Input Interactivity:
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }
  const submitForm = () => {
    const newClient = {
      password: formValues.password,
      primaryemail: formValues.primaryemail,
      username: formValues.username,
    }
    //NEEDS to be separate from newClient so object keys match Model (POST):
    //Will likely need new code to reveal auth code (or for initializing auth code):
    const clientRole = {
      role: formValues.role,
    }


    //PREVENT EMPTY SUBMISSIONS:
    if (!newClient.username || !newClient.primaryemail || !newClient.password || !clientRole.role) return

    //LOGIN FUNCTIONALITY HERE:


  }

  return (
      <div className='login-sectional'>
        <h3>My Login Styling.......</h3>
        <LoginForm
          loginValues={formValues}
          loginUpdate={updateForm}
          loginSubmit={submitForm}
        />
      </div>
  );
}
