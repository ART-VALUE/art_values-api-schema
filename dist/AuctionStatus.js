"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuctionStatus;
(function (AuctionStatus) {
    AuctionStatus["CREATED"] = "CREATED";
    AuctionStatus["SCHEDULED"] = "SCHEDULED";
    AuctionStatus["RUNNING"] = "RUNNING";
    AuctionStatus["FINISHED"] = "FINISHED";
    AuctionStatus["CANCELED"] = "CANCELED";
})(AuctionStatus || (AuctionStatus = {}));
exports.default = AuctionStatus;
