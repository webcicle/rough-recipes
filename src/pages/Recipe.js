import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContentContainer, SidebarContainer } from '../containers';
import styled from 'styled-components/macro';
import { DESKTOP_WIDTH } from '../constants/screen-sizes';
import {
	AppearsIn,
	StatusBar,
	Recipe,
	TipsAndTricks,
	GroceryList,
	Share,
	Instructions,
	RecipeFacts,
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

const GridContainer = styled.div`
	@media (min-width: ${DESKTOP_WIDTH - 50}px) {
		display: grid;
		column-gap: 1.5rem;
		grid-template-columns: 15% 1fr 10%;
		max-width: 1100px;
		grid-template-rows: repeat(3, fit-content);
		row-gap: 1.5rem;
		margin-inline: auto;
		grid-template-areas: 'a b c' 'a e c' 'f f f';
	}

	@media (min-width: ${DESKTOP_WIDTH + 200}px) {
		grid-template-columns: 18% 1fr 18%;
		max-width: 1300px;
	}
`;

export default function RecipePage(props) {
	const { id } = useParams();
	const API_URL = `/api/recipes/${id}`;
	const [recipeData, setRecipeData] = useState({});
	const [tipsTab, setTipsTab] = useState('left');

	const fetchData = async () => {
		const response = await axios.get(API_URL);
		setRecipeData(response.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const {
		_id,
		appearsIn,
		title,
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
	} = recipeData;

	const {
		createAppearsInArr,
		createIngredientsArr,
		createSynopsisArr,
		createTipsArr1,
		createTipsArr2,
	} = useRecipe();

	const statusProps = { author, createdAt, updatedAt, category };

	const ingredientsArr = ingredients && createIngredientsArr(ingredients);
	const ingredientsArr1 =
		ingredientsArr &&
		ingredientsArr.slice(0, Math.ceil(ingredientsArr.length / 2));
	const ingredientsArr2 =
		ingredientsArr &&
		ingredientsArr.slice(Math.ceil(ingredientsArr.length / 2));

	const tips1Arr = tips1 && createTipsArr1(tips1);
	const tips2Arr = tips2 && createTipsArr2(tips2);

	const shareTitle = title + ' Gorcery List';

	return (
		<GridContainer>
			<ContentContainer order='1' area='b' direction='up'>
				<Recipe>
					<AppearsIn>
						<AppearsIn.Title>AppearsIn: </AppearsIn.Title>
						<AppearsIn.TagsContainer>
							{appearsIn && createAppearsInArr(appearsIn)}
						</AppearsIn.TagsContainer>
					</AppearsIn>
					<Recipe.Title>{title}</Recipe.Title>
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
							<TwitterShareButton url={window.location.href} title={shareTitle}>
								<TwitterIcon />
							</TwitterShareButton>
							<TelegramShareButton
								url={window.location.href}
								title={shareTitle}>
								<TelegramIcon />
							</TelegramShareButton>
							<EmailShareButton url={window.location.href} subject={shareTitle}>
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
				<RecipeFacts facts={recipeData.facts} />
			</ContentContainer>
			{window.innerWidth > DESKTOP_WIDTH && (
				<SidebarContainer area='c' direction='right' />
			)}
		</GridContainer>
	);
}
