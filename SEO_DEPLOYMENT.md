# SEO deployment checklist for apratim.tech

## 1. Deploy through Vercel

Push the repository changes to the production branch connected to Vercel.

In **Vercel → Project → Settings → Build and Deployment**, confirm:

- Framework Preset: `Vite`
- Root Directory: repository root (`./`)
- Install Command: leave at the Vercel default, or use `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js Version: `22.x`

Do not add a catch-all rewrite to `/index.html`. The build now creates a
separate HTML document for every SEO route, and `vercel.json` enables clean,
extensionless URLs.

## 2. Configure the canonical domain

In **Vercel → Project → Settings → Domains**:

1. Keep both `www.apratim.tech` and `apratim.tech` attached to the project.
2. Use `www.apratim.tech` as the production domain.
3. Click **Edit** beside `apratim.tech`.
4. Set **Redirect to** `www.apratim.tech`.
5. Select a permanent redirect (`308`).

The canonical tags and sitemap use `https://www.apratim.tech`.

## 3. Verify the production deployment

Open each URL in a private browser window:

- https://www.apratim.tech/
- https://www.apratim.tech/about
- https://www.apratim.tech/projects
- https://www.apratim.tech/react-native-developer-kolkata
- https://www.apratim.tech/web-app-developer-kolkata
- https://www.apratim.tech/projects/sitemaster-react-native-case-study
- https://www.apratim.tech/projects/heshel-ai-mobile-app
- https://www.apratim.tech/projects/scaape-react-native-event-app
- https://www.apratim.tech/projects/predictive-crime-analysis
- https://www.apratim.tech/sitemap.xml
- https://www.apratim.tech/robots.txt
- https://www.apratim.tech/og.png

The first nine page URLs should return `200`. Old numeric project URLs should
return a permanent redirect:

- `/project/1`
- `/project/2`
- `/project/3`
- `/project/4`

Local build verification:

```bash
npm run build
npm run check:seo
```

## 4. Add Google Search Console

1. Open https://search.google.com/search-console/
2. Open the property selector and choose **Add property**.
3. Select **Domain**.
4. Enter only `apratim.tech` — no protocol and no `www`.
5. Google will provide a TXT DNS record.
6. Add that TXT record wherever the domain DNS is managed.
7. Return to Search Console and click **Verify**. DNS propagation can take time.

A Domain property covers HTTP, HTTPS, the apex domain, `www`, and any future
subdomains.

## 5. Submit the sitemap

In Search Console:

1. Open **Indexing → Sitemaps**.
2. In **Add a new sitemap**, enter `sitemap.xml`.
3. Click **Submit**.
4. Confirm the status becomes **Success**.

The submitted URL should be:

`https://www.apratim.tech/sitemap.xml`

## 6. Request initial indexing

Use the URL Inspection search box for these URLs, one at a time:

1. `https://www.apratim.tech/`
2. `https://www.apratim.tech/react-native-developer-kolkata`
3. `https://www.apratim.tech/web-app-developer-kolkata`
4. `https://www.apratim.tech/about`
5. `https://www.apratim.tech/projects`

For each URL:

1. Click **Test live URL**.
2. Confirm it says the URL is available to Google.
3. Open the page details and confirm crawling and indexing are allowed.
4. Click **Request indexing**.

The sitemap will handle discovery of the individual project pages. Indexing
requests are hints and do not guarantee ranking or immediate inclusion.

## 7. Check after Google recrawls

After several days, inspect the same pages and check:

- Google-selected canonical matches the declared `www.apratim.tech` URL.
- Page fetch is successful.
- Crawling is allowed.
- Indexing is allowed.
- The page is discovered through the submitted sitemap.

In **Performance → Search results**, monitor:

- Queries containing `Apratim Dutta`
- `React Native developer Kolkata`
- `mobile app developer Kolkata`
- `web developer Kolkata`
- `React developer Kolkata`
- `IIEST Shibpur developer`

Use impressions first. A query receiving impressions but few clicks may need a
better title and description. A relevant query with a position between roughly
8 and 30 is a good candidate for stronger on-page content and legitimate
external references.

## 8. Useful validation tools

- Google Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev/
- Google Search Console: https://search.google.com/search-console/
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

Test the homepage, both service pages, and one project case study in the Rich
Results Test. The `Person`, `WebSite`, `ProfilePage`, `Service`, and
`CreativeWork` data may help search engines understand the site even when a
specific rich-result display is not available.
