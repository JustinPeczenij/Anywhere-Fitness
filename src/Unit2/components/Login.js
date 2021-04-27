import axios from 'axios';
import { baseURL } from '../../Unit3/utils/baseURL';
import { useState } from 'react';

const initialLogin = { username: '', password: '', role: '' };

function Login(props) {
	const [credentials, setCredentials] = useState(initialLogin);
	const change = (event) => {
		const { name, value } = event.target;
		setCredentials({
			...credentials,
			[name]: value,
		});
	};

	const login = (e) => {
		e.preventDefault();
		axios.post(
				`${baseURL}/login`,
				`grant_type=password&username=${credentials.username}&password=${credentials.password}`,
				{
					headers: { // btoa is converting our client id/client secret into base64
						Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
						'Content-Type': 'application/x-www-form-urlencoded',
					}
				,}
			,)
			.then((res) => {
				console.log(res)
				localStorage.setItem('token', res.data.access_token);
				props.history.push('/manage');
			})
			.catch((err) => {
				setCredentials(initialLogin);
			});
	};

	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
			<h1>Login</h1>
			<form onSubmit={login}>
				<input
					name='username'
					type='text'
					value={credentials.username}
					onChange={change}
					placeholder='Username'
				/>
				<input
					name='password'
					type='password'
					value={credentials.password}
					onChange={change}
					placeholder='Password'
				/>
				<select name='role' value={credentials.role} onChange={change}>
					<option value='client'>Client</option>
					<option value='instructor'>Instructor</option>
				</select>
				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;