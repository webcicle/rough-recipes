import { Container, Spinner } from './styles/spinner';

export default function SpinnerContainer() {
	return (
		<Container>
			<Spinner
				src='https://rough-recipes-media.s3.amazonaws.com/spinner-rough-recipes.png'
				alt='spinner-img'
			/>
		</Container>
	);
}
