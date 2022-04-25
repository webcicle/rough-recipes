import { ContentContainer } from '../containers';
import { Latest } from '../components';
import RecipeCard from '../components/recipe-card';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../constants/screen-sizes';
import { ALL_RECIPES } from '../constants/routes';
import { useSelector } from 'react-redux';

function Home() {
	let { latest } = useSelector((state) => state.latest);
	let latestShort;
	const isTablet =
		window.innerWidth > TABLET_WIDTH && window.innerWidth < DESKTOP_WIDTH;
	if (latest && isTablet) {
		latestShort = [...latest];
		latestShort.length = 3;
		latest = latestShort;
	}

	// const [latest, setLatest] = useState(store.getState().latest.latest);
	const API_URL = '/api/recipes/latest';

	// const getRecipes = async () => {
	// 	try {
	// 		const response = await axios.get(API_URL);
	// 		const data = response.data.data;
	// 		if (
	// 			window.innerWidth > TABLET_WIDTH &&
	// 			window.innerWidth < DESKTOP_WIDTH
	// 		) {
	// 			data.length = 3;
	// 		}
	// 		setLatestRecipes(data);
	// 	} catch (error) {
	// 		throw new Error('No such data available');
	// 	}
	// };

	// useEffect(() => {
	// 	// getRecipes();
	// 	dispatch(latestRecipes());
	// }, [latest.isSuccess]);

	return (
		<ContentContainer direction='up'>
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
		</ContentContainer>
	);
}

export default Home;
