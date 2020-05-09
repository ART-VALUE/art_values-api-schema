"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuctionResponse {
    static fromJson(json) {
        // TODO:validation
        const res = json;
        return res;
    }
}
exports.AuctionResponse = AuctionResponse;
class ItemDeletedResponse {
    static fromJson(json) {
        const res = new ItemDeletedResponse();
        res.id = json.id;
        return res;
    }
}
exports.ItemDeletedResponse = ItemDeletedResponse;
