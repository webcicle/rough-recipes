import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentContainer from '../containers/content';
import { SidebarContainer } from '../containers';
import styled from 'styled-components/macro';
import { DESKTOP_WIDTH } from '../constants/screen-sizes';

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

	return (
		<GridContainer>
			{window.innerWidth > DESKTOP_WIDTH && (
				<SidebarContainer direction='left' />
			)}
			<ContentContainer direction='up'>RECIPE PAGE</ContentContainer>
			{window.innerWidth > DESKTOP_WIDTH && (
				<SidebarContainer direction='right' />
			)}
		</GridContainer>
	);
}
