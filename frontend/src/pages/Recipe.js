import axios from 'axios';
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContentContainer, SidebarContainer } from '../containers';
import styled from 'styled-components/macro';
import { DESKTOP_WIDTH } from '../constants/screen-sizes';
import {
	AppearsIn,
	StatusBar,
	Favourites,
	Recipe,
	TipsAndTricks,
	GroceryList,
	Share,
	Instructions,
	RecipeFacts,
	Comments,
	Profile,
} from '../components';
import {
	FacebookShareButton,
	TwitterShareButton,
	TelegramShareButton,
	EmailShareButton,
	FacebookIcon,
	TwitterIcon,
	TelegramIcon,
	EmailIcon,
} from 'react-share';
import useRecipe from '../hooks/useRecipe';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../features/auth/authSlice';
import { LOGIN } from '../constants/routes';
import { toast } from 'react-toastify';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SpinnerContainer from '../components/spinner';

const GridContainer = styled.div`
	@media (min-width: ${DESKTOP_WIDTH - 50}px) {
		display: grid;
		column-gap: 1.5rem;
		grid-template-columns: 15% 1fr 10%;
		max-width: 1100px;
		grid-template-rows: repeat(3, fit-content);
		row-gap: 1.5rem;
		margin-inline: auto;
		grid-template-areas: 'a b c' 'a e c' 'a f c' 'g g g';
	}

	@media (min-width: ${DESKTOP_WIDTH + 200}px) {
		grid-template-columns: 18% 1fr 18%;
		max-width: 1300px;
	}
`;

