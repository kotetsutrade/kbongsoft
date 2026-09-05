# Kbong Pte. Ltd. — Corporate Website

A professional, dark-themed marketing website for **Kbong Pte. Ltd.**, a Singapore-based software development company that builds custom, order-on-demand software for business clients.

## Project Goal
Present Kbong Pte. Ltd. as a credible, established custom-software development firm — communicating its order-on-demand business model, service range, delivery process, and relevant experience — and drive visitors to send project inquiries to **kmk@kbongsoft.com**.

## Pages / Site Map (all static HTML, relative paths)
| Path | Purpose |
|---|---|
| `index.html` | Home — hero, value proposition, capability highlights, track record teaser, process teaser, Singapore location section, CTA |
| `services.html` | Full breakdown of 6 service lines: Custom Application Development, Business & Customer Management Systems, Workflow & Process Automation, Systems Integration & APIs, Cloud Infrastructure & DevOps, Legacy System Modernization (has in-page anchors `#custom-development`, `#business-systems`, `#automation`, `#cloud`) |
| `work.html` | Three anonymized case studies (professional services, retail/distribution, finance) framed as Challenge → Approach → Delivered → Result, plus a testimonial |
| `process.html` | 7-step delivery process (Requirements → Proposal/Architecture → Design → Development → QA/UAT → Deployment → Support) and 3 engagement models |
| `about.html` | Company mission, 4 core values, company facts (entity, business model, market focus, sectors served) |
| `contact.html` | Inquiry form (client-side, opens a pre-filled `mailto:kmk@kbongsoft.com`), contact info card, FAQ |

No staff/personnel bios or headcount references are included anywhere on the site, per project requirements.

## Content Strategy Note (CRM angle)
The site never names "CRM" directly. Instead, `work.html`, the "Track Record" section of `index.html`, and the "Business & Customer Management Systems" service on `services.html` describe prior experience building **customer/pipeline tracking, order management, and service-ticketing platforms** — establishing credible, adjacent experience for pipeline of an eventual CRM-type engagement without naming the category.

## Tech Stack
- Static HTML5 + Tailwind CSS (CDN) for utility styling
- Custom stylesheet: `css/style.css` (brand color tokens, card/button components, grid background, scroll-reveal styles)
- Vanilla JS: `js/main.js` (mobile nav toggle, header scroll shadow, IntersectionObserver scroll-reveal, contact form → mailto handoff, dynamic footer year)
- Font Awesome (CDN) for icons
- Google Fonts: Inter (body) + Space Grotesk (headings)
- Images: `images/` — royalty-free network/technology, Singapore skyline, coding, and office photos (sourced via licensed image search)

## Contact / Lead Capture
- All inquiries route to **kmk@kbongsoft.com**.
- The contact form on `contact.html` is a **static, client-side-only form** — since this is a static site with no backend, submitting it opens the visitor's email client with a pre-filled message addressed to kmk@kbongsoft.com. It does not silently transmit data anywhere; the visitor must actually send the resulting email themselves.

## Data Storage
This site uses no database or Table API — it is purely informational/marketing content with a client-side mailto contact form. No table schemas are defined.

## Not Yet Implemented / Suggested Next Steps
- A real backend form handler (e.g., a form service or serverless function) if silent form submission (without opening the visitor's mail client) is desired later — outside static-site scope.
- Blog / insights section for SEO and thought leadership, if desired.
- Client logo wall or downloadable case-study PDFs once real client permissions are available.
- Multi-language (e.g., Simplified Chinese) version if targeting a broader regional audience.
- Analytics integration (e.g., Plausible/GA4) to measure inquiry conversion.

## Deployment
This project has not yet been deployed. To publish it live, use the **Publish tab** in the editor, or ask the agent to run a Hosted Deploy.
