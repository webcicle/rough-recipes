import { Form } from '../components';
import useForm from '../hooks/useForm';
import { REGISTER } from '../constants/routes';

function Login() {
	const { formData, formDataChange, handleLogin } = useForm();
	const { username, password } = formData;

	return (
		<Form.Container>
			<Form onSubmit={handleLogin}>
				<Form.Title>Log in</Form.Title>
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
					<Form.InputTitle>password</Form.InputTitle>
					<Form.Input
						name='password'
						type='password'
						placeholder='Enter a password'
						onChange={formDataChange}
						value={password}
					/>
				</Form.InputWrapper>
				<Form.Text>
					Don't have an account? Click <Form.Link to={REGISTER}>here</Form.Link>{' '}
					to register.
				</Form.Text>
				<Form.SubmitButton type='submit'>login</Form.SubmitButton>
			</Form>
		</Form.Container>
	);
}

export default Login;
