import {AuctionAddResponse, AuctionDeleteResponse, AuctionUpdateResponse} from './AuctionResponses'

const AUCTIONS_CREATED = 'AUCTIONS:CREATED'
const AUCTIONS_UPDATED = 'AUCTIONS:UPDATED'
const AUCTIONS_DELETED = 'AUCTIONS:DELETED'

export const EVENT_TYPES = {
  AUCTIONS_CREATED,
  AUCTIONS_UPDATED,
  AUCTIONS_DELETED,
}

const eventSet = {
  [EVENT_TYPES.AUCTIONS_CREATED]: AuctionAddResponse.fromJson,
  [EVENT_TYPES.AUCTIONS_UPDATED]: AuctionUpdateResponse.fromJson,
  [EVENT_TYPES.AUCTIONS_DELETED]: AuctionDeleteResponse.fromJson,

}

export class ArtValueEvent {
  type: typeof EVENT_TYPES
  payload: AuctionAddResponse | AuctionDeleteResponse | AuctionUpdateResponse

  static fromJson(jsonStr: string): [boolean, ArtValueEvent|null] {
    try {
      const json = JSON.parse(jsonStr)
      if (eventSet[json.eventType]) {
        const res = new ArtValueEvent()
        res.type = json.eventType
        res.payload = eventSet[json.eventType](json.payload)

        return [true, res]
      }

      console.warn(`could not parse event data from json: ${jsonStr}`)
    } catch (ex) {
      console.warn(`failed parse ArtValueEvent: ${ex.message}`)
    }

    return [false, null]
  }
}
