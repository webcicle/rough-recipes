import { useEffect, useState } from 'react';
import axios from 'axios';
import {
	Recipes,
	PageSelector,
	Latest,
	PreviewCard,
	Spinner,
} from '../components';
import {
	ContentContainer,
	GridContainer,
	SidebarContainer,
} from '../containers';
import { useSearchParams } from 'react-router-dom';
import { DESKTOP_WIDTH } from '../constants/screen-sizes';
import * as ROUTES from '../constants/routes';
import { useSelector } from 'react-redux';
import { ALL_RECIPES } from '../constants/routes';

export default function AllRecipes() {
	const [searchParams, setSearchParams] = useSearchParams();

	let limit = 4;
	if (window.innerWidth > DESKTOP_WIDTH) {
		limit = limit + 2;
	}

	const [queryParams, setQueryParams] = useState({ page: 1, limit });

	const [totalPages, setTotalPages] = useState(null);
	const [recipes, setRecipes] = useState(null);

	const fetchRecipes = async () => {
		const FETCH_URL = `/api/recipes?page=${queryParams.page}&limit=${queryParams.limit}`;
		const response = await axios.get(FETCH_URL);
		setRecipes(response.data.results);
		setTotalPages(response.data.total);
	};

	useEffect(() => {
		setSearchParams(queryParams);
		fetchRecipes();
	}, [queryParams]);

	const incrementPageNumb = () => {
		if (queryParams.page < totalPages) {
			setQueryParams((prev) => ({ ...prev, page: prev.page + 1 }));
		}
		return;
	};

	const decrementPageNumb = () => {
		if (queryParams.page > 1) {
			setQueryParams((prev) => ({ ...prev, page: prev.page - 1 }));
		}
		return;
	};

	const createPageButtons = () => {
		let pageButtons = [];
		for (let i = 1; i <= totalPages; i++) {
			pageButtons.push(
				<PageSelector.PageSelectorNumb
					id={i}
					onClick={selectPage}
					key={i}
					page={queryParams.page}>
					{i}
				</PageSelector.PageSelectorNumb>
			);
		}
		return pageButtons;
	};

	const selectPage = (e) => {
		const { id } = e.target;
		setQueryParams((prev) => ({ ...prev, page: id }));
	};

	const pageButtons = totalPages && createPageButtons();

	let { latest } = useSelector((state) => state.latest);

	if (latest) {
		latest = [...latest];
		latest.length = 3;
	}

	return (
		<>
			<GridContainer>
				<ContentContainer minHeight='true' direction='up'>
					{!recipes ? (
						<Spinner />
					) : (
						<Recipes>
							<Recipes.MainTitle>All recipes</Recipes.MainTitle>
							<Recipes.Inner>
								{recipes &&
									recipes.map((recipe, index) => {
										const { image, slug, title, shortTitle } = recipe;
										return (
											<Recipes.Card
												key={index}
												src={image}
												alt={slug}
												title={title}
												shortTitle={shortTitle}
												recipeUrl={`${ROUTES.ALL_RECIPES}/${slug}`}
												articleUrl={`${ROUTES.ARTICLES}/${slug}`}
											/>
										);
									})}
							</Recipes.Inner>
						</Recipes>
					)}
					{totalPages > 1 && (
						<PageSelector pages={totalPages}>
							<PageSelector.PageSelectorDirection
								id='left'
								src={'/images/icons/chevron-left.png'}
								onClick={decrementPageNumb}
							/>
							<PageSelector.NumberButtons>
								{pageButtons ? pageButtons : null}
							</PageSelector.NumberButtons>
							<PageSelector.PageSelectorDirection
								id='right'
								src={'/images/icons/chevron-right.png'}
								onClick={incrementPageNumb}
							/>
						</PageSelector>
					)}
				</ContentContainer>
				<SidebarContainer columns={2} direction='right'>
					<Latest.Subtitle align='center'>latest recipes</Latest.Subtitle>
					<Latest.Container>
						{latest &&
							latest.map((rec) => {
								return (
									<PreviewCard
										key={rec._id}
										image={rec.image}
										title={rec.title}
										shortTitle={rec.shortTitle}
										slug={rec.slug}
										to={`${ALL_RECIPES}/${rec.slug}`}
									/>
								);
							})}
					</Latest.Container>
				</SidebarContainer>
			</GridContainer>
		</>
	);
}
