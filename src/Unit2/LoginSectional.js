import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import { baseURL } from '../Unit3/utils/baseURL';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
<<<<<<< HEAD
=======
  username: '',
>>>>>>> 101f2749ab1352cd072e0ff6e44d887ee5687f7c
  password: '',
  primaryemail: '',
  username: '',
}

export default function Login() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const history = useHistory()
  //Functions Input Interactivity:
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }
  
  const submitForm = () => {
<<<<<<< HEAD
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
=======
    //PREVENT EMPTY SUBMISSIONS:
    // if (!formValues.username || !formValues.role) return

    axios.post(
				`${baseURL}/login`,
				`grant_type=password&username=${formValues.username}&password=${formValues.password}`,
				{
					headers: { // btoa is converting our client id/client secret into base64
						Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
						'Content-Type': 'application/x-www-form-urlencoded',
					}
				,}
			,)
			.then((res) => {
        setFormValues(initialFormValues);
				localStorage.setItem('token', res.data.access_token);
				history.push('/manage');
			})
			.catch((err) => {
				setFormValues(initialFormValues);
			});
	};
>>>>>>> 101f2749ab1352cd072e0ff6e44d887ee5687f7c

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
