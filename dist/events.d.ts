import ItemDeletedResponse from './ItemDeletedResponse';
import AuctionResponse from './AuctionResponse';
import ArtValueResponse from './ArtValueResponse';
export declare enum EVENT_TYPES {
    AUCTIONS_CREATED = "AUCTIONS:CREATED",
    AUCTIONS_UPDATED = "AUCTIONS_UPDATED",
    AUCTIONS_DELETED = "AUCTIONS:DELETED",
    ART_VALUES_CREATED = "ART_VALUES:CREATED",
    ART_VALUES_UPDATED = "ART_VALUES:UPDATED",
    ART_VALUES_DELETED = "ART_VALUES:DELETED"
}
export declare class ArtValueEvent {
    type: EVENT_TYPES;
    payload: AuctionResponse | ItemDeletedResponse | ArtValueResponse;
    static fromJson(jsonStr: string): [boolean, ArtValueEvent | null];
}
