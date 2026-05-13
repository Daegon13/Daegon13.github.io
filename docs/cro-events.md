# CRO event tracking

This site uses a lightweight, privacy-conscious event helper in `src/lib/analytics.ts`.
It does not load analytics providers or external scripts by itself, does not add dependencies,
and only sends non-sensitive CTA metadata.

## Runtime behavior

`track(eventName, payload?)` is safe by default:

1. No-ops during SSR (`window` is unavailable).
2. Sends to `window.gtag('event', eventName, payload)` if a Google `gtag` object already exists.
3. Sends to `window.plausible(eventName, { props: payload })` if Plausible already exists.
4. Logs to `console.debug` only in local development when no provider exists.
5. Catches errors so tracking never blocks navigation or breaks the UI.

A tiny delegated listener is initialized from `BaseLayout.astro` and reads declarative attributes:

- `data-analytics-event="event_name"` for click events.
- `data-analytics-submit-event="event_name"` for submit events.
- `data-analytics-source`, `data-analytics-service-slug`, `data-analytics-vertical-slug`,
  `data-analytics-project-slug`, and `data-analytics-cta-label` for allowed payload fields.

No form values, names, emails, phone numbers, URLs entered by users, or free-text messages are collected.

## Events

| Event name | Where it fires | Payload fields |
| --- | --- | --- |
| `hero_primary_cta` | Primary WhatsApp CTA in `HeroV2` | `source`, `cta_label` |
| `hero_secondary_cta` | Secondary project CTA in `HeroV2` | `source`, `cta_label` |
| `need_selector_cta` | WhatsApp CTA for a recommendation in `NeedSelector` | `source`, `service_slug`, `cta_label` |
| `service_cta` | Service/package CTAs in `ProductizedServices` and `PricingPlans` | `source`, `service_slug`, `cta_label` |
| `vertical_demo_cta` | WhatsApp CTA for a demo by rubro in `VerticalDemos` | `source`, `vertical_slug`, `cta_label` |
| `project_demo_click` | External demo links in `ProjectCard` and project detail hero | `source`, `project_slug`, `cta_label` |
| `project_whatsapp_click` | "Quiero algo parecido" WhatsApp CTA in `ProjectCard` and project detail final CTA | `source`, `project_slug`, `cta_label` |
| `contact_whatsapp_submit` | Contact form submit, direct contact WhatsApp links, and reusable `ContactCTA` WhatsApp entry points | `source`, `cta_label` |
| `nav_cta_click` | Desktop and mobile WhatsApp CTA in `Nav` | `source`, `cta_label` |

## Wiring a provider later

The helper automatically detects a provider if one is intentionally added later.
Keep provider setup separate from CTA instrumentation.

### Plausible example

If Plausible is added in the future, load the official script in the layout and expose `window.plausible` as usual.
The current helper will call:

```js
window.plausible(eventName, { props: payload });
```

### gtag example

If an existing approved setup exposes `window.gtag`, the helper will call:

```js
window.gtag('event', eventName, payload);
```

Do not include personal data in payloads. Keep payloads to stable labels/slugs such as source, service slug,
vertical slug, project slug, and CTA label.
