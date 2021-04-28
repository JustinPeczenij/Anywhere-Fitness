import React, { useState} from 'react';
//import axios from 'axios' WILL BE USED FOR API POSTS

import SignupForm from './SignupForm'

const initialFormValues = {
  role: '',
  primaryemail: '',
  username: '',
  password: '',
}

export default function Signup(props) {
  const [formValues, setFormValues] = useState(initialFormValues)


  //Functions Input Interactivity:
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }
  const submitForm = () => {
    //NEED TO KNOW if I should be producing individual users/instructors (separately) ??:
    const newClient = {
      role: formValues.role,
      primaryemail: formValues.primaryemail,
      username: formValues.username,
      password: formValues.password,
    }

    //PREVENT EMPTY SUBMISSIONS:
    if (!newClient.username || !newClient.password || !newClient.primaryemail || !newClient.role) return


    //Axios POSTS HERE (should CLEAR form on successful submission...avoids multiple posts of same card):
    
    // axios.post('fakeapi.com', newClient)    *Post endpoint here..?
    //   .then(res => {
    //     setFormValues(initialFormValues)
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }
  return (
    <div className='login-sectional'>
      <h3>My SignUp Styling.......</h3>
      <SignupForm
        signupValues={formValues}
        signupUpdate={updateForm}
        signupSubmit={submitForm}
      />
    </div>
  );
}
