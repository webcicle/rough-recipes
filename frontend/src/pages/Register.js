import { Form } from '../components';
import useForm from '../hooks/useForm';

function Register() {
	const { formData, formDataChange, handleRegister } = useForm();
	const { username, email, password, password2 } = formData;

	return (
		<Form.Container>
			<Form onSubmit={handleRegister}>
				<Form.Title>Register a new user</Form.Title>
				<Form.InputWrapper>
					<Form.InputTitle>username</Form.InputTitle>
					<Form.Input
						name='username'
						type='text'
						placeholder='Enter a username'
						onChange={formDataChange}
						value={username}
					/>
				</Form.InputWrapper>
				<Form.InputWrapper>
					<Form.InputTitle>email</Form.InputTitle>
					<Form.Input
						name='email'
						type='email'
						placeholder='Enter an email address'
						onChange={formDataChange}
						value={email}
					/>
				</Form.InputWrapper>
				<Form.InputWrapper>
					<Form.InputTitle>password</Form.InputTitle>
					<Form.Input
						name='password'
						type='password'
						placeholder='Enter a password'
						onChange={formDataChange}
						value={password}
					/>
				</Form.InputWrapper>
				<Form.InputWrapper>
					<Form.InputTitle>confirm password</Form.InputTitle>
					<Form.Input
						name='password2'
						type='password'
						placeholder='Confirm password'
						onChange={formDataChange}
						value={password2}
					/>
				</Form.InputWrapper>
				<Form.SubmitButton type='submit'>register</Form.SubmitButton>
			</Form>
		</Form.Container>
	);
}

export default Register;
