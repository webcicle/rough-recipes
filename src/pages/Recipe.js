import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentContainer from '../containers/content';
import { SidebarContainer } from '../containers';
import styled from 'styled-components/macro';
import { DESKTOP_WIDTH } from '../constants/screen-sizes';
import { AppearsIn, StatusBar, Recipe, TipsAndTricks } from '../components';

const GridContainer = styled.div`
	@media (min-width: ${DESKTOP_WIDTH}px) {
		display: grid;
		grid-template-columns: 15% 1fr 15%;
	}
`;

export default function RecipePage(props) {
	const { id } = useParams();
	const API_URL = `/api/recipes/${id}`;
	const [recipeData, setRecipeData] = useState({});

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
	} = recipeData;

	const statusProps = { author, createdAt, updatedAt, category };

	const appearsInArr =
		appearsIn &&
		appearsIn.map((tag) => {
			return <AppearsIn.Tag key={_id}>{tag}</AppearsIn.Tag>;
		});

	const synopsisArr =
		synopsis &&
		synopsis.map((par) => {
			return <Recipe.Synopsis>{par}</Recipe.Synopsis>;
		});

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
					<TipsAndTricks />
				</Recipe>
			</ContentContainer>
			{window.innerWidth > DESKTOP_WIDTH && (
				<SidebarContainer direction='right' />
			)}
		</GridContainer>
	);
}
