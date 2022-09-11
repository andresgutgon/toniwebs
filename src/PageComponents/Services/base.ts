import { SERVICES_SLUGS } from '@site/constants'

// Service components
import Moderator from '@PageComponents/Services/Moderator/Content'
import Speaker from '@PageComponents/Services/Speaker/Content'
import FakeWaiter from '@PageComponents/Services/FakeWaiter/Content'
import InfiltratedCharacter from '@PageComponents/Services/InfiltratedCharacter/Content'
import ReporterTv from '@PageComponents/Services/ReporterTv/Content'

const SERVICE_CONTENT = {
  moderator: { pageKey: 'moderator', pageComponent: Moderator },
  speaker: { pageKey: 'speaker', pageComponent: Speaker },
  fakeWaiter: { pageKey: 'fakeWaiter', pageComponent: FakeWaiter },
  reporterTv: { pageKey: 'reporterTv', pageComponent: ReporterTv },
  infiltratedCharacter: {
    pageKey: 'infiltratedCharacter',
    pageComponent: InfiltratedCharacter
  }
}
export const SERVICES = {
  [SERVICES_SLUGS.moderator.es]: SERVICE_CONTENT.moderator,
  [SERVICES_SLUGS.speaker.es]: SERVICE_CONTENT.speaker,
  [SERVICES_SLUGS.fakeWaiter.es]: SERVICE_CONTENT.fakeWaiter,
  [SERVICES_SLUGS.infiltratedCharacter.es]:
    SERVICE_CONTENT.infiltratedCharacter,
  [SERVICES_SLUGS.reporterTv.es]: SERVICE_CONTENT.reporterTv,
  [SERVICES_SLUGS.moderator.ca]: SERVICE_CONTENT.moderator,
  [SERVICES_SLUGS.speaker.ca]: SERVICE_CONTENT.speaker,
  [SERVICES_SLUGS.fakeWaiter.ca]: SERVICE_CONTENT.fakeWaiter,
  [SERVICES_SLUGS.infiltratedCharacter.ca]:
    SERVICE_CONTENT.infiltratedCharacter,
  [SERVICES_SLUGS.reporterTv.ca]: SERVICE_CONTENT.reporterTv
}
