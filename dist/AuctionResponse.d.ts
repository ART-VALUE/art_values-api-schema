import AuctionStatus from './AutionStatus';
import AuctionType from './AutionType';
export default class AuctionResponse {
    id: string;
    value: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    /**
     * Scheduled starting time
     */
    startAt?: Date;
    /**
     * Scheduled finishing auction time
     */
    finishAt?: Date;
    /**
     * Fact starting time
     */
    startedAt?: Date;
    /**
     * Fact finishing time
     */
    finishedAt?: Date;
    status: AuctionStatus;
    lastBidValue: string;
    lastBidderId: string;
    type: AuctionType;
    static fromJson(json: any): AuctionResponse;
}
