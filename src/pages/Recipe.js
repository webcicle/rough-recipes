import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentContainer from '../containers/content';
import { SidebarContainer } from '../containers';
import styled from 'styled-components/macro';
import { DESKTOP_WIDTH } from '../constants/screen-sizes';
import { AppearsIn, StatusBar, Recipe, TipsAndTricks } from '../components';

const GridContainer = styled.div`
	@media (min-width: ${DESKTOP_WIDTH - 100}px) {
		display: grid;
		column-gap: 1.5rem;
		grid-template-columns: 15% 1fr 15%;
		max-width: ${DESKTOP_WIDTH}px;
		margin-inline: auto;
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
	} = recipeData;

	const statusProps = { author, createdAt, updatedAt, category };

	const appearsInArr =
		appearsIn &&
		appearsIn.map((tag, index) => {
			return <AppearsIn.Tag key={index}>{tag}</AppearsIn.Tag>;
		});

	const synopsisArr =
		synopsis &&
		synopsis.map((par) => {
			return <Recipe.Synopsis>{par}</Recipe.Synopsis>;
		});

	const tips1Arr = tips1
		? tips1.content.map((tip) => {
				return <li>{tip}</li>;
		  })
		: null;

	const tips2Arr = tips2
		? tips2.content.map((tip) => {
				return <p>{tip}</p>;
		  })
		: null;

	return (
		<GridContainer>
			{window.innerWidth > DESKTOP_WIDTH && (
				<SidebarContainer direction='left' />
			)}
			<ContentContainer direction='up'>
				<Recipe>
					<AppearsIn>
						<AppearsIn.Title>AppearsIn: </AppearsIn.Title>
						<AppearsIn.TagsContainer>{appearsInArr}</AppearsIn.TagsContainer>
					</AppearsIn>
					<Recipe.Title>{title}</Recipe.Title>
					<Recipe.Subtitle>{subtitle}</Recipe.Subtitle>
					<StatusBar shortBar='false' statusProps={statusProps} />
					<Recipe.MainContent>
						<Recipe.Image src={image} alt={slug} />
						<Recipe.SynopsisContainer>{synopsisArr}</Recipe.SynopsisContainer>
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
			{window.innerWidth > DESKTOP_WIDTH && (
				<SidebarContainer direction='right' />
			)}
		</GridContainer>
	);
}
