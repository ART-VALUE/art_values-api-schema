"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuctionUpdateResponse {
    static fromJson(json) {
        // TODO:validation
        const res = json;
        return res;
    }
}
exports.AuctionUpdateResponse = AuctionUpdateResponse;
class AuctionDeleteResponse {
    static fromJson(json) {
        const res = new AuctionDeleteResponse();
        res.id = json.id;
        return res;
    }
}
exports.AuctionDeleteResponse = AuctionDeleteResponse;
class AuctionAddResponse extends AuctionUpdateResponse {
}
exports.AuctionAddResponse = AuctionAddResponse;
