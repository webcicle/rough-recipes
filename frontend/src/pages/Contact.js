import { ContentContainer } from '../containers';
import { Contact, Profile } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { sendEmail, reset } from '../features/email/emailSlice';

export default function ContactPage() {
	const { user } = useSelector((state) => state.auth);
	const [messageObj, setMessageObj] = useState({
		from: user?.email,
		username: user?.username,
		text: '',
	});

	const { isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.email
	);

	useEffect(() => {
		if (isSuccess) {
			toast('Message successfully sent');
			setMessageObj({
				from: user?.email,
				username: user?.username,
				text: '',
			});
		}

		if (isError) {
			toast.error(message);
		}

		dispatch(reset());
	}, [user, isLoading, isError, isSuccess]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = ({ target }) => {
		setMessageObj((prev) => ({ ...prev, text: target.value }));
	};

	return (
		<>
			<ContentContainer minHeight direction='up'>
				<Contact>
					<Contact.Title>contact us</Contact.Title>
					{user ? (
						<>
							<Contact.Text small>
								Send us a message and tell us what you think. If you are
								reporting a bug, please include as much information as possible
								about your account, browser, and internet connection.
							</Contact.Text>
							<Contact.Text>From: {user.email}</Contact.Text>
							<Contact.Input
								onChange={handleChange}
								placeholder='Enter your message here'
								value={messageObj.text}></Contact.Input>
							<Contact.Footer>
								{isLoading ? (
									<Profile.Spinner />
								) : (
									<Contact.Button
										onClick={() => dispatch(sendEmail(messageObj))}>
										Send
									</Contact.Button>
								)}
							</Contact.Footer>
						</>
					) : (
						<Contact.Text>Login to send a message</Contact.Text>
					)}
				</Contact>
			</ContentContainer>
		</>
	);
}
