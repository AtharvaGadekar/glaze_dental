
export const SITE_URL = 'https://bestdentistinhadapsar.com';
export const SITE_NAME = 'Glaze Dental Clinic';
export const DEFAULT_OG_IMAGE = '/logo/logo.png';


export function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`;
}

export function getOgImageUrl(imagePath: string = DEFAULT_OG_IMAGE): string {
  if (imagePath.startsWith('http')) return imagePath;
  return `${SITE_URL}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
}