export default function RecipePage(props) {
	const { id } = useParams();
	const state = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const user = state.user;
	const API_URL = `/api/recipes/${id}/`;
	const [recipeData, setRecipeData] = useState({});
	const [tipsTab, setTipsTab] = useState('left');

	const dispatch = useDispatch();
	const token = user && JSON.parse(localStorage.getItem('user')).token;
	const commentsRef = useRef();
	const commentsBoxRef = useRef();

	const {
		_id,
		appearsIn,
		fullTitle,
		subtitle,
		author,
		image,
		slug,
		synopsis,
		createdAt,
		updatedAt,
		category,
		tips1,
		tips2,
		ingredients,
		instructions,
		facts,
		wordCount,
		comments,
		favourites,
	} = recipeData;

	const favouritedByUser = user?.favourites && user.favourites.includes(_id);

	const {
		createAppearsInArr,
		createIngredientsArr,
		createSynopsisArr,
		createTipsArr1,
		createTipsArr2,
	} = useRecipe();

	const [newComment, setNewComment] = useState({
		user: user.username,
		comment: '',
	});

	const fetchData = async () => {
		const response = await axios.get(API_URL);
		setRecipeData(response.data);
	};

	const handleFavourite = async () => {
		if (!user) {
			navigate(LOGIN);
			toast('You need to be logged in to favourite a recipe');
			return;
		}

		if (user?.favourites?.includes(_id)) {
			try {
				const response = await axios.put(API_URL + 'unlikeRecipe');
				setRecipeData(response.data);

				const removedFav = await user.favourites.filter((fav) => fav !== _id);

				dispatch(editUser({ favourites: removedFav, token }));
				return;
			} catch (error) {
				throw new Error('Error unliking the post');
			}
		} else {
			try {
				const response = await axios.put(API_URL + 'likeRecipe');
				setRecipeData(response.data);
				const addedFav = user?.favourites && [...user.favourites, _id];

				const dispatchProps = { favourites: addedFav, token };

				dispatch(editUser(dispatchProps));

				return;
			} catch (error) {
				throw new Error('Error liking the post');
			}
		}
	};

	const commentChange = ({ target }) => {
		setNewComment((prev) => ({ ...prev, comment: target.value }));
	};

	const scrollToBottom = () => {
		commentsRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
		commentsBoxRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
	};

	const handleComment = async () => {
		const newRecipe = await axios.put(API_URL, newComment);
		setNewComment({
			user: user.username,
			comment: '',
		});
		fetchData();
	};

	useEffect(() => {
		fetchData();
	}, []);

	const [renderCounts, setRenderCounts] = useState(0);

	useLayoutEffect(() => {
		if (renderCounts < 2) {
			setRenderCounts((prev) => prev + 1);
			scrollToBottom();
			window.scrollTo(0, 0);
			return;
		}
		scrollToBottom();
	}, [recipeData.comments]);

	const statusProps = { author, createdAt, updatedAt, category, wordCount };

	const ingredientsArr = ingredients && createIngredientsArr(ingredients);
	const ingredientsArr1 =
		ingredientsArr &&
		ingredientsArr.slice(0, Math.ceil(ingredientsArr.length / 2));
	const ingredientsArr2 =
		ingredientsArr &&
		ingredientsArr.slice(Math.ceil(ingredientsArr.length / 2));

	const tips1Arr = tips1 && createTipsArr1(tips1);
	const tips2Arr = tips2 && createTipsArr2(tips2);

	const shareTitle = fullTitle + ' Gorcery List';

	return (
		<GridContainer>
			{recipeData ? (
				<>
					<ContentContainer order='1' area='b' direction='up'>
						<Recipe>
							<AppearsIn>
								<AppearsIn.Column>
									<AppearsIn.Title>AppearsIn: </AppearsIn.Title>
									<AppearsIn.TagsContainer>
										{appearsIn && createAppearsInArr(appearsIn)}
									</AppearsIn.TagsContainer>
								</AppearsIn.Column>
								<AppearsIn.Column>
									<Favourites>
										<Favourites.Button onClick={handleFavourite}>
											<Favourites.Icon
												icon={
													favouritedByUser
														? '/images/icons/like-heart.png'
														: '/images/icons/unlike-heart.png'
												}
											/>
											<Favourites.Text>
												You {favouritedByUser ? 'have' : "haven't"} favourited
												this
											</Favourites.Text>
										</Favourites.Button>
										{favourites > 0 && (
											<Favourites.Text className='last'>
												{favourites === 1
													? `${favourites} person has favourited this recipe`
													: `${favourites} people have favourited this recipe`}
											</Favourites.Text>
										)}
									</Favourites>
								</AppearsIn.Column>
							</AppearsIn>
							<Recipe.Title>{fullTitle}</Recipe.Title>
							<Recipe.Subtitle>{subtitle}</Recipe.Subtitle>
							<StatusBar shortBar='false' statusProps={statusProps} />
							<Recipe.MainContent>
								<Recipe.Image src={image} alt={slug} />
								<Recipe.SynopsisContainer>
									{synopsis && createSynopsisArr(synopsis)}
								</Recipe.SynopsisContainer>
							</Recipe.MainContent>
							<TipsAndTricks>
								<TipsAndTricks.Header>
									<TipsAndTricks.Button
										active={tipsTab === 'left' ? true : false}
										onClick={() => setTipsTab('left')}>
										{tips1 && tips1.title}
									</TipsAndTricks.Button>
									<TipsAndTricks.Button
										active={tipsTab === 'right' ? true : false}
										onClick={() => setTipsTab('right')}>
										{tips2 && tips2.title}
									</TipsAndTricks.Button>
								</TipsAndTricks.Header>
								<TipsAndTricks.Content>
									{tipsTab === 'left' ? (
										<TipsAndTricks.List>{tips1Arr}</TipsAndTricks.List>
									) : (
										tips2Arr
									)}
								</TipsAndTricks.Content>
							</TipsAndTricks>
						</Recipe>
					</ContentContainer>
					<SidebarContainer
						direction={window.innerWidth < DESKTOP_WIDTH ? 'center' : 'left'}
						area='a'>
						<GroceryList>
							<GroceryList.Header>
								<GroceryList.Title>Gorcery List</GroceryList.Title>
								<Share>
									<FacebookShareButton
										url={window.location.href}
										quote={shareTitle}>
										<FacebookIcon />
									</FacebookShareButton>
									<TwitterShareButton
										url={window.location.href}
										title={shareTitle}>
										<TwitterIcon />
									</TwitterShareButton>
									<TelegramShareButton
										url={window.location.href}
										title={shareTitle}>
										<TelegramIcon />
									</TelegramShareButton>
									<EmailShareButton
										url={window.location.href}
										subject={shareTitle}>
										<EmailIcon />
									</EmailShareButton>
								</Share>
							</GroceryList.Header>
							<GroceryList.List>
								<GroceryList.Split>{ingredientsArr1}</GroceryList.Split>
								<GroceryList.Split>{ingredientsArr2}</GroceryList.Split>
							</GroceryList.List>
						</GroceryList>
					</SidebarContainer>
					<ContentContainer order='2' area='e' direction='center'>
						<ContentContainer.Title>Instructions</ContentContainer.Title>
						<Instructions instructions={instructions} />
						<ContentContainer.Title>Recipe facts</ContentContainer.Title>
						<RecipeFacts facts={facts} />
					</ContentContainer>
					<ContentContainer direction='center' area='f'>
						<ContentContainer.Title>Comments</ContentContainer.Title>
						<Comments>
							<Comments.List>
								{comments?.length > 0 ? (
									comments.map((comment, i) => {
										return <Comments.Comment comment={comment} key={i} />;
									})
								) : (
									<Comments.Text>No comments yet</Comments.Text>
								)}
								{!comments && (
									<Profile.SpinnerContainer>
										<Profile.Spinner>
											<FontAwesomeIcon icon={faSpinner} />
										</Profile.Spinner>
									</Profile.SpinnerContainer>
								)}
								<div className='end' ref={commentsRef} />
							</Comments.List>
							{user && (
								<Comments.Input
									value={newComment.comment}
									onChange={commentChange}
									placeholder='Tell us what you think about the recipe'
								/>
							)}
							<Comments.Footer>
								<Comments.Button onClick={handleComment}>
									Comment
								</Comments.Button>
							</Comments.Footer>
						</Comments>
						<div ref={commentsBoxRef} />
					</ContentContainer>
				</>
			) : (
				<SpinnerContainer />
			)}
			{window.innerWidth > DESKTOP_WIDTH && (
				<SidebarContainer area='c' direction='right' />
			)}
		</GridContainer>
	);
}
