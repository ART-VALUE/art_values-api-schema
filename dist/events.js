"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemDeletedResponse_1 = require("./ItemDeletedResponse");
const AuctionResponse_1 = require("./AuctionResponse");
const ArtValueResponse_1 = require("./ArtValueResponse");
var EVENT_TYPES;
(function (EVENT_TYPES) {
    EVENT_TYPES["AUCTIONS_CREATED"] = "AUCTIONS:CREATED";
    EVENT_TYPES["AUCTIONS_UPDATED"] = "AUCTIONS_UPDATED";
    EVENT_TYPES["AUCTIONS_DELETED"] = "AUCTIONS:DELETED";
    EVENT_TYPES["ART_VALUES_CREATED"] = "ART_VALUES:CREATED";
    EVENT_TYPES["ART_VALUES_UPDATED"] = "ART_VALUES:UPDATED";
    EVENT_TYPES["ART_VALUES_DELETED"] = "ART_VALUES:DELETED";
})(EVENT_TYPES = exports.EVENT_TYPES || (exports.EVENT_TYPES = {}));
const eventSet = {
    [EVENT_TYPES.AUCTIONS_CREATED]: AuctionResponse_1.default.fromJson,
    [EVENT_TYPES.AUCTIONS_UPDATED]: AuctionResponse_1.default.fromJson,
    [EVENT_TYPES.AUCTIONS_DELETED]: ItemDeletedResponse_1.default.fromJson,
    [EVENT_TYPES.ART_VALUES_CREATED]: ArtValueResponse_1.default.fromJson,
    [EVENT_TYPES.ART_VALUES_UPDATED]: ArtValueResponse_1.default.fromJson,
    [EVENT_TYPES.ART_VALUES_DELETED]: ItemDeletedResponse_1.default.fromJson,
};
class ArtValueEvent {
    static fromJson(jsonStr) {
        try {
            const json = JSON.parse(jsonStr);
            if (eventSet[json.type]) {
                const res = new ArtValueEvent();
                res.type = json.type;
                res.payload = eventSet[json.type](json.payload);
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
