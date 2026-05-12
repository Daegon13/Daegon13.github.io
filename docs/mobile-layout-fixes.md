# Mobile layout overflow checks

Use this note when reviewing Marin.dev on narrow Android/Chrome widths such as 360px, 375px, 390px and 430px. The goal is to find real intrinsic-width overflow instead of masking it with `body`/`html` overflow rules.

## Console snippet

Paste this in DevTools after the page has finished rendering:

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
    class: el.className,
    text: el.innerText?.slice(0, 80),
    left: Math.round(el.getBoundingClientRect().left),
    right: Math.round(el.getBoundingClientRect().right),
    width: Math.round(el.getBoundingClientRect().width),
  }));
```

## What to check manually

- Hero headline, eyebrow, badges, CTAs and trust strip are fully visible.
- CTA buttons are full-width on mobile and return to content width on larger screens.
- Badges can wrap/shrink without pushing the viewport.
- Grid and flex children use `min-w-0` where content may otherwise force intrinsic overflow.
- Decorative glows can be clipped by their own containers, but real text/buttons/cards should not be clipped.

## Mobile-safe component contract

Reusable visual components must default to fluid, narrow-screen-safe behavior before adding desktop polish.

- Grid and flex children that contain text, badges, CTAs or cards need `min-w-0` so intrinsic content cannot force the viewport wider.
- Mobile CTAs should be `w-full` or at least `max-w-full`; only switch back to content-width buttons at `sm`/`md` and above.
- Avoid long uppercase pills unless their inner label can shrink and wrap; use mobile-safe tracking first, then increase tracking on larger breakpoints.
- Do not introduce large fixed widths below `md`; prefer `w-full`, `max-w-full`, `minmax(0, 1fr)` grids and responsive aspect ratios.
- Do not use `overflow-hidden` on sections containing real text or interactive content unless the narrowest supported widths have been tested.
- Decorative glows can be clipped inside their own card/mockup containers, but they must not be required for layout or readability.
- Do not add iframes by default on mobile; use links, placeholders or explicitly tested lazy embeds instead.
- Heavy effects such as large shadows, backdrop blur, transforms and hover glows should be reduced or disabled on mobile, then restored at desktop breakpoints.
