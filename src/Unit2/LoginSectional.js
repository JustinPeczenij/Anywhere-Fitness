import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import { baseURL } from '../Unit3/utils/baseURL';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
  username: '',
  password: '',
}

export default function Login(props) {
  const [formValues, setFormValues] = useState(initialFormValues)
  const history = useHistory()
  //Functions Input Interactivity:
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }
  
  const submitForm = () => {
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
