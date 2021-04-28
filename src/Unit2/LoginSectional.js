import React, { useState } from 'react';

import LoginForm from './LoginForm'

const initialFormValues = {
  role: '',
  username: '',
  password: '',
}

export default function Login(props) {
  const [formValues, setFormValues] = useState(initialFormValues)


  //Functions Input Interactivity:
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }
  const submitForm = () => {
    //NEED TO KNOW if I should be producing individual users/instructors (separately) ??:
    const newClient = {
      role: formValues.role,
      username: formValues.username,
      password: formValues.password,
    }

    //PREVENT EMPTY SUBMISSIONS:
    if (!newClient.username || !newClient.email || !newClient.role) return


    //Axios POSTS HERE (should CLEAR form on successful submission...avoids multiple posts of same card):
    // axios.post('fakeapi.com', newClient)
    //   .then(res => {
    //     setFormValues(initialFormValues)
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
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
