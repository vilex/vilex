import { ViEvent } from '../../vilex-dom/elements/velements'

export type UseEventType = { _$_type: 'events' } & ViEvent

export const useEvents = <T extends UseEventType>(events: T): T => {
  events._$_type = 'events'
  return events
}
