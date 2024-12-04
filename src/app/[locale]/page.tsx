import React from 'react';

// Importing necessary components and resources
import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';
import { Posts } from '@/components/blog/Posts';
import { Mailchimp } from '@/components';
import { baseURL, routes, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { contact } from "@/app/resources/content";

// Function to generate metadata
export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslations();
	const { home, contact = { display: true, title: '', description: '', email: '', phone: '' } } = renderContent(t);

	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

// Home Component
export default function Home({ params: { locale } }) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person, contact = { display: true, title: '', description: '', email: '', phone: '' } } = renderContent(t);

	// Skills Data
	const skills = [
		{ name: 'Laravel', icon: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg' },
		{ name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/480px-HTML5_logo_and_wordmark.svg.png' },
		{ name: 'CSS', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
		{ name: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
		{ name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
		{ name: 'MySQL', icon: 'https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png' },
		{ name: 'Node.js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
		{ name: 'PHP', icon: 'https://pngimg.com/uploads/php/php_PNG26.png' },
		{ name: 'Microsoft Word', icon: 'https://logohistory.net/wp-content/uploads/2023/05/Microsoft-Word-Logo.svg' },
		{ name: 'Excel', icon: 'https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg' },
		{ name: 'C#', icon: 'https://cdn.worldvectorlogo.com/logos/c--4.svg' },
		{ name: 'C++', icon: 'https://cdn.worldvectorlogo.com/logos/c.svg' },
		{ name: 'Photoshop', icon: 'https://logos-world.net/wp-content/uploads/2020/11/Adobe-Photoshop-Logo-2013-2015.png' },
		{ name: 'Canva', icon: 'https://cdn.worldvectorlogo.com/logos/canva-1.svg' },
	];

	return (
		<Flex maxWidth="m" fillWidth gap="xl" direction="column" alignItems="center">
			{/* Structured Data */}
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>

			{/* Home Section */}
			<Flex fillWidth direction="column" paddingY="l" gap="m">
				<Flex direction="column" fillWidth maxWidth="s" gap="m">
					<RevealFx translateY="4">
						<Heading wrap="balance" variant="display-strong-l">
							{home.headline}
						</Heading>
					</RevealFx>
					<RevealFx translateY="8" delay={0.2}>
						<Flex fillWidth>
							<Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
								{home.subline}
							</Text>
						</Flex>
					</RevealFx>
					<RevealFx translateY="12" delay={0.4}>
						<Flex fillWidth>
							<Button
								id="about"
								data-border="rounded"
								href={`/${locale}/about`}
								variant="tertiary"
								size="m"
							>
								<Flex gap="8" alignItems="center">
									{about.avatar.display && (
										<Avatar
											style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }}
											src={person.avatar}
											size="m"
										/>
									)}
									{t('about.title')}
									<Arrow trigger="#about" />
								</Flex>
							</Button>
						</Flex>
					</RevealFx>
				</Flex>
			</Flex>

			{/* Projects Section */}
			<RevealFx translateY="16" delay={0.6}>
				<Projects range={[1, 1]} locale={locale} />
			</RevealFx>
			<Projects range={[2]} locale={locale} />

			{/* Skills Section */}
			<Flex fillWidth direction="column" paddingY="l" gap="m" alignItems="center">
				<Heading as="h2" variant="display-strong-xs" wrap="balance">
					Skills
				</Heading>
				<Flex wrap="wrap" justifyContent="center" gap="l">
					{skills.map((skill, index) => (
						<Flex
							key={index}
							direction="column"
							alignItems="center"
							padding="m"
							style={{
								backgroundColor: '#161640',
								borderRadius: '8px',
								boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
								width: '120px',
								textAlign: 'center',
							}}
						>
							<img
								src={skill.icon}
								alt={`${skill.name} icon`}
								style={{
									width: '60px',
									height: '60px',
									marginBottom: '10px',
								}}
							/>
							<Text
								style={{
									color: '#ffffff',
									fontSize: '14px',
									fontWeight: 'bold',
								}}
							>
								{skill.name}
							</Text>
						</Flex>
					))}
				</Flex>
			</Flex>

			{/* Contact Section */}
			{contact.display && (
				<div>
					<h2>{contact.title}</h2>
					<p>{contact.description}</p>
					<p>Email: <a href="mailto:kousarnafeesa6@gmail.com">kousarnafeesa6@gmail.com</a></p>

					{contact.phone && <p>Phone: {contact.phone}</p>}
				</div>
			)}
		</Flex>
	);
}
