import React, { useState} from 'react';
import axios from 'axios';

import SignupForm from './SignupForm';

const initialFormValues = {
  role: '',
  password: '',
  primaryemail: '',
  username: '',
};

export default function Signup() {
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
    //Can't have empty role or else can't determine where to POST (instructor or client), 
    //NEEDS to be separate from newClient so object keys match Model (POST):
    const clientRole = {
      role: formValues.role,
    }


    //PREVENT EMPTY SUBMISSIONS:
    if (!newClient.username || !newClient.primaryemail || !newClient.password || !clientRole.role) return

    //LOGIN FUNCTIONALITY HERE (SHOULD PROBABLY WRAP AXIOS POST for signup):
        //Axios POSTS HERE ()
            if (clientRole.Role === 'Instructor') {
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
