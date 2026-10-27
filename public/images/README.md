# Required photography

Drop files in this folder using exactly these names. The site detects them at build time and swaps out the placeholder automatically. No code change is needed. Use JPEG (or WebP), sRGB, long edge at least 2400px for full-bleed images.

Direction: architectural, landscape and texture. Muted, low-saturation, warm. No stock handshakes, no office laughter, no people looking at the camera except the portraits below.

| File | Used on | Shot |
| --- | --- | --- |
| `hero-kampala-dusk.jpg` | Home hero (full bleed, 16:9, darkened by the site) | Kampala skyline at dusk, wide, with space in the lower third for text |
| `founder-portrait.jpg` | Home, Founder (4:5 portrait) | Keith Harold Mugabi, natural light, neutral dark or stone background, dark clothing |
| `team/<slug>.jpg` | Leadership (4:5 portrait) | One per person; set `photo` in `/content/team.ts` to the filename |

Further shots recommended for later sections: Lake Victoria at first light; dressed stone or travertine detail; folded linen; aerial of freight or port logistics; farmland aerial.

Alt text for each image is set in the page that uses it.

Company logos go in `/public/logos/` and are referenced from `/content/portfolio.ts`. Partner logos are shown only when `logoApproved: true` in `/content/partners.ts`.
