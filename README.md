# Neighborhood Helper

**Free community resource guide for Saint Paul, Minnesota.**

Built by [North Star Human Rights](https://northstarhr.pages.dev) — a certified human rights consulting practice based in Saint Paul.

---

## What It Is

Neighborhood Helper is a simple, free tool that helps Saint Paul residents find real help near them — food, housing, health care, legal aid, immigration support, job training, and more.

You pick your neighborhood. You pick what you need. You get real places with real phone numbers.

No account. No login. No data collected. Ever.

---

## Who It's For

People who need help and don't know where to start. People who distrust government websites. People who are tired, scared, or in crisis. People navigating systems in a second language.

Every design decision was made with them in mind:

- Large, readable text (Atkinson Hyperlegible — designed for low vision)
- Plain language throughout — "I need food" not "Food Assistance Programs"
- One question at a time — never overwhelming
- Minimum 60px tap targets for phone use
- Works on any phone, any browser, any connection speed

---

## Neighborhoods Covered

- East Side (Payne-Phalen, Arcade, Dayton's Bluff)
- West Side (District del Sol, Cesar Chavez St)
- Frogtown (Thomas-Dale, University Ave)
- Rondo (Summit-University, Selby Ave)
- North End (Rice St, Maryland Ave)
- Midway (Hamline, Snelling, Green Line)
- Downtown (Lowertown, Capitol area)
- Highland / West 7th (Highland Park, Fort Road, Como, Mac-Groveland)
- I'm not sure — citywide starter resources for anyone who doesn't know where to begin

---

## Resource Categories

Each neighborhood gets filtered results for:

- Food
- Housing (eviction help or emergency shelter)
- Health care (crisis, mental health, physical, children)
- Money and bills
- Legal help (housing, immigration, other)
- Kids and child care
- Work and job training
- Immigration (urgent/rights or legal case help)
- Not sure where to start

---

## Technical Stack

- Pure HTML, CSS, and vanilla JavaScript
- No frameworks, no build tools, no npm
- Hosted on Cloudflare Pages (free tier)
- Zero external API calls
- Zero data collection
- WCAG 2.1 AA compliant
- Content Security Policy meta tag included
- All dynamic content built via DOM methods — no innerHTML with variable data

---

## Languages

Currently available in **English only**.

The architecture is built for language expansion. All user-facing strings can be moved into a `strings` object per language. Community-validated translations for the following languages are planned:

- Spanish (Español)
- Somali (Soomaali)
- Karen (ကညီကျိာ်)
- Lao (ລາວ)

If you are a native speaker of any of these languages and want to help validate translations, please reach out.

---

## How to Contribute

### Adding or updating a resource

Every resource is a plain JavaScript object near the top of the file. To add one:

```javascript
your_resource_key: {
  name: "Organization Name",
  tagline: "One plain sentence about what they do and who they serve.",
  phone: "6511234567",        // digits only for tel: link
  address: "123 Main St, St. Paul 55106",
  hours: "Monday-Friday 9am-5pm",
  url: "https://example.org",
  langs: ["English", "Spanish"],
  urgent: false,              // true = available 24hrs or emergency resource
  d: ["east_side"]            // district tags: "east_side", "west_side", 
                              // "frogtown", "rondo", "north_end", "midway",
                              // "downtown", "other", "citywide"
}
```

Then add the key to the appropriate tile's `results` array in the `TILES` definition.

### Flagging outdated information

Every resource card has a "Flag as outdated" link that sends an email to the maintainer. If you know a phone number has changed, a program has closed, or hours are wrong — use it.

### Adding a neighborhood

Add an entry to the `NBHDS` array:

```javascript
{id: "your_id", name: "Neighborhood Name", sub: "Cross streets or landmarks"}
```

Then tag resources with `d: ["your_id"]` to make them appear for that neighborhood.

---

## Privacy

This tool collects **nothing**. There are no:

- Analytics or tracking pixels
- Cookies or local storage
- Form submissions
- Server logs tied to individuals
- Third-party scripts (except Google Fonts for typography)

The Content Security Policy meta tag blocks all external connections except Google Fonts.

People using this tool — especially immigrant communities navigating resources during a period of heightened federal enforcement — should be able to trust that using it leaves no trace. That is not an aspiration. It is a hard requirement built into the architecture.

---

## Accessibility

This tool targets **WCAG 2.1 Level AA** compliance:

- Skip navigation link
- Logical heading hierarchy
- All interactive elements are native `<button>` or `<a>` elements
- Descriptive `aria-label` on every button
- Live region announces screen changes to screen readers
- Visible focus indicator (3px gold outline) on all interactive elements
- Color contrast verified mathematically — minimum 4.5:1 for all text
- Gold accent never used as text on light backgrounds (fails contrast)
- Minimum 60px tap targets throughout
- Base font size 1.2rem (~19px)
- Atkinson Hyperlegible typeface — designed specifically for low vision readers

---

## License

MIT License — free to use, copy, modify, and distribute. If you build on this for another city or community, please keep the privacy principles intact.

---

## Acknowledgments

Resources verified through direct research in March 2026. Special thanks to the organizations doing this work every day:

Merrick Community Services · Neighborhood House · CLUES · Feeding Frogtown · Hallie Q. Brown Community Center · West Side Community Organization · Frogtown Neighborhood Association · Minnesota Community Care · HOME Line · Mid-Minnesota Legal Aid · Immigrant Connection Mosaic · Immigrant Law Center of Minnesota · International Institute of Minnesota · Keystone Community Services · Face to Face · Ramsey County Mental Health · Saint Paul Emergency Rental Assistance Program · United Way 2-1-1
