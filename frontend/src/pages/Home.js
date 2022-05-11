import { ContentContainer } from '../containers';
import { Latest, Spinner } from '../components';
import RecipeCard from '../components/recipe-card';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../constants/screen-sizes';
import { ALL_RECIPES } from '../constants/routes';
import { useSelector } from 'react-redux';

function Home() {
	let { latest, isLoading } = useSelector((state) => state.latest);
	let latestShort;
	const isTablet =
		window.innerWidth > TABLET_WIDTH && window.innerWidth < DESKTOP_WIDTH;

	if (latest && isTablet) {
		latestShort = [...latest];
		latestShort.length = 4;
		latest = latestShort;
	}

	return (
		<>
			<ContentContainer
				direction='up'
				minHeight
				maxWidth={`${DESKTOP_WIDTH + 200}`}>
				{isLoading && !latest ? (
					<Spinner />
				) : (
					<Latest.Container>
						<Latest.Title>Latest recipes</Latest.Title>
						<Latest.Grid>
							{latest &&
								latest.map((recipe) => {
									return <RecipeCard key={recipe._id} recipe={recipe} />;
								})}
						</Latest.Grid>
						<Latest.Link to={ALL_RECIPES}>explore all</Latest.Link>
					</Latest.Container>
				)}
			</ContentContainer>
		</>
	);
}

export default Home;
