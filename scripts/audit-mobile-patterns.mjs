import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOTS = ["src/components", "src/pages", "src/layouts"];
const EXTENSIONS = new Set([".astro", ".js", ".jsx", ".mjs", ".ts", ".tsx"]);
const CTA_FILE_HINT =
  /(Hero|CTA|Nav|Footer|Pricing|Service|Project|Card|Contact|Button)/i;

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return walk(path);
    const dot = entry.name.lastIndexOf(".");
    const extension = dot >= 0 ? entry.name.slice(dot) : "";
    return EXTENSIONS.has(extension) ? [path] : [];
  });
}

function lineNumberForOffset(source, offset) {
  return source.slice(0, offset).split("\n").length;
}

function lineAt(source, lineNumber) {
  return source.split("\n")[lineNumber - 1]?.trim() ?? "";
}

function warn(warnings, file, line, rule, detail) {
  warnings.push({ file, line, rule, detail });
}

function hasMobileWidthGuard(classText) {
  return /(?:^|\s)(?:w-full|max-w-full|sm:w-auto|md:w-auto|lg:w-auto)(?:\s|$)/.test(
    classText,
  );
}

function analyzeClassAttribute(source, file, warnings) {
  const classAttributePattern =
    /class(?::list)?\s*=\s*(?:"([\s\S]*?)"|'([\s\S]*?)'|`([\s\S]*?)`|\{`([\s\S]*?)`\})/g;
  let match;

  while ((match = classAttributePattern.exec(source)) !== null) {
    const classText = (
      match[1] ??
      match[2] ??
      match[3] ??
      match[4] ??
      ""
    ).replace(/\s+/g, " ");
    const line = lineNumberForOffset(source, match.index);
    const tagStart = source.lastIndexOf("<", match.index);
    const tagPrefix =
      tagStart >= 0 ? source.slice(tagStart + 1, match.index).trim() : "";
    const tagName =
      tagPrefix.match(/^([A-Za-z][\w:-]*)/)?.[1]?.toLowerCase() ?? "";

    if (/(^|\s)w-\[/.test(classText)) {
      warn(
        warnings,
        file,
        line,
        "fixed arbitrary width",
        "Class contains unprefixed `w-[...]`; confirm it cannot overflow narrow mobile widths.",
      );
    }

    if (/(^|\s)min-w-\[/.test(classText)) {
      warn(
        warnings,
        file,
        line,
        "fixed arbitrary min-width",
        "Class contains unprefixed `min-w-[...]`; prefer `min-w-0` or a responsive breakpoint unless required.",
      );
    }

    if (
      tagName === "section" &&
      /(^|\s)overflow-hidden(\s|$)/.test(classText)
    ) {
      warn(
        warnings,
        file,
        line,
        "section overflow clipping",
        "Section class contains `overflow-hidden`; verify it clips only decoration, not text, badges, CTAs or cards.",
      );
    }

    const trackingPattern =
      /(^|\s)(?:(sm|md|lg|xl|2xl):)?tracking-\[(0?\.\d+)em\]/g;
    let trackingMatch;
    while ((trackingMatch = trackingPattern.exec(classText)) !== null) {
      const breakpoint = trackingMatch[2];
      const value = Number.parseFloat(trackingMatch[3]);
      if (value >= 0.2 && !breakpoint) {
        warn(
          warnings,
          file,
          line,
          "wide mobile letter spacing",
          `Unprefixed tracking-[${trackingMatch[3]}em] can clip narrow badges; move high tracking to sm:/md: or reduce it on mobile.`,
        );
      }
    }

    if (
      CTA_FILE_HINT.test(file) &&
      ["a", "button"].includes(tagName) &&
      /(^|\s)inline-flex(\s|$)/.test(classText) &&
      !hasMobileWidthGuard(classText)
    ) {
      warn(
        warnings,
        file,
        line,
        "inline-flex CTA width guard",
        "Potential CTA uses `inline-flex` without `w-full` or `max-w-full`; verify it cannot clip on mobile.",
      );
    }
  }
}

function analyzeLinePatterns(source, file, warnings) {
  const lines = source.split("\n");
  lines.forEach((lineText, index) => {
    const line = index + 1;
    if (/embedMode\s*=\s*["']iframe["']/.test(lineText)) {
      warn(
        warnings,
        file,
        line,
        "iframe embed mode",
        'Found `embedMode="iframe"`; project previews should avoid loading live iframes by default.',
      );
    }

    if (/<iframe\b/i.test(lineText)) {
      warn(
        warnings,
        file,
        line,
        "iframe element",
        "Found `<iframe`; confirm it is intentional, lazy, and not loaded inside mobile project previews.",
      );
    }
  });
}

const files = ROOTS.flatMap((root) => {
  try {
    return statSync(root).isDirectory() ? walk(root) : [];
  } catch {
    return [];
  }
});

const warnings = [];

for (const absoluteFile of files) {
  const file = relative(process.cwd(), absoluteFile);
  const source = readFileSync(absoluteFile, "utf8");
  analyzeLinePatterns(source, file, warnings);
  analyzeClassAttribute(source, file, warnings);
}

console.log(`Mobile pattern audit scanned ${files.length} source files.`);

if (warnings.length === 0) {
  console.log("No risky mobile layout patterns found.");
  process.exit(0);
}

console.warn(
  `Found ${warnings.length} mobile layout warning(s). Review manually:`,
);
for (const warning of warnings) {
  console.warn(
    `- ${warning.file}:${warning.line} [${warning.rule}] ${warning.detail}`,
  );
  const source = readFileSync(join(process.cwd(), warning.file), "utf8");
  console.warn(`  ${lineAt(source, warning.line).slice(0, 180)}`);
}

console.warn(
  "Audit completed with warnings only; this script does not fail CI by default.",
);
