export const PROJECT_GALLERY_PATH = '/galeria';
export const DEFAULT_PROJECT_IMAGE = '/og-default.png';

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
  if (thumbnail) return thumbnail;
  if (cover && cover !== DEFAULT_PROJECT_IMAGE) return cover;
  if (slug) return projectThumbnailPath(slug);
  return DEFAULT_PROJECT_IMAGE;
}
