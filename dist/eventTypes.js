"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EVENT_TYPES;
(function (EVENT_TYPES) {
    EVENT_TYPES[EVENT_TYPES["AUCTIONS_CREATED"] = 0] = "AUCTIONS_CREATED";
    EVENT_TYPES[EVENT_TYPES["AUCTIONS_DELETED"] = 1] = "AUCTIONS_DELETED";
    EVENT_TYPES[EVENT_TYPES["AUCTIONS_UPDATED"] = 2] = "AUCTIONS_UPDATED";
})(EVENT_TYPES || (EVENT_TYPES = {}));
exports.default = EVENT_TYPES;
