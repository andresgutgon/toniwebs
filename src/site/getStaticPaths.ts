import { SERVICES_SLUGS } from '@site/constants'
export function getServiceStaticPathsForES() {
  return [
    { params: { slug: SERVICES_SLUGS.weddings.es } },
    { params: { slug: SERVICES_SLUGS.moderator.es } },
    { params: { slug: SERVICES_SLUGS.speaker.es } }
  ]
}
export function getServiceStaticPathsForCA() {
  return [
    { params: { slug: SERVICES_SLUGS.weddings.ca } },
    { params: { slug: SERVICES_SLUGS.moderator.ca } },
    { params: { slug: SERVICES_SLUGS.speaker.ca } }
  ]
}
