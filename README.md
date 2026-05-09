# Neighborhood Helper

**Free community resource guide for the Twin Cities metro.**

Built by [North Star Human Rights](https://northstarhr.pages.dev) — a certified human rights consulting practice based in Saint Paul.

---

## What It Is

Neighborhood Helper is a free tool that helps Twin Cities residents find real help near them — food, housing, health care, legal aid, immigration support, job training, reentry support, and more.

You pick your area. You pick what you need. You get real places with real phone numbers.

No account. No login. No data collected. Ever.

---

## Who It's For

People who need help and don't know where to start. People who distrust government websites. People who are tired, scared, or in crisis. People navigating systems in a second language. People recently released from incarceration.

Every design decision was made with them in mind:

- Large, readable text (system fonts — no external font requests)
- Plain language throughout — "I need food" not "Food Assistance Programs"
- One question at a time — never overwhelming
- Minimum 60px tap targets for phone use
- Works on any phone, any browser, any connection speed

---

## Areas Covered

**Saint Paul (9 neighborhoods)**
- East Side (Payne-Phalen, Arcade, Dayton's Bluff)
- West Side (District del Sol, Cesar Chavez St)
- Frogtown (Thomas-Dale, University Ave)
- Rondo (Summit-University, Selby Ave)
- North End (Rice St, Maryland Ave)
- Midway (Hamline, Snelling, Green Line)
- Downtown (Lowertown, Capitol area)
- Highland / West 7th (Highland Park, Fort Road, Como)
- I'm not sure — citywide starter resources

**Minneapolis (6 neighborhoods)**
- North Minneapolis (North, Camden, Webber, Hawthorne)
- Northeast Minneapolis (NE, Prospect Park, Marcy-Holmes)
- Phillips / Midtown (Phillips, Powderhorn, Midtown)
- Cedar-Riverside (Cedar-Riverside, Seward, Longfellow)
- South Minneapolis (Southwest, Lyndale, Whittier, Linden Hills)
- Somewhere in Minneapolis — citywide starter resources

**Inner SW Suburbs**
- Bloomington, Richfield, Edina, St. Louis Park, Hopkins

**Northwest Suburbs**
- Brooklyn Park, Brooklyn Center, Crystal / New Hope / Robbinsdale

**West Suburbs**
- Plymouth / Wayzata / Orono, Minnetonka / Hopkins area

**South Metro / Dakota County**
- Burnsville / Apple Valley / Eagan / Lakeville
- Other South Metro / Dakota County

---

## Resource Categories

- Food (food shelves, free meals, SNAP, home delivery)
- Housing (eviction help or emergency shelter)
- Health care (crisis, mental health, physical, children)
- Money and bills (rent, utilities, SNAP, tax help)
- Legal help (housing, immigration, expungement, other)
- Kids and child care
- Work and job training
- Immigration (urgent help or legal case)
- I was recently released from jail or prison (reentry-specific housing, legal, work, and support)
- I'm not sure where to start

---

## Resources

**186 verified resources** across Saint Paul, Minneapolis, and the suburbs — split across three data files for maintainability:

- `data-stpaul.js` — 98 Saint Paul resources
- `data-minneapolis.js` — 62 Minneapolis resources
- `data-suburbs.js` — 26 suburb resources

All resources were verified in April-May 2026. Phone numbers and addresses confirmed against primary sources. Resources with outdated information are flaggable by users.

47 resources are tagged as statewide and surface for all users regardless of location — including 211, 988, CareerForce statewide, MN DOC Reentry Services, HOME Line, MACV, MN Food HelpLine, and others.

---

## Languages

Available in **four languages**:

- English
- Spanish (Español)
- Somali (Soomaali)
- Hmong (Lus Hmoob)

All 124 user-facing strings are translated across all four languages. Translations were reviewed for accuracy and natural language. Community-validated review by native speakers is welcomed — particularly for Somali and Hmong dialects specific to the Twin Cities.

Karen support was planned but disabled due to incomplete validation. It remains in the architecture and can be re-enabled once translations are community-validated.

---

## Technical Stack

- Pure HTML, CSS, and vanilla JavaScript
- No frameworks, no build tools, no npm
- Data split into modular JS files by geography — easy to add new areas
- Hosted on Cloudflare Pages (free tier)
- Security headers served via `_headers` file (HTTP-level CSP, not meta tag)
- Zero data collection
- WCAG 2.1 AA compliant
- All dynamic content built via DOM methods — no innerHTML with user or API data

---

## Privacy

This tool collects **nothing**. There are no:

- Analytics or tracking pixels
- Cookies or local storage
- Form submissions
- Server logs tied to individuals
- Third-party scripts (no Google Fonts — system fonts only)
- External API calls of any kind

The Content Security Policy is enforced at the HTTP header level via Cloudflare Pages `_headers`. It blocks all external connections.

People using this tool — especially immigrant communities navigating resources during a period of heightened federal enforcement — should be able to trust that using it leaves no trace. That is not an aspiration. It is a hard requirement built into the architecture.

---

## Accessibility

Targets **WCAG 2.1 Level AA** compliance:

- Skip navigation link
- Logical heading hierarchy
- All interactive elements are native `<button>` or `<a>` elements
- Descriptive `aria-label` on every button
- Live region announces screen changes to screen readers
- Visible focus indicator (3px gold outline) on all interactive elements
- Color contrast verified — minimum 4.5:1 for all text
- Minimum 60px tap targets throughout
- Base font size 1.2rem (~19px)
- System font stack — no external font requests, faster load, no privacy surface

---

## Adding New Areas

The architecture is designed for easy geographic expansion. To add a new area:

1. Create `data-[area].js` with `[AREA]_HOODS` and `[AREA]_R` variables
2. Add the script tag to `index.html`
3. Extend the HOODS and R merge lines in `index.html`
4. Add hood strings to all 4 language blocks in `STRINGS`

Next planned expansion: Scott County / Shakopee / Jordan area.

---

## License

MIT License — free to use, copy, modify, and distribute. If you build on this for another city or community, please keep the privacy principles intact.

---

## Acknowledgments

Resources verified through direct research in April-May 2026. Special thanks to the organizations doing this work every day.

**Saint Paul:** Merrick Community Services · Neighborhood House · CLUES · Hallie Q. Brown Community Center · West Side Community Organization · Frogtown Neighborhood Association · Minnesota Community Care · HOME Line · Mid-Minnesota Legal Aid · Immigrant Law Center of Minnesota · International Institute of Minnesota · Keystone Community Services · Face to Face · Ramsey County Mental Health · Saint Paul Emergency Rental Assistance Program · United Way 2-1-1 · RS EDEN · Ujamaa Place · Mitchell Hamline Reentry Clinic · Juel Fairbanks Recovery Services · Minnesota Warmline

**Minneapolis:** NorthPoint Health & Wellness · Pillsbury United Communities · Simpson Housing · People Serving People · Agate Housing & Services · Hennepin Healthcare · Community-University Health Care Center · Brian Coyle Center · Waite House · All Square · Twin Cities R!SE · Better Futures Minnesota · Kingsmen Project · Avivo · YouthLink · Bridge for Youth · Avenues for Youth

**Suburbs:** VEAP · STEP · CEAP · IOCP · PRISM · ICA Food Shelf · ResourceWest · 360 Communities · Isuroon · Mission Outpost · Oasis for Youth · Senior Community Services

**Statewide:** MN Department of Corrections Reentry Services · CareerForce · Central MN Reentry Project · Lutheran Social Service · EMERGE Minnesota · Minnesota Recovery Connection · Second Harvest Heartland · MACV
