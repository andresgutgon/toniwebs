import { SERVICES_SLUGS } from '@site/constants'

// Service components
import Weddings from '@PageComponents/Services/Weddings/Content'
import Moderator from '@PageComponents/Services/Moderator/Content'
import Speaker from '@PageComponents/Services/Speaker/Content'

const SERVICE_CONTENT = {
  weddings: { pageKey: 'weddings', pageComponent: Weddings },
  moderator: { pageKey: 'moderator', pageComponent: Moderator },
  speaker: { pageKey: 'speaker', pageComponent: Speaker }
}
export const SERVICES = {
  // Spanish
  [SERVICES_SLUGS.weddings.es]: SERVICE_CONTENT.weddings,
  [SERVICES_SLUGS.moderator.es]: SERVICE_CONTENT.moderator,
  [SERVICES_SLUGS.speaker.es]: SERVICE_CONTENT.speaker,
  // Catalan
  [SERVICES_SLUGS.weddings.ca]: SERVICE_CONTENT.weddings,
  [SERVICES_SLUGS.moderator.ca]: SERVICE_CONTENT.moderator,
  [SERVICES_SLUGS.speaker.ca]: SERVICE_CONTENT.speaker
}
