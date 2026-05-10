import { existsSync } from "node:fs";
import { join } from "node:path";

export const PROJECT_GALLERY_PATH = "/galeria";
export const DEFAULT_PROJECT_IMAGE = "/og-default.png";

export function projectThumbnailPath(slug: string) {
  return `${PROJECT_GALLERY_PATH}/${slug}.svg`;
}

export function projectCoverImage({
  slug,
  thumbnail,
  cover,
}: {
  slug?: string;
  thumbnail?: string;
  cover?: string;
}) {
  return projectVisualAsset({ slug, thumbnail, cover }).src;
}

export function projectVisualAsset({
  slug,
  thumbnail,
  cover,
}: {
  slug?: string;
  thumbnail?: string;
  cover?: string;
}) {
  if (thumbnail) return { src: thumbnail, hasImage: true };
  if (cover && cover !== DEFAULT_PROJECT_IMAGE)
    return { src: cover, hasImage: true };

  if (slug) {
    const generatedThumbnail = projectThumbnailPath(slug);
    const publicAssetPath = join(
      process.cwd(),
      "public",
      "galeria",
      `${slug}.svg`,
    );

    if (existsSync(publicAssetPath)) {
      return { src: generatedThumbnail, hasImage: true };
    }
  }

  return { src: DEFAULT_PROJECT_IMAGE, hasImage: false };
}
