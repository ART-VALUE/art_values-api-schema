"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuctionResponses_1 = require("./AuctionResponses");
const AUCTIONS_CREATED = 'AUCTIONS:CREATED';
const AUCTIONS_UPDATED = 'AUCTIONS:UPDATED';
const AUCTIONS_DELETED = 'AUCTIONS:DELETED';
exports.EVENT_TYPES = {
    AUCTIONS_CREATED,
    AUCTIONS_UPDATED,
    AUCTIONS_DELETED,
};
const eventSet = {
    [exports.EVENT_TYPES.AUCTIONS_CREATED]: AuctionResponses_1.AuctionAddResponse.fromJson,
    [exports.EVENT_TYPES.AUCTIONS_UPDATED]: AuctionResponses_1.AuctionUpdateResponse.fromJson,
    [exports.EVENT_TYPES.AUCTIONS_DELETED]: AuctionResponses_1.AuctionDeleteResponse.fromJson,
};
class ArtValueEvent {
    static fromJson(jsonStr) {
        try {
            const json = JSON.parse(jsonStr);
            if (eventSet[json.eventType]) {
                const res = new ArtValueEvent();
                res.type = json.eventType;
                res.payload = eventSet[json.eventType](json.payload);
                return [true, res];
            }
            console.warn(`could not parse event data from json: ${jsonStr}`);
        }
        catch (ex) {
            console.warn(`failed parse ArtValueEvent: ${ex.message}`);
        }
        return [false, null];
    }
}
exports.ArtValueEvent = ArtValueEvent;
