<script>
	import '../app.pcss';
	import '@fontsource-variable/inter';
	import { Toaster } from '$lib/components/ui/sonner';
	import { ModeWatcher } from "mode-watcher";
	// @ts-ignore
	import SvelteSeo from "svelte-seo";
</script>
<SvelteSeo
  title="ZenithMails | Send Automated Mails"
  description="Elevate your email game with Zenith Mails, the open-source email automation tool. Send personalized emails, automate campaigns, and track performance with ease."
  canonical="https://mailer.webzneith.tech/"
  keywords="email automation, natural movement, squatting, lunging, crawling, jumping, fitness"
  openGraph={{
    title: "ZenithMails | Send Automated Mails",
    description:
      "Elevate your email game with Zenith Mails, the open-source email automation tool. Send personalized emails, automate campaigns, and track performance with ease.",
    image: "https://mailer.webzenith.tech/opengraph.jpg",
    url: "https://mailer.webzneith.tech/",
    type: "website",
    images: [
      {
        url: "https://mailer.webzenith.tech/opengraph.jpg",
        width: 800,
        height: 600,
        alt: "OpenGraph",
      },
    
    ],
    site_name: "ZenithMails",
  }}

/>
<slot class="font-inter" />
<Toaster />
<ModeWatcher defaultMode="dark" />
