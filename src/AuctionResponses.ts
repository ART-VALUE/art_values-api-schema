import AuctionStatus from './AutionStatus'
  
class AuctionUpdateResponse {
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

  static fromJson(json) {
    // TODO:validation
    const res = json as AuctionUpdateResponse

    return res
  } 
}


class AuctionDeleteResponse {
  id: string

  static fromJson(json) {
    const res = new AuctionDeleteResponse()
    res.id = json.id

    return res
  }
}

class AuctionAddResponse extends AuctionUpdateResponse {}

export {
  AuctionAddResponse,
  AuctionUpdateResponse,
  AuctionDeleteResponse,
}