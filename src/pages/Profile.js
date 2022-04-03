import ContentContainer from '../containers/content';
import Profile from '../components/profile';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logoutUser } from '../features/auth/authSlice';
import { HOME } from '../constants/routes';

export default function ProfilePage() {
	const [editEmail, setEditEmail] = useState(false);
	const [editPassword, setEditPassword] = useState(false);
	const [inputData, setInputData] = useState('');
	const user = useSelector((state) => state.auth);
	const { username, email } = user.user;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const changeEmail = () => {
		console.log('Changed email');
		setEditEmail(false);
		setEditPassword(false);
	};

	const changePassword = () => {
		console.log('Changed password');
		setEditEmail(false);
		setEditPassword(false);
	};

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
		navigate(HOME);
	};

	return (
		<>
			<ContentContainer direction='up'>
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
								<Profile.DetailValue>{username}</Profile.DetailValue>
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
								<Profile.DetailValue>{email}</Profile.DetailValue>
							</Profile.Detail>
						)}
					</Profile.Details>
					<Profile.Edits>
						{!editPassword && (
							<Profile.EditButton
								name='email'
								onClick={editEmail ? changeEmail : setEdit}>
								Change email address
							</Profile.EditButton>
						)}
						{!editEmail && (
							<Profile.EditButton
								name='password'
								onClick={editPassword ? changePassword : setEdit}>
								Change password
							</Profile.EditButton>
						)}
						<Profile.EditButton name='logout' onClick={logout}>
							Logout
						</Profile.EditButton>
					</Profile.Edits>
				</Profile>
			</ContentContainer>
		</>
	);
}
