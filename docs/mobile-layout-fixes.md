# Mobile layout overflow checks

Use this note when reviewing Marin.dev on narrow Android/Chrome widths such as 360px, 375px, 390px and 430px. The goal is to find real intrinsic-width overflow instead of masking it with `body`/`html` overflow rules.

## Console snippet

Paste this in DevTools after the page has finished rendering:

```js
Array.from(document.querySelectorAll('body *')).filter(el => {
  const r = el.getBoundingClientRect();
  return r.width && (r.right > document.documentElement.clientWidth + 1 || r.left < -1);
}).map(el => ({
  tag: el.tagName,
  class: el.className,
  text: el.innerText?.slice(0, 80),
  left: Math.round(el.getBoundingClientRect().left),
  right: Math.round(el.getBoundingClientRect().right),
  width: Math.round(el.getBoundingClientRect().width)
}));
```

## What to check manually

- Hero headline, eyebrow, badges, CTAs and trust strip are fully visible.
- CTA buttons are full-width on mobile and return to content width on larger screens.
- Badges can wrap/shrink without pushing the viewport.
- Grid and flex children use `min-w-0` where content may otherwise force intrinsic overflow.
- Decorative glows can be clipped by their own containers, but real text/buttons/cards should not be clipped.
