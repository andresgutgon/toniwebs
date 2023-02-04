import { SERVICES_SLUGS } from '@site/constants'
export function getServiceStaticPathsForES() {
  return [
    { params: { slug: SERVICES_SLUGS.weddings.es } },
    { params: { slug: SERVICES_SLUGS.moderator.es } },
    { params: { slug: SERVICES_SLUGS.speaker.es } },
    { params: { slug: SERVICES_SLUGS.fakeWaiter.es } },
    { params: { slug: SERVICES_SLUGS.infiltratedCharacter.es } },
    { params: { slug: SERVICES_SLUGS.reporterTv.es } }
  ]
}
export function getServiceStaticPathsForCA() {
  return [
    { params: { slug: SERVICES_SLUGS.weddings.ca } },
    { params: { slug: SERVICES_SLUGS.moderator.ca } },
    { params: { slug: SERVICES_SLUGS.speaker.ca } },
    { params: { slug: SERVICES_SLUGS.fakeWaiter.ca } },
    { params: { slug: SERVICES_SLUGS.infiltratedCharacter.ca } },
    { params: { slug: SERVICES_SLUGS.reporterTv.ca } }
  ]
}
