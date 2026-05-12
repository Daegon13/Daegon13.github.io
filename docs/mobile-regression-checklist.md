# Mobile layout regression checklist

Use this checklist before deploying visual changes to Marin.dev, especially patches that touch the hero, project cards, badges, CTAs, previews, navigation or section wrappers. The goal is to catch narrow-viewport regressions without adding browser automation or heavy dependencies.

## Required viewport widths

Test every route below at these viewport widths in browser DevTools:

- `360px` — small Android / tightest supported layout.
- `375px` — common iPhone width.
- `390px` — modern iPhone width.
- `430px` — large mobile width before tablet layouts.

Keep the device height realistic enough to scroll through the full page. Refresh after changing each width so CSS, lazy content and menu state are evaluated from a clean render.

## Required pages

- `/`
- `/proyectos`
- One project detail page, for example `/proyectos/vetcare` or any current project slug.
- `/servicios`
- `/contacto`

## Manual layout checks

For each page and viewport width:

- [ ] There is no horizontal scroll on initial load or after scrolling to the bottom.
- [ ] The hero title is fully visible and does not crop on the left or right edge.
- [ ] Badges, pills and eyebrow labels wrap or shrink safely instead of forcing the viewport wider.
- [ ] CTA buttons are fully visible; text does not clip and tap targets remain usable.
- [ ] Cards, project previews, mockups and pricing/service panels are not clipped.
- [ ] Project previews do not load live iframes by default on mobile.
- [ ] Sticky navigation does not repaint heavily while scrolling.
- [ ] The mobile menu opens and closes cleanly without leaving the body fixed, locked or horizontally shifted.
- [ ] There is no visible right-edge cropping, especially in glow wrappers, grids, browser mockups and CTA rows.

## DevTools overflow detection snippet

Paste this in the browser console after the page has rendered. A clean page should return an empty array, or only decorative elements that are intentionally isolated and cannot affect text, CTAs or cards.

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

### How to interpret results

- Prioritize elements with readable text, CTAs, nav items, cards, forms and project previews.
- Decorative halos can extend inside a clipped visual wrapper, but they should not appear as body-level overflow or hide real content.
- If an element appears in the list, check whether it needs `min-w-0`, `max-w-full`, `w-full` on mobile, safer tracking, a wrapping flex row, or a responsive grid using `minmax(0, 1fr)`.

## Repo search checklist

Run these searches before approving a mobile-facing visual patch. They are intentionally simple and should be reviewed manually.

```bash
rg -n "<iframe|iframe" src
rg -n "embedMode=\"iframe\"|embedMode='iframe'" src
rg -n "(^|[^a-z:])w-\[" src/components src/pages src/layouts
rg -n "(^|[^a-z:])min-w-\[" src/components src/pages src/layouts
rg -n "<section[^>]*overflow-hidden|overflow-hidden[^\n]*<section|overflow-hidden" src/components src/pages src/layouts
rg -n "inline-flex" src/components src/pages src/layouts
```

When reviewing the output, pay special attention to:

- `w-[...]` or `min-w-[...]` utilities without a responsive prefix such as `sm:`, `md:` or `lg:`.
- `overflow-hidden` on major sections that contain real text, CTAs or cards rather than purely decorative wrappers.
- `inline-flex` CTA anchors/buttons that do not also include `w-full` or `max-w-full` for mobile.
- Any accidental `iframe` or `embedMode="iframe"` usage in project previews.

## Lightweight automated audit

Run the warning-only source scan after build:

```bash
npm run audit:mobile-patterns
```

The script is not a replacement for browser testing. It flags risky source patterns so reviewers know where to look during the manual checks above.

## Recommended pre-deploy sequence

```bash
npm run build
npm run audit:mobile-patterns
```

Then complete the viewport checklist for the required pages before merging or deploying visual patches.
