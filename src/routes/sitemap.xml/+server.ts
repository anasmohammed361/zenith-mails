export async function GET() {
    const domain = 'mail.webzenith.tech';
    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
            <url>
                <loc>https://${domain}/</loc>
            </url>
            <url>
                <loc>https://${domain}/auth</loc>
            </url>
            <url>
                <loc>https://${domain}/mail</loc>
            </url>
            <url>
                <loc>https://${domain}/privacy</loc>
            </url>
            <url>
                <loc>https://${domain}/profile</loc>
            </url>
        </urlset>`.trim();

    return new Response(sitemap, { headers: { 'Content-Type': 'application/xml' } });
}
