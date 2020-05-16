"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemDeletedResponse {
    static fromJson(json) {
        const res = new ItemDeletedResponse();
        res.id = json.id;
        return res;
    }
}
exports.default = ItemDeletedResponse;
