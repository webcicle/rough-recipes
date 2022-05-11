import { useEffect } from 'react';
import { Articles } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../constants/screen-sizes';
import { ARTICLES } from '../constants/routes';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../components';
import { ContentContainer } from '../containers';
import {
	allArticles,
	latestArticles,
	reset,
} from '../features/articles/articlesSlice';
import { toast } from 'react-toastify';

export default function ArticlesPage() {
	const letters = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
	];
	let width = 400;
	const isDesktop = window.innerWidth > DESKTOP_WIDTH;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { latest, articles, isError, isLoading, isSuccess, message } =
		useSelector((state) => state.articles);

	console.log(latest, articles, isLoading);

	useEffect(() => {
		dispatch(latestArticles());
	}, []);

	if (!isDesktop) {
		width = 800;
	}

	if (isLoading) {
		return (
			<ContentContainer minHeight direction='up'>
				<Spinner />
			</ContentContainer>
		);
	}

	return (
		<>
			<Articles>
				{latest &&
					latest.map((article, i) => {
						const { _id, thumbnail, slug, shortTitle, summary } = article;
						return (
							<Articles.ImageContainer className={letters[i]} key={_id}>
								<Articles.ImageKitImage
									path={thumbnail}
									transformation={[{ width }]}
									className={letters[i]}
									onClick={() => navigate(`${ARTICLES}/${slug}`)}
								/>
								<Articles.Overlay
									className='overlay'
									onClick={() => navigate(`${ARTICLES}/${slug}`)}>
									<Articles.OverlayTitle>{shortTitle}</Articles.OverlayTitle>
									<Articles.OverlayDescription>
										{summary}
									</Articles.OverlayDescription>
								</Articles.Overlay>
							</Articles.ImageContainer>
						);
					})}
			</Articles>
		</>
	);
}
