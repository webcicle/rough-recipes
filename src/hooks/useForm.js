import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser, reset } from '../features/auth/authSlice';
import * as ROUTES from '../constants/routes';
import { toast } from 'react-toastify';

export default function useForm() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
	});

	const { username, email, password, password2 } = formData;

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const formDataChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		if (isError) {
			console.log(message);
			toast.error(message);
			return;
		}
		if (isSuccess || user) {
			navigate(ROUTES.PROFILE);
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const handleRegister = (e) => {
		e.preventDefault();
		if (password === password2) {
			const userData = { username, email, password };
			dispatch(registerUser(userData));
		} else {
			toast.error("Passwords don't match");
		}
	};
	const handleLogin = (e) => {
		e.preventDefault();
		if (username && password) {
			const userData = { username, password };
			dispatch(loginUser(userData));
		} else {
			toast.error('Please enter your username and password to login');
		}
	};

	return { formData, formDataChange, handleRegister, handleLogin };
}
