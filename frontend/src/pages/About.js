import { About } from '../components';
import { ContentContainer } from '../containers';

export default function AboutPage() {
	return (
		<>
			<ContentContainer minHeight direction='up'>
				<About>
					<About.Title>About Rough Recipes</About.Title>
					<About.Subtitle>
						A little bit about how this got started
					</About.Subtitle>
					<About.Paragraph>
						I made this for my portfolio to showcase my web development skills.
					</About.Paragraph>
					<About.Paragraph title='disclaimer'>
						Rough Recipes is a website containing satirical recipes made for
						demonstration purposes only. Do NOT attempt to recreate any of the
						recipes or techniques mentioned or it may lead to ruinied dinners,
						relationships, and possible bodily harm. Any and all attempts to
						recreate these recipes should be done under the supervision of
						medical staff and/or emergency personell.
					</About.Paragraph>
				</About>
			</ContentContainer>
		</>
	);
}
