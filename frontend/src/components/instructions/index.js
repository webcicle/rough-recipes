import { Container, Slide, Button, Inner } from './styles/instructions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faCircleChevronLeft,
	faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Instructions({ instructions, children, ...restProps }) {
	const [slideIndex, setSlideIndex] = useState(0);

	const incrementSlides = () => {
		if (slideIndex >= instructions.length - 1)
			return setSlideIndex(instructions.length - 1);
		setSlideIndex((prevIndex) => prevIndex + 1);
	};

	const decrementSlides = () => {
		if (slideIndex <= 0) return setSlideIndex(0);
		setSlideIndex((prevIndex) => prevIndex - 1);
	};

	const instructionsArr =
		instructions &&
		instructions.map((inst, index) => {
			return (
				<Slide key={index} id={index} slideIndex={slideIndex} {...restProps}>
					<div>
						<p className='number'>{index + 1 + '.'}</p>
						<p className='instruction'>{inst}</p>
					</div>
				</Slide>
			);
		});

	return (
		<>
			<Container {...restProps}>
				<Button onClick={decrementSlides} {...restProps}>
					<FontAwesomeIcon icon={faCircleChevronLeft} />
				</Button>
				<Button onClick={incrementSlides} {...restProps}>
					<FontAwesomeIcon icon={faCircleChevronRight} />
				</Button>
				<Inner>{instructionsArr}</Inner>
			</Container>
		</>
	);
}

Instructions.Inner = function InstructionsInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};
