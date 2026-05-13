# CRO Final QA — Patch 09

Date: 2026-05-13

## Scope reviewed

This pass reviewed the homepage decision path and the WhatsApp-led conversion path after the addition of:

- Need selector cards.
- CTA copy updates.
- Before/after comparison block.
- Context-specific WhatsApp intents for global, service, vertical, project and contact flows.

The patch intentionally avoids new homepage sections, pricing changes, route changes and contact data changes.

## Homepage flow review

| Step                            | Current role in the conversion path                                                            | QA verdict                                                                                                          |
| ------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Hero                            | Explains the offer quickly and uses a low-commitment primary CTA: sending Instagram and rubro. | Strong. The visitor understands the offer before seeing deeper detail.                                              |
| Social proof / capability strip | Confirms concrete delivery capabilities near the top.                                          | Useful as quick proof; keep concise.                                                                                |
| Outcome grid                    | Frames why the site exists before asking the visitor to choose a package.                      | Useful, but should remain compact in future edits.                                                                  |
| NeedSelector                    | Helps uncertain visitors choose by situation instead of by technical package.                  | Strong decision aid. CTAs use service-specific WhatsApp messages.                                                   |
| BeforeAfter                     | Shows the practical transformation from scattered channels to a useful business link or panel. | Strong educational block; no extra section needed.                                                                  |
| ConversionFlow                  | Explains the path from entry point to consultable output.                                      | Good support section, but it is the first candidate to move lower if the homepage feels too long in browser review. |
| FeaturedCases                   | Proves capability with real cases and demos.                                                   | Strong proof point; should stay above vertical demos.                                                               |
| VerticalDemos                   | Gives rubro-specific entry points and WhatsApp context.                                        | Useful for local lead matching.                                                                                     |
| ProcessSteps                    | Reduces uncertainty about working process.                                                     | Keep below proof/decision sections.                                                                                 |
| ProductizedServices             | Summarizes offers and anchors service CTAs.                                                    | Useful near the end because the selector already handles early decisions.                                           |
| Final ContactCTA                | Ends with a clear low-commitment action.                                                       | Clear and consistent.                                                                                               |

## CTA consistency review

- Global CTA remains focused on sending Instagram and rubro.
- Hero and final CTA use the same low-commitment action.
- Service CTAs keep the package context in the WhatsApp message.
- Vertical demo CTAs include the rubro context in the WhatsApp message.
- Project cards include the project name in the WhatsApp message.
- Contact form now states that submit opens WhatsApp with the provided data.
- The fallback contact link now has a different label from the form submit action, reducing duplicate-choice confusion.

## WhatsApp intent review

- WhatsApp number remains unchanged: `59897316092`.
- Static WhatsApp URLs use `encodeURIComponent` through the shared helper.
- Form-generated WhatsApp URLs encode the assembled message before opening a new tab.
- Default, service, vertical and project messages are short and context-specific.
- Contact form free text is capped at 240 characters to reduce oversized WhatsApp URLs.

## Mobile QA review

Reviewed against the target widths: 360px, 375px, 390px and 430px.

- CTA labels use full-width mobile buttons where needed.
- Key grids stack to one column before medium breakpoints.
- Cards include `min-w-0`, `break-words` or mobile-safe utility classes in the main risk areas.
- Contact fallback CTA now has centered text for two-line mobile wrapping.
- No obvious new horizontal overflow risk was introduced in this patch.

Programmatic mobile contract checks were also run with the existing repo script.

## Copy guardrail review

- Source files were scanned for the blocked generic phrases from the Patch 09 prompt.
- No blocked phrase was found in `src/` during this QA pass.
- New copy added in this patch is functional and specific to WhatsApp behavior.

## Performance risk review

- No iframe was added.
- No new image asset was added.
- No animation library or heavy JavaScript dependency was added.
- The only JavaScript change is the existing contact form submit handler limiting the optional note length before URL encoding.

## Issues fixed in this patch

1. Added explicit contact-form helper text explaining that submit opens WhatsApp with the form data.
2. Added a `maxlength` of 240 characters to the optional contact note.
3. Mirrored that cap in the contact submit script before encoding the WhatsApp message.
4. Renamed the fallback contact link to avoid two adjacent buttons with the same label.
5. Centered fallback contact link text for safer wrapping on narrow mobile widths.

## Remaining future experiments

- In browser analytics, compare hero CTA clicks against NeedSelector CTA clicks to see whether the selector should move higher or lower.
- If scroll depth drops before cases, test moving ConversionFlow below FeaturedCases instead of removing content.
- Test a shorter homepage variant where ProcessSteps lives only on `/servicios`.
- Add event reporting for selected interest/rubro from the contact form if a privacy-safe analytics setup is confirmed.
- Consider A/B testing the hero primary CTA label against a variant that mentions the first recommendation explicitly.
