<script>
	import '../app.pcss';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/bricolage-grotesque';
	import { Toaster } from '$lib/components/ui/sonner';
	import { ModeWatcher } from 'mode-watcher';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
	// @ts-ignore
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="ZenithMails | Send Automated Mails"
	description="Elevate your email game with Zenith Mails, the open-source email automation tool. Send personalized emails, automate campaigns, and track performance with ease."
	canonical="https://mailer.webzneith.tech/"
	keywords="email automation, webzenith, zenith mails, saas, email marketing, campaigns, open source, automated mails, analytics , email tracking, email performance, email campaigns, email automation tool, email automation software, email automation platform, email automation service, email automation system, email automation tool free, email automation tool open source, email automation tool for developers, email automation tool for marketers, email automation tool for business, email automation tool for startups, email automation tool for small business, email automation tool for saas, email automation tool for ecommerce, email automation tool for agencies, email automation tool for freelancers, email automation tool for bloggers, email automation tool for creators, email automation tool for content creators, email automation tool for digital marketers, email automation tool for growth hackers, email automation tool for product managers, email automation tool for sales, email automation tool for customer success, email automation tool for customer support, email automation tool for customer service, email automation tool for customer experience, email automation tool for customer engagement, email automation tool for customer retention, email automation tool for customer acquisition, email automation tool for customer onboarding, email automation tool for customer lifecycle, email automation tool for customer journey, email automation tool for customer relationship, email automation tool for customer communication, email automation tool for customer feedback, email automation tool for customer surveys, email automation tool for customer reviews, email automation tool for customer testimonials, email automation tool for customer referrals, email automation tool for customer loyalty, email automation tool for customer advocacy, email automation tool for customer experience management, email automation tool for customer relationship management, email automation tool for customer communication management, email automation tool for customer feedback management, email automation tool for customer surveys management, email automation tool for customer reviews management, email automation tool for customer testimonials management, email automation tool for customer referrals management, email automation tool for customer loyalty management, email automation tool for customer advocacy management, email automation tool for customer experience management, email automation tool for customer relationship management, email automation tool for customer communication management, email automation tool for customer feedback management, email automation tool for customer surveys management, email automation tool for customer reviews management, email automation tool for customer testimonials management, email automation tool for customer referrals management, email automation tool for customer loyalty management, email automation tool for customer advocacy management, email automation tool for customer experience management, email automation tool for customer relationship management, email automation tool for customer communication management, email automation tool for customer feedback management, email automation tool for customer surveys management, email automation tool for customer reviews management, email automation tool for customer testimonials management, email automation tool for customer referrals management"
	twitter={{
		card: 'summary_large_image',
		site: '@webzenith99406',
		creator: '@webzenith99406',
		title: 'ZenithMails | Send Automated Mails',
		description:
			'Elevate your email game with Zenith Mails, the open-source email automation tool. Send personalized emails, automate campaigns, and track performance with ease.',
		image: 'https://mailer.webzenith.tech/opengraph.png',
		url: 'https://mailer.webzneith.tech/'
	}}
	openGraph={{
		title: 'ZenithMails | Send Automated Mails',
		applicationName: 'ZenithMails',
		canonical: 'https://mailer.webzneith.tech/',
		description:
			'Elevate your email game with Zenith Mails, the open-source email automation tool. Send personalized emails, automate campaigns, and track performance with ease.',
		image: 'https://mailer.webzenith.tech/opengraph.png',
		url: 'https://mailer.webzneith.tech/',
		type: 'website',

		images: [
			{
				url: 'https://mailer.webzenith.tech/opengraph.png',
				width: 800,
				height: 600,
				alt: 'OpenGraph'
			}
		],
		site_name: 'ZenithMails',
		locale: 'en_US'
	}}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'ZenithMails | Send Automated Mails',
		description:
			'Elevate your email game with Zenith Mails, the open-source email automation tool. Send personalized emails, automate campaigns, and track performance with ease.',
		url: 'https://mailer.webzneith.tech/'
	}}
/>
<main class="font-bricolage">
	<slot />
</main>
<Toaster />
<ModeWatcher defaultMode="light" />
