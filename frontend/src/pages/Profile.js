import ContentContainer from '../containers/content';
import { Profile, Spinner } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {
	logoutUser,
	getUserFavourites,
	getUser,
} from '../features/auth/authSlice';
import { HOME, LOGIN } from '../constants/routes';
import axios from 'axios';
import globalToastConfig from '../styles/globalToastConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProfilePage() {
	const [editEmail, setEditEmail] = useState(false);
	const [editPassword, setEditPassword] = useState(false);
	const [inputData, setInputData] = useState('');
	const { user, favouriteRecipes, isLoading } = useSelector(
		(state) => state.auth
	);

	const API_URL = '/api/users/me';

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const init = () => {
		setEditEmail(false);
		setEditPassword(false);
		setInputData('');
	};

	const token = user && JSON.parse(localStorage.getItem('user')).token;

	const axiosConfig = {
		headers: { Authorization: `Bearer ${token}` },
	};

	// console.log({ redux: user, LS: JSON.parse(localStorage.getItem('user')) });

	const changeEmail = async () => {
		try {
			await axios.put(API_URL, { email: inputData }, axiosConfig);
			window.location.reload(true);
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
			await axios.put(API_URL, { password: inputData }, axiosConfig);
			toast('Password updated', globalToastConfig);
		} catch (error) {
			toast.error('Cannot change password', globalToastConfig);
		}

		setInputData('');
		setEditEmail(false);
		setEditPassword(false);
	};

	useEffect(() => {
		if (user === null) {
			navigate(LOGIN);
			return;
		}
		const axiosProps = { ids: user.favourites, token };
		dispatch(getUserFavourites(axiosProps));
		dispatch(getUser(token));
	}, []);

	const handleChange = (e) => {
		const { value } = e.target;
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
			{!user ? (
				<Spinner />
			) : (
				<ContentContainer minHeight height='285px' direction='up'>
					{isLoading ? (
						<Profile.SpinnerContainer>
							<Profile.Spinner>
								<FontAwesomeIcon icon={faSpinner} />
							</Profile.Spinner>
						</Profile.SpinnerContainer>
					) : (
						<Profile justify={true}>
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
										<Profile.DetailValue>{user.username}</Profile.DetailValue>
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
										<Profile.DetailValue>{user.email}</Profile.DetailValue>
									</Profile.Detail>
								)}
							</Profile.Details>
							<Profile.Edits>
								{!editPassword && (
									<Profile.EditButton
										name='email'
										onClick={editEmail ? changeEmail : setEdit}>
										{!editEmail
											? 'Change email address'
											: 'Save new email address'}
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
					)}
					{favouriteRecipes ? (
						<Profile>
							<Profile.Title>favourited recipes</Profile.Title>
							<Profile.List>
								{favouriteRecipes.length > 0 ? (
									favouriteRecipes.map((fav, i) => (
										<Profile.ListItem key={i} recipe={fav}>
											{fav.fullTitle}
										</Profile.ListItem>
									))
								) : (
									<Profile.DetailTitle>
										You haven't favourited any recipes yet
									</Profile.DetailTitle>
								)}
							</Profile.List>
						</Profile>
					) : (
						<Profile.SpinnerContainer>
							<Profile.Spinner>
								<FontAwesomeIcon icon={faSpinner} />
							</Profile.Spinner>
						</Profile.SpinnerContainer>
					)}
				</ContentContainer>
			)}
		</>
	);
}
