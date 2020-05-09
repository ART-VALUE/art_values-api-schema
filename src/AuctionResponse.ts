import AuctionStatus from './AutionStatus'
  
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

  lastBidValue: Number;

  static fromJson(json) {
    // TODO:validation
    const res = json as AuctionResponse

    return res
  } 
}
