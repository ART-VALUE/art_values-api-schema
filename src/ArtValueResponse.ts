import ArtValueStatus from './ArtValueStatus'
  
export default class ArtValueResponse {
  id: string
  value: string
  price: number
  status: ArtValueStatus
  owner: string|null
  updatedAt: Date
  createdAt: Date

  static fromJson(json) {
    // TODO:validation
    const res = json as ArtValueResponse

    return res
  } 
}
