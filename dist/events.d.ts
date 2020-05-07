import { AuctionAddResponse, AuctionDeleteResponse, AuctionUpdateResponse } from './AuctionResponses';
export declare const EVENT_TYPES: {
    AUCTIONS_CREATED: string;
    AUCTIONS_UPDATED: string;
    AUCTIONS_DELETED: string;
};
export declare class ArtValueEvent {
    type: typeof EVENT_TYPES;
    payload: AuctionAddResponse | AuctionDeleteResponse | AuctionUpdateResponse;
    static fromJson(jsonStr: string): [boolean, ArtValueEvent | null];
}
