import ItemDeletedResponse from './ItemDeletedResponse'
import AuctionResponse from './AuctionResponse'
import ArtValueResponse from './ArtValueResponse'

export enum EVENT_TYPES {
  AUCTIONS_CREATED = 'AUCTIONS:CREATED',
  AUCTIONS_UPDATED = 'AUCTIONS_UPDATED',
  AUCTIONS_DELETED = 'AUCTIONS:DELETED',
  ART_VALUES_CREATED = 'ART_VALUES:CREATED',
  ART_VALUES_UPDATED = 'ART_VALUES:UPDATED',
  ART_VALUES_DELETED = 'ART_VALUES:DELETED',
}

const eventSet = {
  [EVENT_TYPES.AUCTIONS_CREATED]: AuctionResponse.fromJson,
  [EVENT_TYPES.AUCTIONS_UPDATED]: AuctionResponse.fromJson,
  [EVENT_TYPES.AUCTIONS_DELETED]: ItemDeletedResponse.fromJson,
  [EVENT_TYPES.ART_VALUES_CREATED]: ArtValueResponse.fromJson,
  [EVENT_TYPES.ART_VALUES_UPDATED]: ArtValueResponse.fromJson,
  [EVENT_TYPES.ART_VALUES_DELETED]: ItemDeletedResponse.fromJson,
}

export class ArtValueEvent {
  type: EVENT_TYPES
  payload: AuctionResponse | ItemDeletedResponse | ArtValueResponse

  static fromJson(jsonStr: string): [boolean, ArtValueEvent|null] {
    try {
      const json = JSON.parse(jsonStr)
      if (eventSet[json.type]) {
        const res = new ArtValueEvent()
        res.type = json.type
        res.payload = eventSet[json.type](json.payload)

        return [true, res]
      }

      console.warn(`could not parse event data from json: ${jsonStr}`)
    } catch (ex) {
      console.warn(`failed parse ArtValueEvent: ${ex.message}`)
    }

    return [false, null]
  }
}
