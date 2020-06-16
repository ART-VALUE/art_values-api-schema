import AuctionStatus from './AuctionStatus'
import AuctionType from './AuctionType';
  
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

  latestBids: {username: string, value: string, createdAt: Date}[]

  type: AuctionType;

  static fromJson(json) {
    // TODO:validation
    const res = json as AuctionResponse

    return res
  } 
}
