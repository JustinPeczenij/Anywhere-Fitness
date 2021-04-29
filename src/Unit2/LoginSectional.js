import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import { baseURL } from '../Unit3/utils/baseURL';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../Unit3/utils/axiosWithAuth';

const initialFormValues = {
  role: '',
  password: '',
  username: '',
};

export default function Login() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const history = useHistory();
  //Functions Input Interactivity:
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }
  const submitForm = () => {
    //PREVENT EMPTY SUBMISSIONS:
    if (!formValues.username  || !formValues.role) return

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
        console.log(res)
        setFormValues(initialFormValues);
				localStorage.setItem('token', res.data.access_token);
			})
      .then(res => {
        axiosWithAuth().get(`${baseURL}/users/getuserinfo`)
          .then(res => {
            console.log(res)
            window.localStorage.setItem('role', res.data.role)
            formValues.role === 'instructor' ? history.push('/manage') : history.push('/dashboard')
          })
      })
			.catch((err) => {
				setFormValues(initialFormValues);
			});
	};

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
