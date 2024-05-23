export async function GET() {
    const domain = 'mail.webzenith.tech';
    const urls: {
        loc: string
        changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
        prority: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1
    }[] = [{
        loc: '/',
        changeFreq: 'daily',
        prority: 1
    }, {
        loc: '/privacy',
        changeFreq: 'monthly',
        prority: 0.5
    }, {
        loc: '/terms',
        changeFreq: 'monthly',
        prority: 0.5

    }, {
        loc: '/auth',
        changeFreq: 'monthly',
        prority: 0.5
    }]
    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >

        ${urls.map((url) => {
        return `<url>
                <loc>https://${domain}${url.loc}</loc>
                <changefreq>${url.changeFreq}</changefreq>
                <priority>${url.prority}</priority>
            </url>`

    }).join('\n')}
        </urlset>`.trim();

    return new Response(sitemap, { headers: { 'Content-Type': 'application/xml' } });
}
