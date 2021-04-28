import React, { useState} from 'react';
import axios from 'axios';
<<<<<<< HEAD

import SignupForm from './SignupForm';

const initialFormValues = {
  role: '',
=======
import { useHistory } from 'react-router-dom';

import SignupForm from './SignupForm'
import { baseURL } from '../Unit3/utils/baseURL';

const initialFormValues = {
  role: '',
  primaryemail: '',
  username: '',
>>>>>>> 101f2749ab1352cd072e0ff6e44d887ee5687f7c
  password: '',
  primaryemail: '',
  username: '',
};

export default function Signup() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const history = useHistory();

  //Functions Input Interactivity:
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }

  //LOGIN FUNCTION
  const submitForm = () => {
    const newClient = {
<<<<<<< HEAD
=======
      primaryemail: formValues.primaryemail,
      username: formValues.username,
>>>>>>> 101f2749ab1352cd072e0ff6e44d887ee5687f7c
      password: formValues.password,
      primaryemail: formValues.primaryemail,
      username: formValues.username,
    }
    //Can't have empty role or else can't determine where to POST (instructor or client), 
    //NEEDS to be separate from newClient so object keys match Model (POST):
    const clientRole = {
      role: formValues.role,
    }


    //PREVENT EMPTY SUBMISSIONS:
<<<<<<< HEAD
    if (!newClient.username || !newClient.primaryemail || !newClient.password || !clientRole.role) return

    //LOGIN FUNCTIONALITY HERE (SHOULD PROBABLY WRAP AXIOS POST for signup):
        //Axios POSTS HERE ()
            if (clientRole.role === 'Instructor') {
              axios.post('https://team-32-anywhere-fitness.herokuapp.com/createnewinstructor', newClient)
                   .then(res => {
                      setFormValues(initialFormValues)
                   })
                   .catch(err => {
                      console.log(err);
                   })
            }
            else {
              axios.post('https://team-32-anywhere-fitness.herokuapp.com/createnewclient', newClient)
                   .then(res => {
                      setFormValues(initialFormValues)
                   })
                   .catch(err => {
                      console.log(err);
                   })
            }
=======
    // if (!newClient.username || !newClient.password || !newClient.primaryemail || !newClient.role) return



    //Axios POSTS HERE (should CLEAR form on successful submission...avoids multiple posts of same card):

    axios.post(`${baseURL}/createnew${formValues.role}`, newClient) 
      .then(res => {
        setFormValues(initialFormValues)
        window.localStorage.setItem('token', res.data.access_token)
        formValues.role === 'instructor' ? history.push('/manage') : history.push('/client')
      })
      .catch(err => {
        console.log(err);
      })
>>>>>>> 101f2749ab1352cd072e0ff6e44d887ee5687f7c
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
