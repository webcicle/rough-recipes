import { Policy } from '../components';
import { ContentContainer } from '../containers';

export default function PrivacyPolicyPage() {
	return (
		<>
			<ContentContainer minHeight direction='up'>
				<Policy>
					<Policy.Title>Privacy Policy</Policy.Title>
					<Policy.Paragraph>Last updated: 2022-05-08</Policy.Paragraph>
					<Policy.Paragraph>
						Rough Recipes ("us", "we", or "our") operates
						http://www.roughrecipes.com (the "Site"). This page informs you of
						our policies regarding the collection, use, and disclosure of
						Personal Information we receive from users of the Site.
					</Policy.Paragraph>
					<Policy.Paragraph>
						We use your Personal Information only for providing and improving
						the Site. By using the Site, you agree to the collection and use of
						information in accordance with this policy.
					</Policy.Paragraph>
					<Policy.SmallTitle>Information Collection And Use</Policy.SmallTitle>
					<Policy.Paragraph>
						While using our Site, we may ask you to provide us with certain
						personally identifiable information that can be used to contact or
						identify you. Personally identifiable information may include, but
						is not limited to your email and name ("Personal Information").
					</Policy.Paragraph>
					<Policy.SmallTitle>Communications</Policy.SmallTitle>
					<Policy.Paragraph>
						We may use your Personal Information to contact you with
						newsletters, marketing or promotional materials, and other
						information that concerns the continued development of the Site.{' '}
					</Policy.Paragraph>
					<Policy.SmallTitle>Cookies</Policy.SmallTitle>
					<Policy.Paragraph>
						Cookies are files with small amount of data, which may include an
						anonymous unique identifier. Cookies are sent to your browser from a
						web site and stored on your computer's hard drive.
					</Policy.Paragraph>
					<Policy.Paragraph>
						Like many sites, we use "cookies" to collect information. You can
						instruct your browser to refuse all cookies or to indicate when a
						cookie is being sent. However, if you do not accept cookies, you may
						not be able to use some portions of our Site.
					</Policy.Paragraph>
					<Policy.SmallTitle>Security</Policy.SmallTitle>
					<Policy.Paragraph>
						The security of your Personal Information is important to us, but
						remember that no method of transmission over the Internet, or method
						of electronic storage, is 100% secure. While we strive to use
						commercially acceptable means to protect your Personal Information,
						we cannot guarantee its absolute security.
					</Policy.Paragraph>
					<Policy.SmallTitle>Changes To This Privacy Policy</Policy.SmallTitle>
					<Policy.Paragraph>
						This Privacy Policy is effective as of 2022-05-08 and will remain in
						effect except with respect to any changes in its provisions in the
						future, which will be in effect immediately after being posted on
						this page.
					</Policy.Paragraph>
					<Policy.Paragraph>
						We reserve the right to update or change our Privacy Policy at any
						time and you should check this Privacy Policy periodically. Your
						continued use of the Service after we post any modifications to the
						Privacy Policy on this page will constitute your acknowledgment of
						the modifications and your consent to abide and be bound by the
						modified Privacy Policy.
					</Policy.Paragraph>
					<Policy.Paragraph>
						If we make any material changes to this Privacy Policy, we will
						notify you either through the email address you have provided us or
						by placing a prominent notice on our website.
					</Policy.Paragraph>
					<Policy.SmallTitle>Contact Us</Policy.SmallTitle>
					<Policy.Paragraph>
						If you have any questions about this Privacy Policy, please contact
						us.
					</Policy.Paragraph>
				</Policy>
			</ContentContainer>
		</>
	);
}
