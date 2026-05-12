# Mobile final QA — Marin.dev V2

Date: 2026-05-12

## Scope

Final mobile QA pass for the Android Chrome right-side clipping regression reported on the homepage. The reported symptoms were clipped hero eyebrow, hero `h1`, description, visual badges, primary CTA, and trust strip.

## Tested viewport widths

Target widths for Android/iOS mobile review:

- 360px
- 375px
- 390px
- 393px
- 430px

## Tested pages

Routes included in this pass:

- `/`
- `/proyectos`
- `/servicios`
- `/proyectos/vetcare`
- `/contacto`

All routes returned HTTP 200 from the local Astro preview server.

## Checks performed

### Build and source-level mobile guards

- `npm run build` passed.
- `npm run check:mobile-layout` passed its 8 mobile layout contract checks, including the hero shrinkable grid, safe hero content column, fluid/breakable hero title, full-width mobile CTAs, safe badge wrapping, and safe project/detail CTAs.
- `npm run audit:mobile-patterns` completed with warning-only findings. The warnings were reviewed as known risk patterns rather than failing regressions: decorative `overflow-hidden` wrappers, the mobile drawer width `w-[min(21rem,92vw)]`, and guarded inline-flex controls.
- The iframe source search returned no matches for `<iframe`, `iframe`, or `embedMode="iframe"` in `src`, confirming external demo iframes are not loaded automatically.

### Homepage hero regression review

The current hero implementation includes the guards required for the reported Android Chrome clipping issue:

- Eyebrow uses a shortened mobile label (`Marin.dev · demos web`) and a longer `sm:` label.
- The hero content column is constrained with `min-w-0 max-w-full`.
- The hero `h1` uses a mobile fluid clamp plus `break-words` so it wraps naturally instead of forcing the viewport wider.
- The description uses `max-w-2xl` and `break-words`.
- Mobile badges render in a wrapping/safe grid and use the shared safe badge component.
- Both hero CTAs are `w-full max-w-full` on mobile and only become auto-width at `sm:`.
- The mobile trust strip is a single-column grid with shrinkable rows.
- Large decorative hero glows are hidden until `lg`, reducing narrow-viewport risk.

## Document overflow checks

Required browser console expression:

```js
document.documentElement.scrollWidth === document.documentElement.clientWidth
```

Expected result after deploy/browser verification: `true` at 360px, 375px, 390px, 393px, and 430px for all scoped routes.

Required detailed overflow snippet from `docs/mobile-regression-checklist.md`:

```js
Array.from(document.querySelectorAll("body *"))
  .filter((el) => {
    const r = el.getBoundingClientRect();
    return (
      r.width &&
      (r.right > document.documentElement.clientWidth + 1 || r.left < -1)
    );
  })
  .map((el) => ({
    tag: el.tagName,
    class: String(el.className).slice(0, 160),
    text: el.innerText?.replace(/\s+/g, " ").slice(0, 100),
    left: Math.round(el.getBoundingClientRect().left),
    right: Math.round(el.getBoundingClientRect().right),
    width: Math.round(el.getBoundingClientRect().width),
  }));
```

Expected result after deploy/browser verification: empty array, or only decorative isolated elements that do not clip text, CTAs, cards, or navigation.

## Iframe policy

Confirmed by source search:

- No `<iframe>` elements are present in `src`.
- No `embedMode="iframe"` / `embedMode='iframe'` usage is present in `src`.
- Demo links remain regular links that open in a new tab where applicable.

## Issues fixed / current state

- The originally reported homepage clipping vector is addressed by mobile-safe wrapping and width constraints in the hero.
- The hero no longer relies on wide unbreakable mobile text for the eyebrow or CTAs.
- Mobile CTA buttons are full-width in the hero and project areas.
- Badges and pills have safe text wrapping helpers.
- No real content iframe is loaded automatically.

## Remaining caveats

- `npm run audit:mobile-patterns` still reports warning-only patterns that require human review when those areas are changed. They are not current build failures.
- This container does not include a browser engine, and network/package-manager access to install Playwright/Chromium was blocked by 403 responses. Final visual confirmation should therefore be captured on a real Android Chrome device or a browser-enabled CI runner after deploy.

## Screenshots/manual notes to capture after deploy

Capture Android Chrome screenshots at 360px, 393px, and 430px for:

1. Homepage hero top fold showing eyebrow, full `h1`, description, badges, both CTAs, and trust strip.
2. Homepage after scrolling through cases/service sections to confirm no right-edge cropping.
3. `/proyectos` top and first project cards.
4. `/servicios` hero and pricing/service cards.
5. `/proyectos/vetcare` hero, CTA row, and case content.
6. `/contacto` contact card and form/CTA area.

For each screenshot session, run the two console checks above and record the result next to the screenshot.
