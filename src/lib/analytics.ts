export type AnalyticsPayload = Record<string, string | number | boolean | undefined | null>;

type Gtag = (command: 'event', eventName: string, payload?: Record<string, string | number | boolean>) => void;
type Plausible = (eventName: string, options?: { props?: Record<string, string | number | boolean> }) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    plausible?: Plausible;
    marinTrack?: typeof track;
  }
}

const ALLOWED_PAYLOAD_FIELDS = new Set([
  'source',
  'service_slug',
  'vertical_slug',
  'project_slug',
  'cta_label',
]);

const normalizeDatasetKey = (key: string) => key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);

export const toAnalyticsSlug = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const sanitizePayload = (payload: AnalyticsPayload = {}) =>
  Object.entries(payload).reduce<Record<string, string | number | boolean>>((safePayload, [key, value]) => {
    if (!ALLOWED_PAYLOAD_FIELDS.has(key) || value === undefined || value === null || value === '') {
      return safePayload;
    }

    safePayload[key] = typeof value === 'string' ? value.slice(0, 120) : value;
    return safePayload;
  }, {});

const payloadFromElement = (element: HTMLElement) =>
  Object.entries(element.dataset).reduce<AnalyticsPayload>((payload, [key, value]) => {
    if (!key.startsWith('analytics') || key === 'analyticsEvent' || key === 'analyticsSubmitEvent') {
      return payload;
    }

    const normalizedKey = normalizeDatasetKey(key.replace(/^analytics/, ''));
    payload[normalizedKey] = value;
    return payload;
  }, {});

export function track(eventName: string, payload?: AnalyticsPayload) {
  if (typeof window === 'undefined' || !eventName) return;

  try {
    const safePayload = sanitizePayload(payload);

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, safePayload);
      return;
    }

    if (typeof window.plausible === 'function') {
      window.plausible(eventName, { props: safePayload });
      return;
    }

    if (import.meta.env.DEV) {
      console.debug('[analytics]', eventName, safePayload);
    }
  } catch {
    // Analytics must never block navigation or break the UI.
  }
}

export function bindAnalyticsEvents() {
  if (typeof window === 'undefined') return;

  window.marinTrack = track;
  window.addEventListener('marin:track', (event) => {
    const detail = event instanceof CustomEvent ? event.detail : null;
    if (!detail || typeof detail.eventName !== 'string') return;
    track(detail.eventName, detail.payload);
  });

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-analytics-event]') : null;
      if (!target) return;

      track(target.dataset.analyticsEvent || '', payloadFromElement(target));
    },
    { capture: true },
  );

  document.addEventListener(
    'submit',
    (event) => {
      const target = event.target instanceof HTMLElement && event.target.matches('[data-analytics-submit-event]') ? event.target : null;
      if (!target) return;

      track(target.dataset.analyticsSubmitEvent || '', payloadFromElement(target));
    },
    { capture: true },
  );
}
