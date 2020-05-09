export default class ItemDeletedResponse {
  id: string

  static fromJson(json) {
    const res = new ItemDeletedResponse()
    res.id = json.id

    return res
  }
}