import {
	Container,
	Title,
	Fact,
	FactsContainer,
	FactTitle,
	FactData,
	FactsImage,
} from './styles/recipe-facts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBowlFood } from '@fortawesome/free-solid-svg-icons';

export default function RecipeFacts({ facts, children, ...restProps }) {
	const { calories, protein, carbs, fat, activeTime, totalTime, servings } =
		facts ? facts : {};

	return (
		<Container {...restProps}>
			<Title>Nutritional facts (per 100g)</Title>
			<FactsContainer rows='1'>
				<Fact className='calories'>
					<FactTitle>Calories:</FactTitle>
					<FactData>{calories}kcal</FactData>
				</Fact>
				<Fact className='protein'>
					<FactTitle>Protein:</FactTitle>
					<FactData>{protein}g</FactData>
				</Fact>
				<Fact className='carbs'>
					<FactTitle>Carbohydrates:</FactTitle>
					<FactData>{carbs}g</FactData>
				</Fact>
				<Fact className='fat'>
					<FactTitle>Fat:</FactTitle>
					<FactData>{fat}g</FactData>
				</Fact>
			</FactsContainer>
			<Title>Recipe facts</Title>
			<FactsContainer rows='2'>
				<FactsImage className='clock'>
					<FontAwesomeIcon icon={faClock} />
				</FactsImage>
				<Fact className='time-active'>
					<FactTitle>Time active:</FactTitle>
					<FactData>{activeTime} min</FactData>
				</Fact>
				<Fact className='total-time'>
					<FactTitle>Total time:</FactTitle>
					<FactData>{totalTime} min</FactData>
				</Fact>
				<FactsImage className='bowl'>
					<FontAwesomeIcon icon={faBowlFood} />
				</FactsImage>
				<Fact className='servings'>
					<FactTitle>Servings:</FactTitle>
					<FactData>{servings}</FactData>
				</Fact>
			</FactsContainer>
			{children}
		</Container>
	);
}
