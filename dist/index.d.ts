export declare enum AuctionStatus {
    CREATED = "CREATED",
    SCHEDULED = "SCHEDULED",
    RUNNING = "RUNNING",
    FINISHED = "FINISHED",
    CANCELED = "CANCELED"
}
export declare class AuctionResponse {
    readonly id?: string;
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
    lastBidValue: Number;
}
