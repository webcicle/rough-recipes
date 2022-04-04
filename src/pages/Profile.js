import ContentContainer from '../containers/content';
import Profile from '../components/profile';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { logoutUser } from '../features/auth/authSlice';
import { HOME } from '../constants/routes';
import axios from 'axios';
import globalToastConfig from '../styles/globalToastConfig';

export default function ProfilePage() {
	const [editEmail, setEditEmail] = useState(false);
	const [editPassword, setEditPassword] = useState(false);
	const [inputData, setInputData] = useState('');
	const [userData, setUserData] = useState({ email: '', username: '' });

	const API_URL = '/api/users/me';

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const init = () => {
		setEditEmail(false);
		setEditPassword(false);
		setInputData('');
	};

	const token = JSON.parse(localStorage.getItem('user')).token;

	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};

	const changeEmail = async () => {
		try {
			await axios.put(API_URL, { email: inputData }, config);
			toast('Email updated', globalToastConfig);
		} catch (error) {
			toast.error('Cannot change email', globalToastConfig);
		}
		setInputData('');
		setEditEmail(false);
		setEditPassword(false);
	};

	const changePassword = async () => {
		try {
			await axios.put(API_URL, { password: inputData }, config);
			toast('Password updated', globalToastConfig);
		} catch (error) {
			toast.error('Cannot change password', globalToastConfig);
		}

		setInputData('');
		setEditEmail(false);
		setEditPassword(false);
	};

	const getUser = async () => {
		const user = await axios.get(API_URL, config);
		setUserData(user.data);
	};

	useEffect(() => {
		getUser();
	}, [editEmail]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputData(value);
	};

	const setEdit = (e) => {
		const { name } = e.target;
		if (name == 'email') {
			setEditPassword(false);
			setEditEmail(true);
		} else if (name == 'password') {
			setEditPassword(true);
			setEditEmail(false);
		}
	};

	const logout = () => {
		dispatch(logoutUser());
		toast('User successfully logged out', globalToastConfig);
		navigate(HOME);
	};

	return (
		<>
			<ContentContainer height='285px' direction='up'>
				<Profile>
					<Profile.Title>Profile page</Profile.Title>
					<Profile.Details>
						{editPassword ? (
							<Profile.Input
								placeholder='Enter your new password'
								value={inputData}
								onChange={handleChange}
							/>
						) : (
							<Profile.Detail>
								<Profile.DetailTitle>username:</Profile.DetailTitle>
								<Profile.DetailValue>{userData.username}</Profile.DetailValue>
							</Profile.Detail>
						)}
						{editEmail ? (
							<Profile.Input
								placeholder='Enter your new email address'
								value={inputData}
								onChange={handleChange}
							/>
						) : (
							<Profile.Detail>
								<Profile.DetailTitle>email:</Profile.DetailTitle>
								<Profile.DetailValue>{userData.email}</Profile.DetailValue>
							</Profile.Detail>
						)}
					</Profile.Details>
					<Profile.Edits>
						{!editPassword && (
							<Profile.EditButton
								name='email'
								onClick={editEmail ? changeEmail : setEdit}>
								{!editEmail ? 'Change email address' : 'Save new email address'}
							</Profile.EditButton>
						)}
						{!editEmail && (
							<Profile.EditButton
								name='password'
								onClick={editPassword ? changePassword : setEdit}>
								{!editPassword ? 'Change password' : 'Save new password'}
							</Profile.EditButton>
						)}
						{!editEmail && !editPassword && (
							<Profile.EditButton name='logout' onClick={logout}>
								Logout
							</Profile.EditButton>
						)}
						{(editEmail || editPassword) && (
							<Profile.EditButton name='cancel' onClick={init}>
								Cancel
							</Profile.EditButton>
						)}
					</Profile.Edits>
				</Profile>
			</ContentContainer>
		</>
	);
}
