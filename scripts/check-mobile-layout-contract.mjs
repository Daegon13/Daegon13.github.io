import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const files = [
  'src/layouts/BaseLayout.astro',
  'src/styles/tailwind.css',
  'src/components/HeroV2.astro',
  'src/components/VisualBadge.astro',
  'src/components/SectionHeader.astro',
  'src/components/BrowserMockup.astro',
  'src/components/ContactCTA.astro',
  'src/components/FeaturedCases.astro',
  'src/components/ProjectCard.astro',
  'src/components/ProjectLinkPreview.astro',
  'src/pages/proyectos/[slug].astro',
  'src/pages/proyectos/index.astro',
  'src/pages/servicios.astro',
];

const source = Object.fromEntries(
  files.map((file) => [file, readFileSync(join(process.cwd(), file), 'utf8')]),
);

const checks = [
  {
    name: 'Do not mask layout issues with global horizontal overflow hiding',
    pass: () => !Object.values(source).some((text) => /overflow-x\s*:\s*hidden|overflow-x-hidden/.test(text)),
  },
  {
    name: 'Hero grid uses shrinkable minmax columns',
    pass: () => source['src/components/HeroV2.astro'].includes('lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]'),
  },
  {
    name: 'Hero content column has min-w-0 and max-w-full',
    pass: () => source['src/components/HeroV2.astro'].includes('relative z-10 min-w-0 max-w-full'),
  },
  {
    name: 'Hero title uses a mobile fluid clamp and can break words',
    pass: () => /<h1[^>]+break-words[^>]+text-\[clamp\(2\.25rem,10vw,3\.5rem\)\]/.test(source['src/components/HeroV2.astro']),
  },
  {
    name: 'Hero primary and secondary CTAs are full-width on mobile',
    pass: () => (source['src/components/HeroV2.astro'].match(/inline-flex min-h-12 w-full max-w-full/g) ?? []).length >= 2,
  },
  {
    name: 'VisualBadge labels can shrink/wrap and use safer mobile tracking',
    pass: () => {
      const text = source['src/components/VisualBadge.astro'];
      return text.includes('min-w-0 max-w-full') && text.includes('tracking-[0.1em]') && text.includes('<span class="min-w-0 break-words leading-5">{label}</span>');
    },
  },
  {
    name: 'SectionHeader root and eyebrow are width-safe',
    pass: () => {
      const text = source['src/components/SectionHeader.astro'];
      return text.includes('relative flex min-w-0 max-w-full') && text.includes('flex w-full min-w-0 flex-wrap') && text.includes('tracking-[0.1em]');
    },
  },
  {
    name: 'Project/detail CTAs use full-width mobile buttons',
    pass: () => source['src/pages/proyectos/[slug].astro'].includes('inline-flex w-full max-w-full') && source['src/components/ProjectCard.astro'].includes('inline-flex w-full max-w-full'),
  },
];

const failures = checks.filter((check) => !check.pass());

if (failures.length > 0) {
  console.error('Mobile layout contract failed:');
  for (const failure of failures) {
    console.error(`- ${failure.name}`);
  }
  process.exit(1);
}

console.log(`Mobile layout contract passed (${checks.length} checks).`);
